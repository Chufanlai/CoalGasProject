function readLayout(file){
	var tlength=getLength(file);
	d3.csv.parse(file, function(t, id){
		if(Load.illegal)
			return;
		if(id==0){
			if(!t.Type || !t.Pos || !t.Width){
				Load.illegal=true;
				alert("Incorrect data format!");
				return;
			}
		}			
		else{
			if(id==tlength-1 && t.Type=="svg"){
				Load.scrSize=t.Width.split("_");
				Load.scrSize[0]=parseFloat(Load.scrSize[0]);
				Load.scrSize[1]=parseFloat(Load.scrSize[1]);
				fixSize();
				return;
			}
		}
		var tpos=t.Pos;
		tpos=[parseFloat(tpos.substring(0,tpos.indexOf("_"))),
			parseFloat(tpos.substring(tpos.indexOf("_")+1,tpos.length))];
		var type=t.Type,tAttr=t.Attr,tsize;
		var o;
		if(type=="text" || type=="connection"){
			tAttr=[];
			tAttr=t.Attr.split("|_|");
			if(type=="text"){
				tsize=parseFloat(t.Width);
				tAttr[1]=(tAttr[1]=="true");
			}
			if(type=="connection"){
				tAttr[2]=tAttr[2].replace(RegExp("#","g"), ",");
				tAttr[2]=tAttr[2].replace(RegExp("_","g"), " ");
				tAttr[5]=tAttr[5].split("#");
				tAttr[5]=[parseFloat(tAttr[5][0]),parseFloat(tAttr[5][1])];
				tsize=t.Width.split("_");
				tsize[0]=parseFloat(tsize[0]);
				tsize[1]=parseFloat(tsize[1]);
			}
		}
		else
			tsize=parseFloat(t.Width);
		o=objects.create(tpos,tsize,parseFloat(t.Rotate),type+"_"+objects.ID[type],type,tAttr);//need to change
		o.init();
		objects.array[type].push(o);
		objects.ID[type]++;
	});
}

function findObject(id){
	return findObj(this.array[this.type(id)], id);
}

function findObj(array, id){
	var ord=-1;
	for(var i=0;i<array.length;i++)
		if(array[i].name==id){
			ord=i;
			break;
		}
	if(ord<0)
		return undefined;
	else
		return array[ord];
}

function delObject(id){
	delObj(this.array[this.type(id)], id);
}

function delObj(array, id){
	var ord=-1;
	for(var i=0;i<array.length;i++)
		if(array[i].name==id){
			ord=i;
			break;
		}
	if(ord<0)
		return;
	else
		array.splice(ord,1);
}

function copyObject(id, tang){
	var o=this.find(id);
	var type=this.type(id);
	var tsize, to;
	if(type=="connection"){
		tsize=o.size;
	}
	else
		if(type=="text" && o.vertical)
			tsize=o.size[1];
		else
			tsize=o.size[0];
	var to=this.create([o.pos[0]+rand_r*Math.cos(tang),o.pos[1]+rand_r*Math.sin(tang)],tsize,o.rotate,type+"_"+objects.ID[type],type,o.attr);
	to.init();
	this.array[type].push(to);
	this.ID[type]++;
}

function initObjects(){
	var tarr={}, tID={};
	$.each(this.types, function(id, d) {
		tarr[d]=[];
		tID[d]=0;
	});
	this.array=tarr;
	this.ID=tID;
}

function clearObjects(){
	objects=createObjects(objTypes);
	svg.selectAll("g")
	.remove();
}

function saveObject(id){
	var o=this.find(id), type=this.type(id);
	var tsize=o.size[0],tattr=o.attr;
	if(type=="text"){
		if(o.vertical)
			tsize=o.size[1];
		tattr=o.attr.join("|_|");
	}
	else
		if(type=="connection"){
			tattr=o.attr.slice(0);
			tattr[2]=tattr[2].replace(RegExp(",","g"), "#");
			tattr[2]=tattr[2].replace(RegExp(" ","g"), "_");
			tattr[5]=tattr[5].join("#");
			tattr=tattr.join("|_|");
			tsize=o.size.join("_");
		}
	return this.type(o.name)+","+o.pos[0]+"_"+o.pos[1]+","+tsize+","+o.rotate+","+tattr;

}

function typeOf(id){
	var type;
	$.each(this.types, function(i, d) {
		if(!type && id.indexOf(d+"_")>=0)
			type=d;
	});
	return type;
}

function createObject(pos, width, rotate, name, type, value){//Change here
	switch(type){
		case "bucket":
			return createBucket(pos, width, rotate, name);
		break;
		case "tank1":
			return createTank1(pos, width, rotate, name);
		break;
		case "tank2":
			return createTank2(pos, width, rotate, name);
		break;
		case "tank3":
			return createTank3(pos, width, rotate, name);
		break;
		case "separator":
			return createSeparator(pos, width, rotate, name);
		break;
		case "feeder":
			return createFeeder(pos, width, rotate, name);
		break;
		case "conveyer":
			return createConveyer(pos, width, rotate, name);
		break;
		case "gauge":
			return createGauge1(pos, width, rotate, name, value);
		break;
		case "gauge2":
			return createGauge2(pos, width, rotate, name, value);
		break;
		case "vibrating":
			return createVibFeeder(pos, width, rotate, name);
		break;
		case "valve1":
			return createValve1(pos, width, rotate, name);
		break;
		case "valve2":
			return createValve2(pos, width, rotate, name);
		break;
		case "valve3":
			return createValve3(pos, width, rotate, name);
		break;
		case "valve4":
			return createValve4(pos, width, rotate, name);
		break;
		case "valve5":
			return createValve5(pos, width, rotate, name);
		break;
		case "valve6":
			return createValve6(pos, width, rotate, name);
		break;
		case "valve7":
			return createValve7(pos, width, rotate, name);
		break;
		case "valve8":
			return createValve8(pos, width, rotate, name);
		break;
		case "valve9":
			return createValve9(pos, width, rotate, name);
		break;
		case "valve10":
			return createValve10(pos, width, rotate, name);
		break;
		case "valve11":
			return createValve11(pos, width, rotate, name);
		break;
		case "capacitor":
			return createCapacitor(pos, width, rotate, name);
		break;
		case "arrow":
			return createArrow(pos, width, rotate, name);
		break;
		case "diode":
			return createDiode(pos, width, rotate, name);
		break;
		case "monitoring":
			return createMonitoring(pos, width, rotate, name);
		break;
		case "nozzle":
			return createNozzle(pos, width, rotate, name);
		break;
		case "text":
			return createText(pos, width, rotate, value, name);//AJI changed here
		break;
		case "connection":
			return createConnection(pos, width, rotate, name, value);
		break;
	}
}

//loading files
function getData(sample){
	if(sample){
		d3.text("sources/layout.csv")
		.get(function(e,d){
			Load.contents=d;
			Load.illegal=false;
			Load.readAll=true;
			Load.ready=true;
		});
	}
	else{
	    var file = document.getElementById("File").files[0];  
	    var reader = new FileReader();
	    //Read data as text 
	    reader.readAsText(file);  
	    reader.onload=function(f){
	    	Load.contents=this.result;
	    	Load.readAll=true;
	    	if(Load.illegal){
	    		Load.ready=true;
	    	}
	    }
	}
} 

function getLength(text){
	var t=Load.header.match(/,/g);
	return (text.split(",").length-1)/t.length-1;
}

function clearFile(){
     var file = document.getElementById("File");
	// for IE, Opera, Safari, Chrome
     if (file.outerHTML) {
         file.outerHTML = file.outerHTML;
     } else { // FF(包括3.5)
         file.value = "";
     }
}

function changeGauge(value){
	if(value<0)
		value=0;
	if(value>1)
		value=1;
	this.attr=value;
	var o=$("#"+this.name+" rect");
	o.attr("y",parseFloat(o.attr("y"))+parseFloat(o.attr("height"))-this.maxHeight*value);
	o.attr("height",this.maxHeight*value);
}
/*
function getConnectionPath(){
	var tx=[this.startPos[0], this.endPos[0]].sort(d3.ascending), 
		ty=[this.startPos[1], this.endPos[1]].sort(d3.ascending);
	this.pos=[tx[0],ty[0]];
	this.startPos=[this.startPos[0]-tx[0], this.startPos[1]-ty[0]];
	this.endPos=[this.endPos[0]-tx[0], this.endPos[1]-ty[0]];
	tx=[this.startPos[0], this.endPos[0]].sort(d3.ascending);
	ty=[this.startPos[1], this.endPos[1]].sort(d3.ascending)
	var p1, p2;
	if(this.endPos[0]==this.startPos[0]){
		var tlength=(this.endPos[1]-this.startPos[1])/3;
		p1=[this.startPos[0], this.startPos[1]+tlength];
		p2=[this.startPos[0], this.startPos[1]]+tlength*2;
		this.pos=[(this.startPos[0]+this.endPos[0])/2, (this.startPos[1]+this.endPos[1])/2];
	}
	else{
		var abstan=Math.abs((this.endPos[1]-this.startPos[1])/(this.endPos[0]-this.startPos[0]));
		var mdl;
		if(abstan>1){
			mdl=(this.endPos[1]+this.startPos[1])/2;
			p1=[this.startPos[0], mdl];
			p2=[this.endPos[0], mdl];
		}
		else{
			mdl=(this.endPos[0]+this.startPos[0])/2;
			p1=[mdl, this.startPos[1]];
			p2=[mdl, this.endPos[1]];
		}
	}
	this.size=[tx[1]-tx[0], ty[1]-ty[0]];
	this.origin=[tx[1]-tx[0], ty[1]-ty[0]];
	this.scales=[
	d3.scale.linear().domain([0,this.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,this.origin[1]]).range([0,1])];
	this.asp=this.origin[1]/this.origin[0];
	var tstart="M "+this.startPos[0]+","+this.startPos[1]+" L"+p1[0]+","+p1[1];
	var tmiddle=" L "+p1[0]+","+p1[1]+" L"+p2[0]+","+p2[1];
	var tend=" L "+p2[0]+","+p2[1]+" L"+this.endPos[0]+","+this.endPos[1];
	this.paths=[tstart+tmiddle+tend];
	this.path_fills=["none"];
}
*/

function fixCSS(restore){
	if(!restore){
		$(".normal")
		.css("stroke-width",0.5);
		$(".thick_border")
		.css("stroke-width",1);
		$("#background")
		.attr("width",svg_size[0])
		.attr("height",svg_size[1]);
	}
	else{
		$(".normal")
		.css("stroke-width",1);
		$(".thick_border")
		.css("stroke-width",10);		
	}
}

function fixSize(){
	var h=parseFloat($("#canvas").css("height"));
	var w=parseFloat($("#canvas").css("width"));
	var aw=w,ah=h;
	var tasp=Load.scrSize[1]/Load.scrSize[0];
	if(w*tasp>h)
		aw=h/tasp;
	else
		ah=w*tasp;
	$("#svgContent").attr("transform","translate("+((w-aw)/2)+","+((h-ah)/2)+")scale("+(aw/Load.scrSize[0])+","+(ah/Load.scrSize[1])+")");
	var vh=parseFloat($("#vis_1").css("height"));
	var vw=parseFloat($("#vis_1").css("width"));
	svg_size=[aw,ah];
	Mouse.zoomOrigin=[aw/Load.scrSize[0],ah/Load.scrSize[1]];
	zoom_limit=[svg_size[0]/aw*Load.scrSize[0],svg_size[1]/ah*Load.scrSize[1]];
}

function fixTable(){	
	$(".dataTables_wrapper .dataTables_filter").css("float","none").css("text-align","center");
	$("#myTable_info").css("float","none").css("text-align","center");
	$("#myTable_paginate").css("float","none").css("text-align","center");
	$(".dataTables_paginate").css("font-weight","bold");
	$(".extruder .text").css("text-shadow","none");
	$(".dataTables_scrollBody").css("height", svg_size[1]
	-parseFloat($("#myTable_filter").css("height"))
	-parseFloat($(".dataTables_scrollHead").css("height"))
	-parseFloat($(".dataTables_info").css("height"))
	-parseFloat($(".dataTables_paginate").css("height")));
	$(".unbounded td").on("mouseover",function(d){
		$(this).parent().addClass("chosen");
	})
	.on("mouseout",function(e){
		$(this).parent().removeClass("chosen");
	});
	$(".unbounded td").on("mouseover",function(){
		var tID;
		if($(this).hasClass("dataID"))
			tID=$(this).text();
		else
			tID=$(this).siblings(".dataID").text();
		var o=d3.selectAll(".data_"+tID);
		if(o[0][0])
			o.classed("highlight",true);
	});
	$(".unbounded td").on("mouseout",function(){
		var tID;
		if($(this).hasClass("dataID"))
			tID=$(this).text();
		else
			tID=$(this).siblings(".dataID").text();
		var o=d3.selectAll(".data_"+tID);
		if(o[0][0])
			o.classed("highlight",false);
	});
}

function formatTest(path){
	var i=path.indexOf(".csv");
	return i>0 && i==path.length-4;
}

function readData(file){ 
    var reader = new FileReader();
    //Read data as text 
    reader.readAsText(file); 
    reader.onload=function(f){
    	myData.data=this.result;
    	myData.ready=true;
    }
}

function clearData(){
	this.data=undefined;
}

function updateTable(){
	if(this.dTable)
		this.dTable=undefined;
	if(this.table)
		this.table.destroy();
	this.dTable=
	d3.select("#myTable tbody")
	.selectAll("tr")
	.data(this.data)
	.enter()
	.append("tr")
	.attr("id",function(d){
		return d.ID;
	})
	.classed("unbounded",true);
	this.dTable.append("td")
	.attr("class","dataID")
	.text(function(d){return d.ID;});
	this.dTable.append("td")
	.attr("class","dataName")
	.text(function(d){return d.Name;});
	this.table=
	$("#myTable").DataTable(this.tableOpts);
	$("#myTable").on("search.dt",fixTable);
	fixTable();
}

function preLoad(){
	d3.text("data/2012-8-18.csv")
	.get(function(e,d){
		var t=0, p=-1;
		myData.data=[];
		myData.ObjData={};
		d3.csv.parse(d,function(m){
			myData.ObjData[m.ID]=m;
			myData.data.push(m);
			t++;
		});
		var k=setInterval(function(d){
			if(t!=p){
				p=t;
				return;
			}
			if(t==p){
				clearInterval(k);
				myData.init();
				//myData.update();
				Vis=createVis1(myData.attrs);
				Vis.draw();
				d3.selectAll(".dataDisplay").each(function(d){
					var tt=$(this).children("title").text().replace("data: ","");
					if (myData.selectByID(tt) == undefined) return;
					$(this).children(".texts").text(myData.selectByID(tt)[myData.attrs[0]]);
				});
			}
		},100);
	});
}

function normalize(data, bound){
	var s=d3.scale.linear().range([0,1]).domain(bound), t={};
	for(var i in data){
		if(i=="ID" || i=="Name")
			continue;
		t[i]=s(data[i]);
	}
	return t;
}

function initDataItems(){
	var items=[];
	var attrs=[];
	for(var i in this.data[0]){
		if(i=="ID" || i=="Name")
			continue;
		attrs.push(i);	
	}
	$.each(this.data,function(id,d){
		if(!$(".data_"+d.ID)[0])
			return;
		var t=[],b=true;
		for(var i in d){
			if(i=="ID" || i=="Name")
				continue;
			d[i]=parseFloat(d[i]);
			if(b){
				b=false;
				t=[d[i],d[i]];
			}
			else{
				if(d[i]<t[0])
					t[0]=d[i];
				if(d[i]>t[1])
					t[1]=d[i];
			}
		}
		items.push(createItem(d,t));
	});
	this.items=items;
	this.attrs=attrs;
}