d3.select("#playPause").on("click", function() {
	var sel = d3.select(this);
	if (sel.property("disabled") == false) {
		sel.property("disabled", true);
		playAll();
	}
});

$("#zoom").on("click",function (e){
	if(!Mouse.zoomed)
		Mouse.zooming=true;
	else{
		Mouse.zoomed=false;
		zoom(Mouse.zoomed);
		d3.select("#zoom span")
		.classed("glyphicon-zoom-in",true)
		.classed("glyphicon-zoom-out",false);
	}
});


$("#slider").slider({
    animate: true,
    max: 10,
    min: 1,
    range: false,
    step: 1,
    value: 10,
    slide:function(event, ui) {
                $("#showWidth")[0].innerHTML="Width: "+ui.value;
				var o=objects.find(connectTarget);
				o.change(o.color,ui.value);
    }
});

$(".addText").on("click",function(e){
	if(d3.select(this).classed("horizontal"))
		addMyText(init_text,false,"black");
	else
		addMyText(init_text,true,"black");
});

$("#setText").on("click", function (e) {
	if(textTarget!=""){
		var o=objects.find(textTarget);
		var t=$("#inputContent").val();
		if(t=="")
			t="undefined";
		o.change(t);
		$("#inputContent").val("");
	}
});

$("#saveSvg").on("click", function(e) {
	fixCSS(false);
	crowbar("#canvas");
	fixCSS(true);
	$("a.svg-crowbar").remove();
});

$("#saveData").on("click", function(e) {
	var savData=Load.header+"\n";
	$(".object")
	.each(function(id,d){
		savData+=(objects.save($(this).attr("id"))+"\n");
	});
    var url =  encodeURIComponent(savData);  
    url = "data:text/csv;charset=utf-8,\ufeff"+url; 
	var a=d3.select("body")
	.append("a")
	.attr("class","downloadData")
	.attr("download","layout.csv")
	.attr("href",url)
	.attr("style","display:none");
	a[0][0].click();
	a.remove();
});

$("#loadData").on("click",function(e){	
	var file = document.getElementById("File").files[0];
	var fname=file.name
	var t;
	if(!Load.test(fname)){
		alert("Please choose csv files!");
		return;
	}
	else{
		t=fname.replace(".csv","").split("-");
		var terr=(t.length<3);
		for(var i=0;i<3;i++){
			t[i]=parseInt(t[i]);
			terr=terr||isNaN(t[i]);
		}
		terr=terr||(t[1]<1 || t[1]>12);
		terr=terr||(t[2]<1 || t[2]>31);
		if(terr){
			alert("Incorrect file name!");
			return;
		}	
	}
    myData.load(file);
    var k=setInterval(function(){
		if(myData.ready){
			clearInterval(k);
			myData.ready=false;
			myData.data=
			d3.csv.parse(myData.data,function(d){
	    		myData.init();
	    	});
			myData.update();
		}
	},100);
});

$("body").attr("onload","init()");

$("#Cansel").on("click", function (e) {
	clearFile();
});

d3.select("body")
.on("mouseup", release);
d3.select("body")
.on("keydown", keydown);
d3.select("body")
.on("keyup", keyup);

d3.select("#canvas")
.on("mousedown", mousedown);
d3.select("#canvas")
.on("mousemove", move);
d3.select("#canvas")
.on("mouseout", out);

//AJI changed here
function addMyText(string, vertical, color) {
	var tang=Math.random()*Math.PI/2;
	var t=getStartPoint();
	var o=objects.create([t[0]+Math.cos(tang)*rand_r,t[1]+Math.cos(tang)*rand_r],init_size*3,0,"text"+"_"+objects.ID["text"],"text",[string, vertical, color]);
	o.init();
	objects.array["text"].push(o);
	objects.ID["text"]++;
}

function appear(){
	if(!d3.select(this).classed("sel"))
		$("#resize"+$(this).attr("id")).find(".frame").css("opacity","1");
}

function disappear(){
	if(!d3.select(this).classed("sel") && !d3.select("#resize"+$(this).attr("id")).classed("resized"))
		$("#resize"+$(this).attr("id")).find(".frame").css("opacity","0");
}

function mousedown(){
	if(d3.event.which!=1){
		if(d3.event.which==3){
			Mouse.rightPos=d3.mouse(svg.node());
		}
		return;
	}
}

function press(){
	if(d3.event.which!=1){
		Mouse.rightPos=d3.mouse(svg.node());
		return;
	}
}

function move(){
	if(Mouse.mouseOut)
		Mouse.mouseOut=false;
	var pos=d3.mouse(svg.node());
	if(Mouse.zooming){
		if(!Mouse.zoomed){
			if(!$("#zoomFrame")[0]){
				var s=$("#canvas");
				Mouse.zoomSize=[zoom_limit[0]/2,zoom_limit[1]/2];
				var tsize=Mouse.zoomSize;
				var tx=Math.max(pos[0]-tsize[0]/2,0);
				tx=Math.min(zoom_limit[0],tx+tsize[0])-tsize[0];
				var ty=Math.max(pos[1]-tsize[1]/2,0);
				ty=Math.min(zoom_limit[1],ty+tsize[1])-tsize[1];
				svg.append("rect")
				.attr("x",tx)
				.attr("y",ty)
				.attr("width",tsize[0])
				.attr("height",tsize[1])
				.attr("class","zoomFrame")
				.attr("id","zoomFrame");
			}
			else{
				var tsize=Mouse.zoomSize;
				var tx=Math.max(pos[0]-tsize[0]/2,0);
				tx=Math.min(zoom_limit[0],tx+tsize[0])-tsize[0];
				var ty=Math.max(pos[1]-tsize[1]/2,0);
				ty=Math.min(zoom_limit[1],ty+tsize[1])-tsize[1];
				$("#zoomFrame")
				.attr("x",tx)
				.attr("y",ty);
				return;
			}
		}
	}
}

function out(){
	Mouse.mouseOut=true;
}

function release(){
	if(d3.event.which!=1)
		return;
	if(Mouse.zooming){
			if(!Mouse.zoomed){
				Mouse.zoomed=true;
				d3.select("#zoom span")
				.classed("glyphicon-zoom-in",false)
				.classed("glyphicon-zoom-out",true);
			}
			zoom(Mouse.zoomed);
		$("#zoomFrame").remove();
	}
	Mouse.reset();
}

function keydown(e){
	Key.key=d3.event.keyCode;
	Key.ctrl=d3.event.ctrlKey;
	Key.del=(d3.event.keyCode==46);
	if(Key.del)
		deleteSel();
	if(Key.ctrl && d3.event.keyCode==67){
		clipboard=[];
		d3.selectAll(".sel")
		.each(function(ind, d){
			var id=d3.select(this).attr("id");
			clipboard.push(id);
			return;
		});		
	}
	if(Key.ctrl && d3.event.keyCode==86){
		var tang=Math.random()*2*Math.PI;
		if(clipboard[0])
		$(clipboard)
		.each(function(ind, d){
			objects.copy(d,tang);
			return;
		});		
	}
}

function keyup(){
	Key.reset();
}

function changeFrame(id, pos, size, isResize, isRotate){
	var g=d3.select("#resize"+id);
	var tpos=pos.slice(0),tsize=size.slice(0);
	if(!tpos[0] && !tsize[0])
	{
		var f=g.select(".frame"), t=[];
		t[0]=parseFloat(f.attr("y"));
		t[1]=parseFloat(f.attr("x"));
		tsize[0]=parseFloat(f.attr("height"));
		tsize[1]=parseFloat(f.attr("width"));
		tpos[0]=t[1]+(tsize[1]-tsize[0])/2;
		tpos[1]=t[0]+(tsize[0]-tsize[1])/2;
	}
	else{
		if(isRotate){
			var t=tsize[0];
			tsize[0]=tsize[1];
			tsize[1]=t;
			t=[tpos[1],tpos[0]];
			tpos[0]=t[1]+(tsize[1]-tsize[0])/2;
			tpos[1]=t[0]+(tsize[0]-tsize[1])/2;
		}
	}
	g.select(".frame")
	.attr("x",tpos[0])
	.attr("y",tpos[1])
	.attr("width",tsize[0])
	.attr("height",tsize[1]);
	g.select(".drag_upleft")
	.attr("cx",tpos[0])
	.attr("cy",tpos[1]);
	g.select(".drag_upright")
	.attr("cx",tpos[0]+tsize[0])
	.attr("cy",tpos[1]);
	g.select(".drag_bottomleft")
	.attr("cx",tpos[0])
	.attr("cy",tpos[1]+tsize[1]);
	g.select(".drag_bottomright")
	.attr("cx",tpos[0]+tsize[0])
	.attr("cy",tpos[1]+tsize[1]);
}

function changeObject(sobj){
	var objectID=$(sobj).attr("id");
	var tobj=objects.find(objectID,objectID);
	if(tobj){
		var t=$(sobj).attr("transform");
		var tpos=[], tsize=[];
		tpos[0]=parseFloat(t.substring(t.indexOf("(")+1,t.indexOf(",")));
		tpos[1]=parseFloat(t.substring(t.indexOf(",")+1,t.indexOf(")")));
		t=t.substring(t.indexOf("scale"),t.length);
		tsize[0]=tobj.scales[0].invert(parseFloat(t.substring(t.indexOf("(")+1,t.indexOf(","))));
		tsize[1]=tobj.scales[1].invert(parseFloat(t.substring(t.indexOf(",")+1,t.indexOf(")"))));
		t=t.substring(t.indexOf("rotate"),t.length);
		trot=parseFloat(t.substring(t.indexOf("(")+1,t.indexOf(",")));
		tobj.pos=tpos;
		tobj.size=tsize;
		tobj.rotate=trot;
	}
}

function resetKey(){
	this.ctrl=false;
}

function resetMouse(){
	this.mouseOn=false;
	this.dragging=false;
	this.resize=false;
	this.multiple=false;
	this.brush=false;
	this.dragID="";
	this.mouseID="";
	this.mouseObj=undefined;
	this.resizeOrd=-1;
	this.zooming=false;
}

function deleteSel(){
	d3.selectAll(".sel")
	.each(function(ind, d){
		var id=d3.select(this).attr("id");
		d3.select("#resize"+id).remove();
		objects.del(id);
		d3.select(this).remove();
		return;
	});
}

function textEdit(){
	$("#inputText").modal({
		show: true,
		keyboard: false
	});
	var t=$(this).find("text").text();
	if(t==init_text||t=="undefined")
		t="";
	$("#inputContent").val(t);
	if(this.id && objects.type(this.id)=="text")
		textTarget=this.id;
	else
		textTarget=Mouse.rightID;
}

function connectEdit(){
	var id=this.id? this.id:Mouse.rightID;
	if(this.id && objects.type(this.id)=="connection"){
		var o=objects.find(this.id);
		connectColor.color(o.color);
	}
	$("#inputConnect").modal({
		show: true,
		keyboard: false
	});
	if(this.id && objects.type(this.id)=="connection")
		connectTarget=this.id;
	else
		connectTarget=Mouse.rightID;
}

function changeConnection(color, width){
	this.band=width;
	this.color=color;
	this.attr[4]=width;
	this.attr[3]=color;
	$("#"+this.name+" path")
	.attr("stroke-width",this.band)
	.attr("stroke",this.color);
}

function changeText(string){
	var tsize=this.size.slice(0);
	this.color=$("#TextColorPicker").val();
	if (this.vertical) {
		d3.select("#"+this.name + " text")
		.remove();
		d3.select("#"+this.name)
			.append("text")
			.attr("class","texts")
			.attr("fill", this.color)
			.attr("stroke",this.color)
 			.attr("font-size", this.originTextSize)
 			.selectAll("tspan")
 			    .data(string.split(""))
 			.enter().append("tspan")
 				.attr("x", 0)
 			    .attr("dy", "0.95em")
 			    .text(function(d){return d;});
	} else {
		$("#"+this.name+" text")
		.text(string)
		.attr("fill",this.color)
		.attr("stroke",this.color);
	}
	this.string=string;
	this.attr=[this.string,this.vertical,this.color];
	this.getOriginalText();
	this.size[0]=d3.select("#"+this.name + " text").node().getBoundingClientRect().width;
	this.size[1]=d3.select("#"+this.name + " text").node().getBoundingClientRect().height;
	if(Mouse.zoomed){
		var tpor=getPortion();
		this.size[0]=this.size[0]/tpor[0];
		this.size[1]=this.size[1]/tpor[1];
	}
	if(this.rotate%180!=0){
		var ts=this.size[0];
		this.size[0]=this.size[1];
		this.size[1]=ts;
		this.pos[0]=this.pos[0]+(tsize[0]-tsize[1])/2+(this.size[1]-this.size[0])/2;
		this.pos[1]=this.pos[1]+(tsize[1]-tsize[0])/2+(this.size[0]-this.size[1])/2;
	}
	var t=$("#"+this.name).attr("transform");
	var ttrans="translate("+this.pos[0]+","+this.pos[1]+")";
	var tscale=t.substring(t.indexOf(")")+1,t.length);
	var trot="rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")";
	tscale=tscale.substring(0,tscale.indexOf(")")+1);
	$("#"+this.name).attr("transform",ttrans+tscale+trot);
	changeFrame(this.name,this.pos,this.size,true,this.rotate%180!=0);
}

function connect(startID, endID, pos, size, path){
	var o=objects.create(pos, size, 0, "connection_"+objects.ID["connection"], "connection", [startID, endID, path, "#AAA", 6, size]);
	o.init();
	objects.array["connection"].push(o);
	objects.ID["connection"]++;
}

function getPath(start, end){
	var tx=end[0]-start[0];
	var ty=start[1]-end[1];
	if(tx==0)
		return [start[0], end[1]];
	var t=ty/tx;
	if(Math.abs(t)<Math.tan(Math.PI/8))
		return [end[0], start[1]];
	else
		if(Math.abs(t)<Math.tan(Math.PI/8*3)){
			var sx=tx/Math.abs(tx),sy=ty/Math.abs(ty);
			var l=Math.sqrt(tx*tx*2);
			var s=Math.abs((tx*tx+ty*Math.abs(tx)*sy)/(l*Math.sqrt(2)));
			return [start[0]+s*sx, start[1]-s*sy];
		}
		else
			return [start[0], end[1]];
}

function zoom(sign) {
	if(sign){
		var o=$("#zoomFrame");
		var tr=[-parseFloat(o.attr("x")),-parseFloat(o.attr("y"))];
		var tsize=[parseFloat(o.attr("width")),parseFloat(o.attr("height"))];
		var por=[svg_size[0]/tsize[0],svg_size[1]/tsize[1]];
		var t="scale("+por[0]+","+por[1]+")translate("+tr+")";
		var s=svg.attr("transform");
		svg.attr("transform",s.substring(0,s.indexOf(")")+1)+t);
	}
	else{
		var t="scale("+Mouse.zoomOrigin+")translate(0,0)";
		var s=svg.attr("transform");
		svg.attr("transform",s.substring(0,s.indexOf(")")+1)+t);			
	}
}

function getStartPoint(){
	var t=svg.attr("transform");
	if(t){
		t=t.substring(t.indexOf("translate"));
		t=t.substring(t.indexOf("(")+1,t.indexOf(")"));
		t=t.split(",");
		t=[-parseFloat(t[0]),-parseFloat(t[1])];
	}
	else{
		t=[0,0];
	}
	return t;
}

function getPortion(){
	var t=svg.attr("transform");
	if(t){
		t=t.substring(t.indexOf("scale"));
		t=t.substring(t.indexOf("(")+1,t.indexOf(")"));
		t=t.split(",");
		t=[parseFloat(t[0]),parseFloat(t[1])];
	}
	else{
		t=[1,1];
	}
	return t;
}

$(".legend").on("click", function(e){
	d3.selectAll(".legendUnit")
	.classed("active",false);
	d3.select(this)
	.classed("active",true);
	switch(d3.select(this).attr("id")){
		case "1":
			$(".legendUnit").css("display","none");
			$("#containersLegend").css("display","inline");
		break;
		case "2":
			$(".legendUnit").css("display","none");
			$("#valvesLegend").css("display","inline");
		break;
		case "3":
			$(".legendUnit").css("display","none");
			$("#othersLegend").css("display","inline");
		break;
		default:
	}
});

function loadLayout(){
		Load.get(true);
	var k=setInterval(function(){
		if(Load.readAll){
			clearInterval(k);
			Load.readAll=false;
			objects.clear();
			if(Mouse.zoomed){
				Mouse.zoomed=false;
				d3.select("#zoom span")
				.classed("glyphicon-zoom-in",true)
				.classed("glyphicon-zoom-out",false);
			}
			Load.load(Load.contents);
		}
	},100);
}

$(window).resize(function(){
	/*
	if(!Load.scrSize[0])
		Load.scrSize=svg_size.slice(0);
	var w=parseInt($("#canvas").css("width"));
	var h=w*svg_size[1]/svg_size[0];
	$("#canvas").css("height",h);
	var ws=d3.scale.linear().range([0,1]).domain([0,Load.scrSize[0]]);
	var hs=d3.scale.linear().range([0,1]).domain([0,Load.scrSize[1]]);
	$("#svgContent").attr("transform","scale("+ws(w)+","+hs(h)+")");
	Mouse.zoomOrigin=[ws(w),hs(h)];
	*/
	getH=innerHeight-parseFloat($(".navbar").css("height"))-2*parseFloat($("#canvas").css("margin"));
	//$(".svg-container").css("height",h*0.7).css("width",w);
	$("#canvas").css("height",getH);
	$("#svg-container").highcharts().setSize($("#svg-container").width(), $('.row').height());
	fixSize();
});

function init(){
	loadLayout();
	myData.preLoad();
}

function highlight(id, sign){
	d3.selectAll("#line"+id+" line")
	.classed("highlight",sign);
}

function dataHighlight(){

}