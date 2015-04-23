$("#canvas").contextMenu('myMenu1', {
	bindings: {
	    'copy': function(t) {
	    	var tang=Math.random()*2*Math.PI;
			d3.selectAll(".sel")
			.each(function(ind, d){
				var id=d3.select(this).attr("id");
				objects.copy(id, tang);
				return;
			});
	    },
	    'moveToTop': function(t) {
			var o=$(".sel");
			for(var i=0;i<o.length;i++){
				var d=$(o[i]), id=d.attr("id");
				var to=$("#resize"+id);
				to.insertAfter("g:last");
				d.insertAfter("g:last");
			}
	    },
	    'moveToBottom': function(t) {
			var o=$(".sel");
			for(var i=o.length-1;i>=0;i--){
				var d=$(o[i]), id=d.attr("id");
				var to=$("#resize"+id);
				d.insertAfter("#svgHead");
				to.insertAfter("#svgHead");
			}
	    },
	    'delete': function(t){
			deleteSel();
	    },
	    'rotate': function(t){
			$(".sel").each(function(id,d){
				var o=objects.find($(this).attr("id"));
				var t=$(this).attr("transform");
				o.rotate=(o.rotate+90)%360
				t=t.substring(0,t.indexOf("rotate"))+"rotate("+o.rotate+","+o.origin[0]/2+","+o.origin[1]/2+")";
				$(this).attr("transform",t);
				changeFrame(o.name,[],[],false,o.rotate%180!=0);
			});
	    },
	    'edit': function(t){
	    	if(objects.type(Mouse.rightID)=="text")
	    		textEdit();
	    	if(objects.type(Mouse.rightID)=="connection")
	    		connectEdit();
	    },
	    'addConnection': function(t){
	    	Mouse.connect=true;
			if(Mouse.connect){
				var pos=Mouse.rightPos;
				svg.append("g")
				.attr("class","tempConnect")
				.append("path")
				.attr("d","M"+pos[0]+","+pos[1]+" L"+pos[0]+","+pos[1])
				.attr("stroke","#AAA")
				.attr("stroke-width",6)
				.attr("class","pipe");
				Mouse.connectSize=[pos,pos];
				Mouse.connectStart=pos;
				Mouse.connectPath.push("M"+pos[0]+","+pos[1]+" ");
				Mouse.connectPath.push(" ");
			}
	    }
	},
	onShowMenu: function(e, menu) {
		if(!Mouse.connect){
			if(d3.select($(e.target).parent()[0]).classed("object"))
				Mouse.rightID=$(e.target).parent().attr("id");
			else
				Mouse.rightID=undefined;
		}
        if (!Mouse.rightID) {
        	Mouse.rightID="root";
          	//$('#addConnection', menu).remove();
          	$('#edit', menu).remove();        		
        }
        else{
        	if(!d3.select("#"+Mouse.rightID).classed("sel")){
	          	$('#addConnection', menu).remove();
	          	$('#edit', menu).remove();        		
        	}
        	else{
	        	if(objects.type(Mouse.rightID)=='text'){
	          		$('#addConnection', menu).remove();
	        	}
	        	else{
	        		if(objects.type(Mouse.rightID)!='connection')
	          			$('#edit', menu).remove();
	        	}        		
        	}
        }
        return menu;
      }
});

$("#plus").on("click",function(e){
	if(selObj!=""){
		var tsize;
		switch(selSize){
			case "xs":
				tsize=min_wid;
			break;
			case "sssm":
				tsize=init_size/8;
			break;
			case "ssm":
				tsize=init_size/4;
			break;
			case "sm":
				tsize=init_size/2;
			break;
			case "md":
				tsize=init_size;
			break;
			case "lg":
				tsize=init_size*1.5;
			break;
			case "xl":
				tsize=init_size*4;
			break;
		}
		var tang=Math.random()*Math.PI/2;
		var t=getStartPoint();
		var o=objects.create([t[0]+Math.cos(tang)*rand_r,t[1]+Math.cos(tang)*rand_r],tsize,0,selObj+"_"+objects.ID[selObj],selObj,0); //AJI changed here
		o.init();
		objects.array[selObj].push(o);
		objects.ID[selObj]++;
	}
});

$("#plus").tooltip();

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
		addMyText(init_text,false,"black","");
	else
		addMyText(init_text,true,"black","");
});

$("#display").on("click", function (e) {
	var o=addMyText("????",false,"#FFCC00","undefined");
})

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

$("#setData").on("click", function (e) {
	if(textTarget!=""){
		var o=objects.find(textTarget);
		var t=$("#dataContent").val();
		if(t=="")
			t="undefined";
		d3.select("#"+o.name)
		.classed("data_"+o.dataID,false)
		.classed("data_"+t,true);
		o.dataID=t;
		o.attr[3]=t;
		$("#"+o.name).find("title").text("data: "+t);
		$("#dataContent").val("");
	}
});

$("#setConnect").on("click", function (e) {
	if(connectTarget!=""){
		var o=objects.find(connectTarget);
		var c=$("#ConnectColorPicker").val();
		var w=$("#slider").slider("value");
		o.change(c,w);
	}
});

(function(){
	var color=$("#TextColorPicker");
	var title=$("#inputContent");

	textColor=$("#TextColorPicker").cxColor();
})();

(function(){
	var color=$("#ConnectColorPicker");

	connectColor=$("#ConnectColorPicker").cxColor();
	connectColor.color("#AAA");
})();

$(".objectSel").on("click",function(e){
	selObj=$(this).attr("id");
	selSize=$(this).attr("srcsize");
	d3.selectAll(".objectSel .glyphicon")
	.classed("glyphicon-ok",false);
	d3.select($(this).find(".glyphicon")[0])
	.classed("glyphicon-ok",true);
	$("#plus").attr("data-original-title",selObj);
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
	savData+="svg,0,"+$("#canvas").css("width")+"_"+$("#canvas").css("height")+",0,0\n"
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

$("#loadData").on("click", function (e) {
		Load.get(false);
	var k=setInterval(function(){
		if(Load.readAll){
			clearInterval(k);
			clearFile();
			Load.readAll=false;
			objects.clear();
			svg.attr("transform","scale(1,1)translate(0,0)");
			if(Mouse.zoomed){
				Mouse.zoomed=false;
				d3.select("#zoom span")
				.classed("glyphicon-zoom-in",true)
				.classed("glyphicon-zoom-out",false);
			}
			Load.load(Load.contents);
		}
	},100);
	clearFile();
});

$("#sampleData").on("click", function (e) {
		Load.get(true);
	var k=setInterval(function(){
		if(Load.readAll){
			clearInterval(k);
			Load.readAll=false;
			objects.clear();
			svg.attr("transform","scale(1,1)translate(0,0)");
			if(Mouse.zoomed){
				Mouse.zoomed=false;
				d3.select("#zoom span")
				.classed("glyphicon-zoom-in",true)
				.classed("glyphicon-zoom-out",false);
			}
			Load.load(Load.contents);
		}
	},100);
});

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
function addMyText(string, vertical, color, dataID) {
	var tang=Math.random()*Math.PI/2;
	var t=getStartPoint();
	var o=objects.create([t[0]+Math.cos(tang)*rand_r,t[1]+Math.cos(tang)*rand_r],dataID==""?init_size*3:init_size,0,"text"+"_"+objects.ID["text"],"text",[string, vertical, color, dataID]);
	o.init();
	objects.array["text"].push(o);
	objects.ID["text"]++;
	return o;
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
	if(!Mouse.mouseOn){
		$("#jqContextMenu").hide();
		$("#jqContextShadow").hide()
		Mouse.brush=true;
		var pos=d3.mouse(svg.node());
		Mouse.mousePos=pos;
		svg.append("rect")
		.attr("x",pos[0])
		.attr("y",pos[1])
		.attr("width",1)
		.attr("height",1)
		.attr("class","brushing")
		.attr("id","brush");
	}
}

function press(){
	if(d3.event.which!=1){
		Mouse.rightPos=d3.mouse(svg.node());
		return;
	}
	if(!Mouse.mouseOn){
		Mouse.mouseOn=true;
		var pos=d3.mouse(svg.node());
		var t=$(this).attr("id");
		var tcenter=[];
		Mouse.resize=(t.indexOf("resize")>=0);	
		if(Mouse.resize){
			Mouse.mouseID=t.replace("resize","");
			t=d3.select("g#"+Mouse.mouseID).attr("transform");
		}
		else			
			Mouse.mouseID=t;
		if($(".sel")[0] && !Key.ctrl){
			var tsign1=d3.select("g#"+Mouse.mouseID).classed("sel");
			var tsign2=d3.select("#resize"+Mouse.mouseID).classed("selFrame");
			d3.selectAll(".selFrame")
			.classed("selFrame",false);
			d3.selectAll(".sel")
			.classed("sel",false);
			$(".frame").css("opacity","0");
			$("#resize"+Mouse.mouseID).find(".frame").css("opacity","1");
			d3.select("g#"+Mouse.mouseID).classed("sel",tsign1);
			d3.select("#resize"+Mouse.mouseID).classed("selFrame",tsign2);
		};
		d3.select("#resize"+Mouse.mouseID).classed("resized", Mouse.resize);
		if(!Mouse.resize){
			if($(".sel")[0]){
				if(!Key.ctrl || !d3.select(this).classed("sel")){				
					t=$(this).attr("transform");	
					tcenter[0]=[parseFloat(t.substring(t.indexOf("(")+1,t.indexOf(","))),
					parseFloat(t.substring(t.indexOf(",")+1,t.indexOf(")")))];
				}
				else{
					$(".sel").each(function(id,d){							
						t=$(d).attr("transform");	
						tcenter[id]=[parseFloat(t.substring(t.indexOf("(")+1,t.indexOf(","))),
						parseFloat(t.substring(t.indexOf(",")+1,t.indexOf(")")))];
					});
					Mouse.multiple=true;
				}
			}
			else{
				t=$(this).attr("transform");	
				tcenter[0]=[parseFloat(t.substring(t.indexOf("(")+1,t.indexOf(","))),
				parseFloat(t.substring(t.indexOf(",")+1,t.indexOf(")")))];				
			}
			Mouse.mousePos=[];
			for(var i in tcenter){
				Mouse.mousePos.push([pos[0]-tcenter[i][0],pos[1]-tcenter[i][1]]);
			}
			Mouse.mouseObj=objects.find(Mouse.mouseID);
		}
		else{
			if(d3.select("#"+Mouse.mouseID).classed("sel") && Key.ctrl){
				Mouse.multiple=true;
				Mouse.mouseObj=[];
				$(".sel").each(function(id,d){
					var tid=$(this).attr("id");
					if(tid==Mouse.mouseID)
						Mouse.resizeOrd=Mouse.mouseObj.length;
					Mouse.mouseObj.push(objects.find(tid));
				});
			}
			else{
				Mouse.resizeOrd=0;
				Mouse.mouseObj=[objects.find(Mouse.mouseID)];
			}
		}
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
				Mouse.zoomSize=[svg_size[0]/2,svg_size[1]/2];
				var tsize=Mouse.zoomSize;
				var tx=Math.max(pos[0]-tsize[0]/2,0);
				tx=Math.min(svg_size[0],tx+tsize[0])-tsize[0];
				var ty=Math.max(pos[1]-tsize[1]/2,0);
				ty=Math.min(svg_size[1],ty+tsize[1])-tsize[1];
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
				tx=Math.min(svg_size[0],tx+tsize[0])-tsize[0];
				var ty=Math.max(pos[1]-tsize[1]/2,0);
				ty=Math.min(svg_size[1],ty+tsize[1])-tsize[1];
				$("#zoomFrame")
				.attr("x",tx)
				.attr("y",ty);
				return;
			}
		}
	}
	if(Mouse.connect){
		var t="";
		for(var i=0;i<Mouse.connectPath.length-1;i++)
			t=t+Mouse.connectPath[i];
		var tpos=getPath(Mouse.connectStart, pos);
		$(".tempConnect path")
		.attr("d",t+" L"+tpos[0]+","+tpos[1]);
	}
	if(Mouse.mouseOn){
		if(!Mouse.dragging)
			Mouse.dragging=true;
		var o=$("g#"+Mouse.mouseID);
		var t;
		if(Mouse.resize){
			var tobj=Mouse.mouseObj[Mouse.resizeOrd];
			var twidth, tsize, tpos;
			var rpos=tobj.pos.slice(0), rsize=tobj.size.slice(0), rasp=tobj.asp;
			if(tobj.rotate%180!=0){
				rsize=[rsize[1],rsize[0]];
				var st=[rpos[1],rpos[0]];
				rpos[0]=st[1]+(rsize[1]-rsize[0])/2;
				rpos[1]=st[0]+(rsize[0]-rsize[1])/2;	
				rasp=1/rasp;			
			}
			switch(Mouse.dragID){
				case "upleft":
					twidth=Math.max(rpos[0]+rsize[0]-pos[0], min_wid);
					tsize=[twidth, twidth*rasp];
					tpos=[(rpos[0]+rsize[0]-tsize[0]),(rpos[1]+rsize[1]-tsize[1])];
				break;
				case "upright":
					twidth=Math.max((pos[0]-rpos[0]), min_wid);
					tsize=[twidth, twidth*rasp];
					tpos=[rpos[0],(rpos[1]+rsize[1]-tsize[1])];
				break;
				case "bottomleft":
					twidth=Math.max((rpos[0]+rsize[0]-pos[0]), min_wid);
					tsize=[twidth, twidth*rasp];
					tpos=[(rpos[0]+rsize[0]-tsize[0]),rpos[1]];
				break;
				case "bottomright":	
					twidth=Math.max((pos[0]-rpos[0]), min_wid);
					tsize=[twidth, twidth*rasp];
					tpos=[rpos[0],rpos[1]];
				break;
				default:
			}
			if(tobj.rotate%180!=0){
				tsize=[tsize[1],tsize[0]];
				var st=[tpos[1],tpos[0]];
				tpos[0]=st[1]+(tsize[1]-tsize[0])/2;
				tpos[1]=st[0]+(tsize[0]-tsize[1])/2;				
			}
			t="translate("+tpos[0]+","+tpos[1]+")scale("+tobj.scales[0](tsize[0])+","+tobj.scales[1](tsize[1])+")"+"rotate("+tobj.rotate+","+tobj.origin[0]/2+","+tobj.origin[1]/2+")";
			changeFrame(Mouse.mouseID,tpos,tsize,true,tobj.rotate%180!=0);
			o.attr("transform",t);
			if(Mouse.multiple){
				var tpor=tobj.scales[0](tsize[0])/tobj.scales[0](tobj.size[0]);
				for(var i in Mouse.mouseObj){
					tobj=Mouse.mouseObj[i];
					if(tobj.name==Mouse.mouseID)
						continue;
					twidth=Math.max(tobj.size[0]*tpor, min_wid);
					rpos=tobj.pos.slice(0), rsize=tobj.size.slice(0), rasp=tobj.asp;
					if(tobj.rotate%180!=0){
						rsize=[rsize[1],rsize[0]];
						var st=[rpos[1],rpos[0]];
						rpos[0]=st[1]+(rsize[1]-rsize[0])/2;
						rpos[1]=st[0]+(rsize[0]-rsize[1])/2;	
						rasp=1/rasp;			
						twidth=Math.max(tobj.size[1]*tpor, min_wid);
					}
					tsize=[twidth, twidth*rasp];
					switch(Mouse.dragID){
						case "upleft":
							tpos=[(rpos[0]+rsize[0]-tsize[0]),(rpos[1]+rsize[1]-tsize[1])];
						break;
						case "upright":
							tpos=[rpos[0],(rpos[1]+rsize[1]-tsize[1])];
						break;
						case "bottomleft":
							tpos=[(rpos[0]+rsize[0]-tsize[0]),rpos[1]];
						break;
						case "bottomright":	
							tpos=[rpos[0],rpos[1]];
						break;
						default:
					}
					if(tobj.rotate%180!=0){
						tsize=[tsize[1],tsize[0]];
						var st=[tpos[1],tpos[0]];
						tpos[0]=st[1]+(tsize[1]-tsize[0])/2;
						tpos[1]=st[0]+(tsize[0]-tsize[1])/2;				
					}
					t="translate("+tpos[0]+","+tpos[1]+")scale("+tobj.scales[0](tsize[0])+","+tobj.scales[1](tsize[1])+")"+"rotate("+tobj.rotate+","+tobj.origin[0]/2+","+tobj.origin[1]/2+")";
					changeFrame(tobj.name,tpos,tsize,true,tobj.rotate%180!=0);
					$("#"+tobj.name).attr("transform",t);		
				}			
			}
		}
		else{
			if(Mouse.multiple){
				$(".sel").each(function(id,d){
					var tpos=[(pos[0]-Mouse.mousePos[id][0]),(pos[1]-Mouse.mousePos[id][1])];
					t=$(d).attr("transform");
					var tang=t.substring(t.indexOf("rotate"),t.length);
					tang=parseInt(tang.substring(tang.indexOf("(")+1,tang.indexOf(",")));
					t="translate("+tpos[0]+","+tpos[1]+")"+t.substring(t.indexOf(")")+1,t.length);
					var tid=$(d).attr("id");
					changeFrame(tid,tpos,objects.find(tid).size,false,tang%180!=0);
					d3.select(d).attr("transform",t);
				});
			}
			else{
				var tpos=[(pos[0]-Mouse.mousePos[0][0]),(pos[1]-Mouse.mousePos[0][1])];
				t=o.attr("transform");
				var tang=t.substring(t.indexOf("rotate"),t.length);
				tang=parseInt(tang.substring(tang.indexOf("(")+1,tang.indexOf(",")));
				t="translate("+tpos[0]+","+tpos[1]+")"+t.substring(t.indexOf(")")+1,t.length);
				changeFrame(Mouse.mouseID,tpos,objects.find(Mouse.mouseID).size,false,tang%180!=0);
				o.attr("transform",t);
			}
		}
	}
	else{
		var pos=d3.mouse(svg.node());
		if(Mouse.brush){
			var wid=pos[0]-Mouse.mousePos[0],
			hei=pos[1]-Mouse.mousePos[1];
			var tpos=[Mouse.mousePos[0]+(wid>0?0:wid),
			Mouse.mousePos[1]+(hei>0?0:hei)];
			$("#brush")
			.attr("x",tpos[0])
			.attr("y",tpos[1])
			.attr("width",Math.abs(wid))
			.attr("height",Math.abs(hei));
		}
		else{
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
	if(Mouse.connect && Mouse.mouseID==""){
		var stop=false;
		if(Mouse.dblClock>0){
			clearInterval(Mouse.dblClock);
			if(Mouse.dblCount<=3){
				Mouse.mouseObj={name:"root"};
				Mouse.dblClock=0;
				stop=true;
			}
			Mouse.dblCount=0;
		}
		if(!stop)
			Mouse.dblClock=setInterval(function(){
				Mouse.dblCount++;
			},50);
	}
	if(Mouse.connect){
		var pos=d3.mouse(svg.node());
		var tpos=getPath(Mouse.connectStart, pos);
		Mouse.connectPath[Mouse.connectPath.length-1]="L"+(tpos[0])+","+(tpos[1])+" ";
		Mouse.connectSize[0]=[Math.min(Mouse.connectSize[0][0],tpos[0]),Math.min(Mouse.connectSize[0][1],tpos[1])];
		Mouse.connectSize[1]=[Math.max(Mouse.connectSize[1][0],tpos[0]),Math.max(Mouse.connectSize[1][1],tpos[1])];
		Mouse.connectStart=tpos;
		Mouse.connectPath.push(" ");
		if(Mouse.mouseObj){
			Mouse.connect=false;
			var t="";
			for(var i=0;i<Mouse.connectPath.length-1;i++)
				t=t+Mouse.connectPath[i];
			var tsize=[Mouse.connectSize[1][0]-Mouse.connectSize[0][0]+16, Mouse.connectSize[1][1]-Mouse.connectSize[0][1]+16];
			connect(Mouse.rightID, Mouse.mouseObj.name, [Mouse.connectSize[0][0]-8, Mouse.connectSize[0][1]-8], tsize, t);
			Mouse.connectPath=[];
			Mouse.connectStart=[];
			Mouse.connectSize=[];
		}
	}
	if(Mouse.brush){
		var o=d3.select("#brush");
		var tpos=[parseFloat(o.attr("x")),parseFloat(o.attr("y"))];
		var tsize=[parseFloat(o.attr("width")),parseFloat(o.attr("height"))];
		var xr=[tpos[0],tpos[0]+tsize[0]],yr=[tpos[1],tpos[1]+tsize[1]];
		if(!Key.ctrl){
			d3.selectAll(".selFrame")
			.classed("selFrame",false);
			d3.selectAll(".sel")
			.classed("sel",false);
			$(".frame").css("opacity","0");
		}
		$(".resize")
		.each(function(id,d){
			var to=$(this).find("rect");
			var dpos=[parseFloat(to.attr("x")),parseFloat(to.attr("y"))];
			var dsize=[parseFloat(to.attr("width")),parseFloat(to.attr("height"))];
			if(dpos[0]>=xr[0] && dpos[0]+dsize[0]<=xr[1]
				&& dpos[1]>=yr[0] && dpos[1]+dsize[1]<=yr[1]){
				d3.select(this).classed("selFrame",true);
				d3.select("#"+$(this).attr("id").replace("resize","")).classed("sel",true);
				$(this).find(".frame").css("opacity","1");
			}
		});
		d3.selectAll("#brush").remove();
	}
	else{
		if(!Mouse.dragging){
			if(Mouse.mouseID==""){
				if(!Mouse.mouseOut){
					d3.selectAll(".selFrame")
					.classed("selFrame",false);
					d3.selectAll(".sel")
					.classed("sel",false);
					$(".frame").css("opacity","0");
				}
			}
			else{
				var o=d3.select("#"+Mouse.mouseID);
				if(!Key.ctrl){
					var tsign=o.classed("sel");
					d3.selectAll(".sel").classed("sel",false);
					d3.selectAll(".selFrame").classed("selFrame",false);
					$(".frame").css("opacity","0");
					$("#resize"+Mouse.mouseID).find(".frame").css("opacity","1");
					o.classed("sel",tsign);	
				}
				if(o.classed("sel")){
					d3.select("#resize"+Mouse.mouseID)
					.classed("selFrame",false);
					o.classed("sel",false);
				}
				else{
					d3.select("#resize"+Mouse.mouseID)
					.classed("selFrame",true);
					o.classed("sel",true);
				}
			}
		}
		else{
			if(Mouse.multiple)
				$(".sel").each(function(id,d){
					changeObject(d);
				});
			else
				changeObject($("#"+Mouse.mouseID)[0]);
			if(Mouse.resize){
				var o=$("#resize"+Mouse.mouseID);
				d3.select(o[0]).classed("resized",false);
				if(!d3.select(o[0]).classed("selFrame"))
					$("#resize"+Mouse.mouseID).find(".frame").css("opacity",0);
			}
		}
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

function dataEdit(){
	$("#inputData").modal({
		show: true,
		keyboard: false
	});
	var t=$(this).find("title").text().replace("data: ","");
	$("#dataContent").val(t);
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
	this.attr=[this.string,this.vertical,this.color,this.dataID];
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
		svg.attr("transform",t);
	}
	else{
		var t="scale("+Mouse.zoomOrigin+")translate(0,0)";
		svg.attr("transform",t);			
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
})

$(window).resize(function(){
	if(!Load.scrSize[0])
		Load.scrSize=svg_size.slice(0);
	var w=parseInt($("#canvas").css("width"));
	var h=w*svg_size[1]/svg_size[0];
	$("#canvas").css("height",h);
	var ws=d3.scale.linear().range([0,1]).domain([0,Load.scrSize[0]]);
	var hs=d3.scale.linear().range([0,1]).domain([0,Load.scrSize[1]]);
	$("#svgContent").attr("transform","scale("+ws(w)+","+hs(h)+")");
	Mouse.zoomOrigin=[ws(w),hs(h)];
});