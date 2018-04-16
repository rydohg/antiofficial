(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 477,
	height: 477,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/logo1024.png", id:"logo1024"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.logo1024 = function() {
	this.initialize(img.logo1024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1024);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo1024();
	this.instance.setTransform(0,0,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338.1,338.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo1024();
	this.instance.setTransform(0,0,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338.1,338.1);


// stage content:
(lib.animatedLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(238.9,238.8,1,1,0,0,0,169.1,169.1);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(238.9,238.8,1,1,0,0,0,169.1,169.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.logo1024();
	this.instance_2.setTransform(69.8,69.7,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:169,regY:169,rotation:12,x:238.7,y:238.7},0).wait(1).to({rotation:24,x:238.8},0).wait(1).to({rotation:36},0).wait(1).to({rotation:48},0).wait(1).to({rotation:60},0).wait(1).to({rotation:72},0).wait(1).to({rotation:84,x:238.9},0).wait(1).to({rotation:96},0).wait(1).to({rotation:108,y:238.8},0).wait(1).to({rotation:120,y:238.7},0).wait(1).to({rotation:132,x:238.8},0).wait(1).to({rotation:144,x:238.9,y:238.8},0).wait(1).to({rotation:156,x:238.8},0).wait(1).to({rotation:168,x:238.9},0).wait(1).to({rotation:180},0).wait(1).to({rotation:192},0).wait(1).to({rotation:204,x:238.8},0).wait(1).to({rotation:216},0).wait(1).to({rotation:228},0).wait(1).to({rotation:240},0).wait(1).to({rotation:252},0).wait(1).to({rotation:264,x:238.7},0).wait(1).to({rotation:276},0).wait(1).to({rotation:288,y:238.7},0).wait(1).to({rotation:300,y:238.8},0).wait(1).to({rotation:312,x:238.8},0).wait(1).to({rotation:324,x:238.7,y:238.7},0).wait(1).to({rotation:336,x:238.8},0).wait(1).to({rotation:348,x:238.7},0).wait(1).to({rotation:360,x:238.8},0).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(1).to({regX:169,regY:169,rotation:-11.6,x:238.7,y:238.7},0).wait(1).to({rotation:-23.2},0).wait(1).to({rotation:-34.8},0).wait(1).to({rotation:-46.5,x:238.8,y:238.8},0).wait(1).to({rotation:-58.1,x:238.7},0).wait(1).to({rotation:-69.7,x:238.8},0).wait(1).to({rotation:-81.3},0).wait(1).to({rotation:-92.9},0).wait(1).to({rotation:-104.5},0).wait(1).to({rotation:-116.1},0).wait(1).to({rotation:-127.7},0).wait(1).to({rotation:-139.4},0).wait(1).to({rotation:-151},0).wait(1).to({rotation:-162.6},0).wait(1).to({rotation:-174.2},0).wait(1).to({rotation:-185.8},0).wait(1).to({rotation:-197.4,x:238.9},0).wait(1).to({rotation:-209},0).wait(1).to({rotation:-220.6,x:238.8},0).wait(1).to({rotation:-232.3,x:238.9,y:238.7},0).wait(1).to({rotation:-243.9,y:238.8},0).wait(1).to({rotation:-255.5,y:238.7},0).wait(1).to({rotation:-267.1,x:238.8},0).wait(1).to({rotation:-278.7,x:238.9},0).wait(1).to({rotation:-290.3,x:238.8},0).wait(1).to({rotation:-301.9},0).wait(1).to({rotation:-313.5,y:238.8},0).wait(1).to({rotation:-325.2,y:238.7},0).wait(1).to({rotation:-336.8},0).wait(1).to({rotation:-348.4},0).wait(1).to({rotation:-360},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(308.3,308.2,338.1,338.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;