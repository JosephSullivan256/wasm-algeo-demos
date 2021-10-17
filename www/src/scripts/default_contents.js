// create a demo

// initialize ui/controller elements
let lowerBound = 1;
let upperBound = 21;
let step = 2;

let n = ctx.addSlider("n", 1, lowerBound, upperBound, step)
let disp1 = ctx.addLatexDisplay();
let rend = ctx.addRenderer3D();

// set "run" method
ctx.setRun(() => {
	disp1.displayLatex(String.raw`z^{${n()}} + xy = 0`);
	rend.addImplicitSurface((x,y,z)=> Math.pow(z,n()) + x*y);
})