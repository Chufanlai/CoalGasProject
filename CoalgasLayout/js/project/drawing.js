function initBucket(){
	this.paths=[
	"M0,140.918C0,77.32,46.318,9.359,101.579,1.951C119.695-0.478,218.1-0.675,232.94,1.562c51.71,7.797,102.688,75.364,102.688,139.356l0,0l0,0v188.485v191.971L0,521.386V329.403V140.918z"];
	this.path_fills=["url(#metal1)"];
	this.polygons=["0,521.383 119.586,654.012 167.425,654.012 215.282,654.012 335.629,521.369"];
	this.poly_fills=["url(#metal1)"];
	this.show();
}

function showBucket(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"path");
	this.draw(g,"polygon");
}

function initTank1(){
	this.paths=[
	"M0,190.237c0-53.561,47.416-83.951,102.677-90.189c4.206-0.475,125.194-0.646,130.265-0.002 c51.709,6.566,102.688,36.299,102.688,90.191v27.172l0,0v390.899L0,608.322V376.145V190.237z",
	"M233.102,99.074c-3.381-8.074,2.961-84.81,2.961-84.81c3.35-4.25,6.723-6.494,6.723-6.494 c3.627-7.77-10.66-7.725-10.66-7.725c-7.25,0-117.296,0-128.296,0c0,0-15.416-1.115-10.667,7.725 c0,0,5.501,2.661,8.178,6.494c0,0,4.304,77.316,1.5,84.813"];
	this.path_fills=["url(#metal1)","url(#metal2)"];
	this.polygons=["0,608.322 119.586,740.951 167.424,740.951 215.283,740.951 335.629,608.308"];
	this.poly_fills=["url(#metal1)"];
	this.lines=[
	[335.629,608.308,335.629,608.308],
	[0,190.237,335.629,190.237],
	[103.863,14.432,238.585,14.431]
	];
	this.show();
}

function showTank1(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"path");
	this.draw(g,"polygon");
	this.draw(g,"line");
}

function initTank2(){
	this.paths=[
	"M24.488,60.738c0-80.984,285.142-80.984,285.142,0l0,0v0V747.23l0,0c0,80.982-285.142,80.982-285.142,0l0,0V60.738z",
	"M335.133,154.575c0,6.213-2.583,11.25-8.797,11.25H9.998c-6.213,0-9.998-5.037-9.998-11.25l0,0c0-6.213,3.785-11.25,9.998-11.25h316.337C332.549,143.326,335.133,148.362,335.133,154.575L335.133,154.575z",
	"M335.133,656.972c0,6.213-2.583,11.25-8.797,11.25H9.998c-6.213,0-9.998-5.037-9.998-11.25l0,0c0-6.213,3.785-11.249,9.998-11.249h316.337C332.549,645.723,335.133,650.759,335.133,656.972L335.133,656.972z"
	];
	this.path_fills=[
	"url(#metal0)",
	"url(#metal1)",
	"url(#metal1)"];
	this.lines=[
	[24.604,65.084,309.516,65.084],
	[24.756,739.984,309.668,739.984]
	];
	this.show();
}

function showTank2(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"path");
	this.draw(g,"line");
}

function initTank3(){
	this.paths=["M0.158,136.605 c0.135-182.149,335.471-182.149,335.268,0l0,0v0.001v868.604l0,0c0.203,191.55-334.953,191.55-335.268,0l0,0V136.605z"];
	this.path_fills=["url(#metal1)"];
	this.lines=[
	[0.293,174.376,335.291,174.376],
	[0.473,967.919,335.471,967.919]
	];
	this.show();
}

function showTank3(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"path");
	this.draw(g,"line");
}

function initSeparator(){
	this.polygons=[
	"192.88,599.393 312.466,732.022 360.304,732.022 408.163,732.022 528.509,599.379"
	]
	this.poly_fills=["url(#metal3)"];
	this.paths=[
	"M192.88,181.308 c60.12,0,276.12,0,335.63,0v27.172l0,0v390.899l-335.63,0.014V367.216V181.308z",
	"M265.793,29.269 c0-39.025,189.802-39.025,189.802,0l0,0v0v152.039H265.793V29.269z"];
	this.path_fills=[
	"url(#metal3)",
	"url(#metal5)"
	]
	this.rects=[
	[0,220.312,192.88,116.715]
	];
	this.rect_fills=[
	"url(#metal4)"];
	this.lines=[
	[528.509,599.379,528.509,599.379],
	[265.87,31.363,455.52,31.363]
	];
	this.show();
}

function showSeparator(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"polygon");
	this.draw(g,"path");
	this.draw(g,"rect");
	this.draw(g,"line");
}

function initFeeder(){
	this.rects=[
	[0,46.446,107.338,82.178],
	[107.339,35.226,15.714,104.616],
	[33.637,39.946,18.5,12.999],
	[73.063,101.347,26.275,27.276],
	[77.222,106.007,17.957,17.957],
	[17.828,128.914,71.681,10.928],
	[10.342,139.842,86.654,10.928],
	[50.17,134.378,7,5.464],
	[86.01,134.378,7,5.464],
	[14.328,134.378,7,5.464],
	[185.549,52.32,257.427,70.429],
	[153.772,21.973,11.75,131.122],
	[165.522,72.154,20.829,30.76],
	[398.113,16.577,30.977,141.914],
	[442.977,72.154,10.414,30.76],
	[453.87,0,13.855,175.069],
	[443.174,175.069,35.249,16.633],
	[123.052,80.201,30.719,14.667]
	];
	this.rect_fills=[
	"url(#metal6)",
	"url(#metal7)",
	"#CD241C",
	"#999999",
	"#040000",
	"url(#metal9)",
	"url(#metal10)",
	"#CCC",
	"#666",
	"#666",
	"url(#metal11)",
	"url(#metal12)",
	"url(#metal13)",
	"url(#metal14)",
	"url(#metal15)",
	"url(#metal16)",
	"url(#metal17)",
	"url(#metal18)"
	];
	this.polygons=["17.656,46.445 28.437,58.029 57.339,58.029 68.121,46.445 57.339,34.863 28.437,34.862"];
	this.poly_fills=[
	"url(#metal8)"];
	this.lines=[
	[53.669,128.914,53.669,134.379],
	[89.51,128.914,89.51,134.379],
	[17.828,128.914,17.828,134.379]
	];
	this.show();
}

function showFeeder(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	for(var i in this.rects){
		var d=this.rects[i];
		if(i==2)
			g.append("polygon")
			.attr("fill",this.poly_fills[0])
			.attr("points",this.polygons[0]);
		g.append("rect")
		.attr("x",d[0])
		.attr("y",d[1])
		.attr("width",d[2])
		.attr("height",d[3])
		.attr("fill",this.rect_fills[i]);
	}
	this.draw(g,"line");
}

function initConveyer(){
	this.rects=[
	[138.571,17.079,65.843,65.843],
	[256.851,17.079,65.843,65.843]
	];
	this.rect_fills=[
	"#FFFFFF",
	"#FFFFFF"
	];
	this.circles=[
	[50,50,50],
	[412.995,50,50],
	[50,50,14.173],
	[412.995,50,14.173]
	];
	this.circle_fills=[
	"#666666",
	"#666666",
	"#000000",
	"#000000"
	];
	this.lines=[
	[50,100,412.995,100],
	[50,0,412.995,0]
	];
	this.show();
}

function showConveyer(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
	for(var i in this.circles){
		var d=this.circles[i];
		g.append("circle")
		.attr("cx",d[0])
		.attr("cy",d[1])
		.attr("r",d[2])
		.attr("fill",this.circle_fills[i])
		.attr("class","thick_border");
	}
	for(var i in this.lines){
		var d=this.lines[i];
		g.append("line")
		.attr("fill","none")
		.attr("x1",d[0])
		.attr("y1",d[1])
		.attr("x2",d[2])
		.attr("y2",d[3])
		.attr("class","thick_border");
	}
}

function initGauge1(){
	this.maxHeight=360.816;
	this.rects=[
	[0,373-this.maxHeight*this.attr,22,this.maxHeight*this.attr]
	];
	this.rect_fills=[
	"#C4C43A"
	];
	this.paths=["M22,374.143C22,381.796,17.075,388,11,388l0,0 c-6.075,0-11-6.204-11-13.857V13.857C0,6.204,4.925,0,11,0l0,0c6.075,0,11,6.204,11,13.857V374.143z",
	"M21.583,373c0,7.971-4.738,14.432-10.583,14.432l0,0c-5.845,0-10.583-6.461-10.583-14.432H21.583z"
	];
	this.path_fills=[
	"#FFFFFF",
	"#C4C43A"
	];
	this.show();
}

function initGauge2(){
	this.maxHeight=541.95;
	this.rects=[
	[0,562.47-this.maxHeight*this.attr,128.161,this.maxHeight*this.attr]
	];
	this.rect_fills=[
	"#BDBD3F"
	];
	this.paths=["M127.661,563.367c0,11.517-28.572,20.849-63.83,20.849l0,0C28.578,584.215,0,574.883,0,563.367V21.347C0,9.833,28.578,0.5,63.831,0.5l0,0c35.255,0,63.83,9.333,63.83,20.847V563.367z",
	"M128.165,561.649c0,11.991-28.69,21.711-64.084,21.711l0,0C28.688,583.36,0,573.64,0,561.649H128.165z"
	];
	this.path_fills=[
	"#FFFFFF",
	"#BDBD3F"
	];
	this.show();
}

function showGauge(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"path");
	this.draw(g,"rect");
	d3.select($(g[0][0]).find("path:first")[0])
	.classed("normal",false)
	.classed("thick_border",true);
}

function initVibFeeder(){
	this.paths=["M0,41.257h52.495 c1.345,1.06,2.47,8.536,2.47,8.536c2.458,1.147,2.444-3.372,2.444-3.372c0-2.293,0-37.104,0-40.584c0,0,0.353-4.876-2.444-3.374 c0,0-1.257,7.753-2.47,8.601L0,11.063"];
	this.path_fills=["url(#metal19)"];
	this.rects=[
	[62.831,3,115.643,46.305],
	[191.138,0.794,8.146,50.717],
	[178.474,0.794,8.146,50.717],
	[186.619,0.794,4.519,50.717],
	[57.422,2.747,5.408,46.558],
	[67.844,49.305,50.72,21.413],
	[55.9,70.717,74.608,14.721],
	[62.831,65.26,7.143,5.101],
	[100.938,64.903,12.231,5.35],
	[104.205,3,49.769,14.438],
	[118.564,28.938,49.77,20.367],
	[116.362,0,25.453,10],
	[130.723,34.122,25.453,10],
	[16.867,21.587,3.631,3.631],
	[16.867,43.739,3.631,3.631],
	[36.925,21.587,3.631,3.631],
	[36.925,43.739,3.631,3.631]
	];
	this.rect_fills=[
	"url(#metal20)",
	"url(#metal21)",
	"url(#metal22)",
	"#000000",
	"#000000",
	"#000000",
	"url(#metal23)",
	"#999899",
	"#CCCCCC",
	"none",
	"none",
	"#65C2C2",
	"#E83A37",
	"#000000",
	"#000000",
	"#000000",
	"#000000"
	];
	this.circles=[
	[28.711,34.122,18.173],
	[28.712,34.479,10.34]
	];
	this.circle_fills=[
	"url(#blue1)",
	"url(#blue2)"
	];
	this.polygons=["199.283,0.793 218.288,8.801 218.288,43.354 199.283,51.361 199.283,0.793"];
	this.poly_fills=["url(#metal24)"];
	this.show();
}

function showVibFeeder(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"path");
	this.draw(g,"circle");
	this.draw(g,"rect");
	this.draw(g,"polygon");
}

function initValve1(){
	this.rects=[
	[100.022,10.508,60,38.57],
	[79.286,22.833,20.736,12.769],
	[0,0,79.286,58.434],
	[8.451,10.508,61.429,38.57]
	];
	this.rect_fills=[
	"url(#_valve1_1)",
	"#CCCCCC",
	"url(#_valve1_2)",
	"#C1371F"
	];
	this.show();
}

function showValve1(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
}

function initValve2(){
	this.rects=[
	[0,0,132.941,58.434],
	[14.171,10.508,102.999,38.57]
	];
	this.rect_fills=[
	"url(#_valve2_1)",
	"#C1371F"
	];
	this.show();
}

function showValve2(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
}

function initValve3(){
	this.rects=[
	[9.931,0,38.571,60],
	[0,80.738,58.433,79.286],
	[22.257,60,12.768,20.737]
	];
	this.rect_fills=[
	"url(#_valve3_1)",
	"url(#_valve3_2)",
	"#CCCCCC"
	];
	this.show();
}

function showValve3(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
}

function initValve4(){
	this.rects=[
	[0,0,97.511,58.434],
	[106.671,10.508,30,38.57],
	[98.35,22.833,8.321,12.769]
	];
	this.rect_fills=[
	"#999999",
	"url(#_valve4_1)",
	"#CCCCCC"
	];
	this.show();
}

function showValve4(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
	d3.select($(g[0][0]).find("rect:first")[0])
	.classed("thick_border",true);
}

function initValve5(){
	this.rects=[[71.391,33.884,12.029,45.954]];
	this.rect_fills=["#CCCCCC"];
	this.polygons=["0,52.051 62.334,79.479 92.478,79.479 154.812,52.051 154.812,118.176 92.478,90.1 62.334,90.1 0,118.176 "];
	this.poly_fills=["url(#_valve5_1)"];
	this.paths=["M32.393,33.884 C39.984,9.866,52.543,0.139,77.401,0c24.857-0.139,40.73,11.036,45.01,33.381c0.016,0.083,0,0.168,0,0.251L32.393,33.884z"];
	this.path_fills=["url(#_valve5_2)"];
	this.show();
}

function showValve5(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
	this.draw(g,"polygon");
	this.draw(g,"path");
}

function initValve6(){
	this.polygons=["0,0 70.866,31.181 105.134,31.181 176,0 176,75.175 105.134,43.257 70.866,43.257 0,75.175"];
	this.poly_fills=["#CCCCCC"];
	this.show();
}

function showValve6(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"polygon");
}

function initValve7(){
	this.rects=[
	[74.107,28.874,6.597,56.454],
	[35.6,0,83.611,28.874],
	[40.71,2.932,73.392,11.505]
	];
	this.rect_fills=[
	"#040000",
	"#040000",
	"#999899"
	];
	this.polygons=["0,57.541 62.334,84.969 92.478,84.969 154.812,57.541 154.812,123.667 92.478,95.59 62.334,95.59 0,123.667 "];
	this.poly_fills=["url(#_valve7_1)"];
	this.show();
}

function showValve7(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
	this.draw(g,"polygon");
}

function initValve8(){
	this.rects=[
	[0,64.549,66.127,25.715]
	];
	this.rect_fills=["url(#_valve8_2)"];
	this.polygons=["0,154.813 27.428,92.479 27.428,62.334 0,0 66.127,0 38.049,62.334 38.049,92.479 66.127,154.813 "];
	this.poly_fills=["url(#_valve8_1)"];
	this.show();
}

function showValve8(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"polygon");
	this.draw(g,"rect");
}

function initValve9(){
	this.rects=[
	[77.737,16.23,23.438,61.507],
	[16.23,88.626,61.507,23.438],
	[101.176,88.625,61.507,23.438]
	];
	this.rect_fills=[
	"url(#_valve9_1)",
	"url(#_valve9_2)",
	"url(#_valve9_3)",
	];
	this.polygons=[
	"136.896,0 101.176,16.23 77.737,16.23 42.016,0 136.896,0 	",
	"0,52.905 16.23,88.626 16.23,112.064 0,147.786 0,52.905 	",
	"178.913,52.905 162.683,88.625 162.683,112.064 178.913,147.786 178.913,52.905 	"
	];
	this.poly_fills=[
	"#CCCCCC",
	"#CCCCCC",
	"#CCCCCC"
	];
	this.circles=[
	[89.456,100.346,28.347]
	];
	this.circle_fills=["#73BD5D"];
	this.show();
}

function showValve9(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"polygon");
	this.draw(g,"rect");
	this.draw(g,"circle");
}

function initValve10(){
	this.rects=[
	[0,2.835,65.049,15.672],
	[92.023,18.507,17.977,25.347]
	];
	this.rect_fills=[
	"url(#_valve10_1)",
	"url(#_valve10_2)"
	];
	this.circles=[
	[65.049,31.181,31.181],
	[65.05,31.181,27.096]
	];
	this.circle_fills=[
	"#CCCCCC",
	"url(#_valve10_3)"
	];
	this.lines=[
	[12,2.835,12,18.507]
	];
	this.show();
}

function showValve10(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
	this.draw(g,"circle");
	this.draw(g,"line");
}

function initValve11(){
	this.circles=[
	[19.847,19.846,19.847]
	];
	this.circle_fills=[
	"#CCCCCC"
	];
	this.show();
}

function showValve11(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"circle");
	d3.selectAll($(g[0][0]).find("circle"))
	.classed("cyan_border",true)
	.classed("thick_border",true);
}

function initMonitoring(){
	this.rects=[
	[32.143,81.429,35.714,192.857]
	];
	this.rect_fills=[
	"#933232"
	];
	this.circles=[
	[50,50,50]
	];
	this.circle_fills=[
	"#933232"
	];
	this.show();
}

function showMonitoring(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
	this.draw(g,"circle");
}

function initDiode(){
	this.polygons=["19.313,0 115.333,42.4 19.313,84.801 19.313,0 "];
	this.poly_fills=[
	"none"
	];
	this.lines=[
	[139.866,42.4,0,42.4],
	[126.134,0,126.134,84.801]
	];
	this.show();
}

function showDiode(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"polygon");
	this.draw(g,"line");
	d3.selectAll($(g[0][0]).find("*"))
	.classed("thick_border",true);
}

function initArrow(){
	this.polygons=["96.021,0 0,42.4 96.021,84.801 96.021,0 "];
	this.poly_fills=[
	"url(#_arrow_1)"
	];
	this.show();
}

function showArrow(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"polygon");
	d3.selectAll($(g[0][0]).find("*"))
	.classed("thick_border",true);
}

function initCapacitor(){
	this.lines=[
	[0,0,0,271.429],
	[61.429,36,61.429,235.429]
	];
	this.show();
}

function showCapacitor(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"line");
	d3.selectAll($(g[0][0]).find("*"))
	.classed("thick_border",true);
}

function initNozzle(){
	this.rects=[
	[22.475,156.094,73.371,199.235],
	[0,0,118.321,109.332]
	];
	this.rect_fills=[
	"url(#nozzle1)",
	"url(#nozzle3)"
	];
	this.polygons=["0,109.105 22.17,155.862 59.02,155.862 95.87,155.862 118.321,109.101 "];
	this.poly_fills=["url(#nozzle2)"];
	this.show();
}

function showNozzle(){
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
	.attr("id",this.name)
	.attr("class","movable object")
	.attr("transform","translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
	.on("mouseover",appear)
	.on("mouseout",disappear)
	.on("mousedown",press);
	this.draw(g,"rect");
	this.draw(g,"polygon");
}

//AJI changed here
function initText() {
	this.show();
}

//AJI changed here
function showText() {
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	var g=svg.append("g")
			 .attr("id", this.name)
			 .attr("class", "movable object")
			 .attr("transform", "translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])
			 	+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
			 .on("mouseover", appear)
			 .on("mouseout", disappear)
			 .on("mousedown", press);
	if(this.dataID!=""){
		g.classed("data_"+this.dataID,true)
		.classed("dataDisplay",true)
		.append("title")
		.text("data: "+this.dataID);
		g.on("dblclick", dataEdit);
	}
	else
		g.on("dblclick", textEdit);
	this.draw(g, "text");
}

function initConnection() {
	this.revise();
	this.show();
}

function showConnection() {
	drawFrame(this.pos, this.size, this.rotate%180!=0, this.name);
	if($(".tempConnect")[0]){
		$(".tempConnect").insertAfter("#resize"+this.name);
		$(".tempConnect path").attr("d",this.paths[0]);
		d3.select(".tempConnect")
		.classed("tempConnect",false)
		.attr("id", this.name)
		.attr("class", "movable object connection")
		.attr("transform", "translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])
		+","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
		.on("mouseover", appear)
		.on("mouseout", disappear)
		.on("mousedown", press)
		.on("dblclick", connectEdit); 		
	}
	else{
		var g=svg.append("g")
				 .attr("id", this.name)
				 .attr("class", "movable object connection")
				 .attr("transform", "translate("+this.pos[0]+","+this.pos[1]+")scale("+this.scales[0](this.size[0])
				 +","+this.scales[1](this.size[1])+")"+"rotate("+this.rotate+","+this.origin[0]/2+","+this.origin[1]/2+")")
				 .on("mouseover", appear)
				 .on("mouseout", disappear)
				 .on("mousedown", press)
			 	 .on("dblclick", connectEdit);;
		this.draw(g, "path");
		d3.selectAll($(g[0][0]).find("*"))
		.attr("stroke",this.color)
		.attr("stroke-width",this.band)
		.attr("fill","none")
		.classed("normal",false)
		.classed("pipe",true);
	}
}

function reviseConnection(){
	if(!($(".tempConnect")[0]))
		return;
	var t=this.paths[0].split(" "), ta="";
	for(var i=0;i<t.length-1;i++){
		var tw=t[i].substring(1).split(",");
		tw=[tw[0]-this.pos[0],tw[1]-this.pos[1]];
		if(i==0)
			ta=ta+"M"+tw[0]+","+tw[1]+" ";
		else
			ta=ta+"L"+tw[0]+","+tw[1]+" ";
	}
	this.paths[0]=ta;
	this.attr[2]=ta;
}

function drawFrame(pos, size, rotate, id){
	var g=svg.append("g")
	.attr("class","resize")
	.attr("id","resize"+id)
	.on("mouseover",function(){$(this).find(".frame").css("opacity","1")})
	.on("mouseout",function(){
		if(!d3.select("g#"+$(this).attr("id").replace("resize","")).classed("sel") && !d3.select(this).classed("resized")) 
			$(this).find(".frame").css("opacity","0");})
	.on("mousedown",press);
	var tpos=pos.slice(0), tsize=size.slice(0);
	if(rotate){
		tsize=[tsize[1],tsize[0]];
		var t=[tpos[1],tpos[0]];
		tpos[0]=t[1]+(tsize[1]-tsize[0])/2;
		tpos[1]=t[0]+(tsize[0]-tsize[1])/2;
	}
	g.append("rect")
	.attr("x",tpos[0])
	.attr("y",tpos[1])
	.attr("width",tsize[0])
	.attr("height",tsize[1])
	.attr("class","frame");
	g.append("circle")
	.attr("cx",tpos[0])
	.attr("cy",tpos[1])
	.attr("r",pt_r)
	.attr("class","frame drag drag_upleft")
	.on("mouseover",function(){if(!Mouse.resize) Mouse.dragID="upleft"})
	.on("mouseout",function(){if(!Mouse.resize) Mouse.dragID="";});
	g.append("circle")
	.attr("cx",tpos[0])
	.attr("cy",tpos[1]+tsize[1])
	.attr("r",pt_r)
	.attr("class","frame drag drag_bottomleft")
	.on("mouseover",function(){if(!Mouse.resize) Mouse.dragID="bottomleft"})
	.on("mouseout",function(){if(!Mouse.resize) Mouse.dragID="";});
	g.append("circle")
	.attr("cx",tpos[0]+tsize[0])
	.attr("cy",tpos[1])
	.attr("r",pt_r)
	.attr("class","frame drag drag_upright")
	.on("mouseover",function(){if(!Mouse.resize) Mouse.dragID="upright"})
	.on("mouseout",function(){if(!Mouse.resize) Mouse.dragID="";});
	g.append("circle")
	.attr("cx",tpos[0]+tsize[0])
	.attr("cy",tpos[1]+tsize[1])
	.attr("r",pt_r)
	.attr("class","frame drag drag_bottomright")
	.on("mouseover",function(){if(!Mouse.resize) Mouse.dragID="bottomright"})
	.on("mouseout",function(){if(!Mouse.resize) Mouse.dragID="";});
}

function draw(g, type){
	switch(type){
		case "path":
			for(var i in this.paths){
				var d=this.paths[i];
				g.append("path")
				.attr("d",d)
				.attr("fill",this.path_fills[i])
				.attr("class","normal");
			}
		break;
		case "circle":
			for(var i in this.circles){
				var d=this.circles[i];
				g.append("circle")
				.attr("cx",d[0])
				.attr("cy",d[1])
				.attr("r",d[2])
				.attr("fill",this.circle_fills[i])
				.classed("normal",true);
			}
		break;
		case "rect":
			for(var i in this.rects){
				var d=this.rects[i];
				g.append("rect")
				.attr("x",d[0])
				.attr("y",d[1])
				.attr("width",d[2])
				.attr("height",d[3])
				.attr("fill",this.rect_fills[i])
				.classed("normal",true);
			}
		break;
		case "polygon":
			for(var i in this.polygons){
				var d=this.polygons[i];
				g.append("polygon")
				.attr("points",d)
				.attr("fill",this.poly_fills[i])
				.classed("normal",true);
			}
		break;
		case "line":
			for(var i in this.lines){
				var d=this.lines[i];
				g.append("line")
				.attr("fill","none")
				.attr("x1",d[0])
				.attr("y1",d[1])
				.attr("x2",d[2])
				.attr("y2",d[3])
				.classed("normal",true);
			}
		break;
		//AJI changed here
		case "text":
			var tx=this.vertical?(this.originTextSize*0.5):0, ty=this.vertical?0:(this.originTextSize*0.86);
			var text={};
			if (this.vertical) {
				text =   g.append("text")
							   .attr("class","texts")
							   .attr("fill", this.color)
			 				   .attr("stroke",this.color)
 							   .attr("font-size", this.originTextSize)
 							   .selectAll("tspan")
 							       .data(this.string.split(""))
 							   .enter().append("tspan")
 							   	   .attr("x", 0)
 							       .attr("dy", "0.95em")
 							       .text(function(d){return d;});
			} else {
				text = g.append("text")
			 			.text(this.string)
			 			.attr("fill", this.color)
			 			.attr("stroke",this.color)
			 			.attr("x", tx)
			 			.attr("y", ty)
			 			.attr("class","texts")
						.attr("font-size", this.originTextSize);
			};
		break;
	}
}