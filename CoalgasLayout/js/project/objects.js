function createObjects(types){
	var o={};

	o.types=types;
	o.array;
	o.ID;

	o.create=createObject;
	o.init=initObjects;
	o.clear=clearObjects;
	o.del=delObject;
	o.find=findObject;
	o.copy=copyObject;
	o.save=saveObject;
	o.type=typeOf;

	o.init();

	return o;
}

function createBucket(pos, width, rotate, name){
	var o={};

	o.origin=[335.629,654.012];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	
	o.paths;
	o.path_fills;
	o.polygons;
	o.poly_fills;

	o.init=initBucket;
	o.show=showBucket;
	o.draw=draw;

	return o;
}

function createTank1(pos, width, rotate, name){
	var o={};

	o.origin=[335.629,740.951];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	
	o.paths;
	o.path_fills;
	o.polygons;
	o.poly_fills;
	o.lines;

	o.init=initTank1;
	o.show=showTank1;
	o.draw=draw;

	return o;
}

function createTank2(pos, width, rotate, name){
	var o={};

	o.origin=[335.629,807.966];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	
	o.paths;
	o.path_fills;
	o.polygons;
	o.poly_fills;
	o.lines;

	o.init=initTank2;
	o.show=showTank2;
	o.draw=draw;

	return o;
}

function createTank3(pos, width, rotate, name){
	var o={};

	o.origin=[335.629,1148.872];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	
	o.paths;
	o.path_fills;
	o.lines;

	o.init=initTank3;
	o.show=showTank3;
	o.draw=draw;

	return o;
}

function createSeparator(pos, width, rotate, name){
	var o={};

	o.origin=[528.509,732.022];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	
	o.polygons;
	o.poly_fills;
	o.paths;
	o.path_fills;
	o.rects;
	o.rect_fills;
	o.lines;

	o.init=initSeparator;
	o.show=showSeparator;
	o.draw=draw;

	return o;
}

function createFeeder(pos, width, rotate, name){
	var o={};

	o.origin=[478.423,191.702];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	
	o.rects;
	o.rect_fills;
	o.polygons;
	o.poly_fills;
	o.lines;

	o.init=initFeeder;
	o.show=showFeeder;
	o.draw=draw;

	return o;	
}

function createConveyer(pos, width, rotate, name){
	var o={};

	o.origin=[462.995,100];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	
	o.circles;
	o.circle_fills;
	o.rects;
	o.rect_fills;
	o.lines;

	o.init=initConveyer;
	o.show=showConveyer;
	o.draw=draw;

	return o;	
}

function createGauge1(pos, width, rotate, name, value){
	var o={};

	o.origin=[22,388];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	o.attr=value;
	o.maxHeight;
	
	o.rects;
	o.rect_fills;
	o.path;
	o.path_fills;

	o.init=initGauge1;
	o.show=showGauge;
	o.change=changeGauge;
	o.draw=draw;

	return o;	
}

function createGauge2(pos, width, rotate, name, value){
	var o={};

	o.origin=[128.161,583.288];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	o.attr=value;
	o.maxHeight;
	
	o.rects;
	o.rect_fills;
	o.path;
	o.path_fills;

	o.init=initGauge2;
	o.show=showGauge;
	o.change=changeGauge;
	o.draw=draw;

	return o;	
}


function createVibFeeder(pos, width, rotate, name){
	var o={};

	o.origin=[218.288,85.438];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;
	o.maxHeight;

	o.paths;
	o.path_fills;
	o.circles;
	o.circle_fills;
	o.polygons;
	o.poly_fills;
	o.rects;
	o.rect_fills;

	o.init=initVibFeeder;
	o.show=showVibFeeder;
	o.draw=draw;

	return o;
}

function createValve1(pos, width, rotate, name){
	var o={};

	o.origin=[160.022,58.434];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.rects;
	o.rect_fills;

	o.init=initValve1;
	o.show=showValve1;
	o.draw=draw;

	return o;	
}

function createValve2(pos, width, rotate, name){
	var o={};

	o.origin=[132.941,58.434];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.rects;
	o.rect_fills;

	o.init=initValve2;
	o.show=showValve2;
	o.draw=draw;

	return o;	
}

function createValve3(pos, width, rotate, name){
	var o={};

	o.origin=[58.433,160.024];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.rects;
	o.rect_fills;

	o.init=initValve3;
	o.show=showValve3;
	o.draw=draw;

	return o;	
}

function createValve4(pos, width, rotate, name){
	var o={};

	o.origin=[136.671,58.434];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.rects;
	o.rect_fills;

	o.init=initValve4;
	o.show=showValve4;
	o.draw=draw;

	return o;	
}

function createValve5(pos, width, rotate, name){
	var o={};

	o.origin=[154.812,118.176];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.paths;
	o.path_fills;
	o.polygons;
	o.poly_fills;
	o.rects;
	o.rect_fills;

	o.init=initValve5;
	o.show=showValve5;
	o.draw=draw;

	return o;	
}

function createValve6(pos, width, rotate, name){
	var o={};

	o.origin=[176,75.175];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.polygons;
	o.poly_fills;

	o.init=initValve6;
	o.show=showValve6;
	o.draw=draw;

	return o;	
}

function createValve7(pos, width, rotate, name){
	var o={};

	o.origin=[154.812,123.667];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.polygons;
	o.poly_fills;
	o.rects;
	o.rect_fills;

	o.init=initValve7;
	o.show=showValve7;
	o.draw=draw;

	return o;	
}

function createValve8(pos, width, rotate, name){
	var o={};

	o.origin=[66.127,154.813];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.polygons;
	o.poly_fills;
	o.rects;
	o.rect_fills;

	o.init=initValve8;
	o.show=showValve8;
	o.draw=draw;

	return o;	
}

function createValve9(pos, width, rotate, name){
	var o={};

	o.origin=[178.913,147.786];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.circles;
	o.circle_fills;
	o.polygons;
	o.poly_fills;
	o.rects;
	o.rect_fills;

	o.init=initValve9;
	o.show=showValve9;
	o.draw=draw;

	return o;	
}

function createValve10(pos, width, rotate, name){
	var o={};

	o.origin=[110,62.362];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.circles;
	o.circle_fills;
	o.rects;
	o.rect_fills;
	o.lines;

	o.init=initValve10;
	o.show=showValve10;
	o.draw=draw;

	return o;	
}

function createValve11(pos, width, rotate, name){
	var o={};

	o.origin=[39.693,39.693];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.circles;
	o.circle_fills;

	o.init=initValve11;
	o.show=showValve11;
	o.draw=draw;

	return o;	
}

function createMonitoring(pos, width, rotate, name){
	var o={};

	o.origin=[100,274.286];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.circles;
	o.circle_fills;
	o.rects;
	o.rect_fills;

	o.init=initMonitoring;
	o.show=showMonitoring;
	o.draw=draw;

	return o;	
}

function createDiode(pos, width, rotate, name){
	var o={};

	o.origin=[139.866,84.801];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.polygons;
	o.poly_fills;
	o.lines;

	o.init=initDiode;
	o.show=showDiode;
	o.draw=draw;

	return o;	
}

function createArrow(pos, width, rotate, name){
	var o={};

	o.origin=[96.021,84.801];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.polygons;
	o.poly_fills;

	o.init=initArrow;
	o.show=showArrow;
	o.draw=draw;

	return o;	
}

function createCapacitor(pos, width, rotate, name){
	var o={};

	o.origin=[61.429,271.429];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.lines;

	o.init=initCapacitor;
	o.show=showCapacitor;
	o.draw=draw;

	return o;	
}

function createNozzle(pos, width, rotate, name){
	var o={};

	o.origin=[118.321,355.329];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.pos=pos;
	o.size=[width,width*o.asp];
	o.rotate=rotate;
	o.name=name;

	o.rects;
	o.rect_fills;
	o.polygons;
	o.poly_fills;

	o.init=initNozzle;
	o.show=showNozzle;
	o.draw=draw;

	return o;	
}

//AJI changed here
function createText(pos, width, rotate, value, name) {
	var o={};

	o.origin=[];
	o.asp;
	o.scales=[];
	o.originTextSize=16;
	o.string=value[0];
	o.vertical=value[1];
	o.getOriginalText=getOriginalText;
	o.getOriginalText();

	o.color=value[2];
	o.dataID=value[3];
	o.pos=pos;
	var twidth=width/(o.vertical?o.asp:1);
	o.size=[twidth,twidth*o.asp];
	o.rotate=rotate;
	o.name=name;
	o.attr=value.slice(0);

	o.init=initText;
	o.show=showText;
	o.change=changeText;
	o.draw=draw;

	return o;
}

function createConnection(pos, size, rotate, name, value){
	var o={};

	o.origin=value[5];
	o.scales=[
	d3.scale.linear().domain([0,o.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,o.origin[1]]).range([0,1])];
	o.asp=o.origin[1]/o.origin[0];
	o.name=name;
	o.pos=pos;
	o.size=size;
	o.rotate=rotate;
	o.start=value[0];
	o.end=value[1];
	o.paths=[value[2]];
	o.color=value[3];
	o.band=value[4];
	o.attr=value.slice(0);
	o.path_fills=["none"];

	//o.getPath=getConnectionPath;
	o.init=initConnection;
	o.show=showConnection;
	o.revise=reviseConnection;
	o.change=changeConnection;
	o.draw=draw;

	return o;
}

function createLoad(){
	var o={};

	o.header="Type,Pos,Width,Rotate,Attr";
	o.contents="";
	o.illegal=false;
	o.ready=false;

	o.get=getData;
	o.load=readLayout;
	o.scrSize=[];

	return o;
}

function createMouse(){
	var o={};

	o.mousePos;//mouse press position
	o.mouseOn=false;//mouse press
	o.mouseOut=false;//mouse out of canvas
	o.mouseID="";//mouse screen object ID
	o.mouseObj;//mouse logic object
	o.dragging=false;//dragging or not
	o.dragID="";//resize direction
	o.resize=false;//resizing or not
	o.multiple=false;//multiple operation or not
	o.resizeOrd=-1;
	o.brush=false;//brush selection
	o.dblClock=0;
	o.dblCount=0;
	o.rightID="";//rightclick object
	o.rightPos;//mouse rightclick position
	o.connect=false;//connect mode
	o.zooming=false;
	o.zoomed=false;
	o.zoomSize=[];
	o.zoomOrigin=[1,1];
	o.connectStart=[];
	o.connectPath=[];
	o.connectSize=[];

	o.reset=resetMouse;

	return o;
}

function createKey(){
	var o={};

	o.ctrl=false;
	o.del=false;
	o.key;
	o.reset=resetKey;

	return o;
}

function getOriginalText(){
	var tempText={};
	if (this.vertical) {
		tempText =   d3.select("#canvas")
					   .append("g")
					   .attr("id", "tempText")
					   ;
		tempText.append("text")
				.attr("class","texts")
 				.attr("font-size", this.originTextSize)
 				.selectAll("tspan")
 				    .data(this.string.split(""))
 				.enter().append("tspan")
 					.attr("x", 0)
 				    .attr("dy", "0.95em")
 					.text(function(d){return d;});
	} else {
		tempText = 	d3.select("#canvas")
				   	  .append("text")
				   	  .attr("id", "tempText")
				   	  .attr("font-size", this.originTextSize)
				   	  .attr("visibility", "hidden")
				   	  .attr("font-family", "sans-serif")
				   	  .text(this.string);
	}
	this.origin=[tempText.node().getBoundingClientRect().width, tempText.node().getBoundingClientRect().height];
	tempText.remove();
	this.asp=this.origin[1]/this.origin[0];
	this.scales=[
	d3.scale.linear().domain([0,this.origin[0]]).range([0,1]),
	d3.scale.linear().domain([0,this.origin[1]]).range([0,1])];
}