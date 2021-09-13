// create a demo

// initialize ui/controller elements
let lowerBound = 0;
let upperBound = 10;
let step = 1;

let n = ctx.addSlider("n", 1, lowerBound, upperBound, step)
let disp1 = ctx.addLatexDisplay();
let rend = ctx.addRenderer3D();

// set "run" method
ctx.setRun(() => {
	// create polynomial x^n
	// let poly = Poly("x").pow(n());

	disp1.displayLatex(String.raw`\int_0^{${n()}} f(x) \;\mathrm{d}x`);
	// rend.display(poly);
})