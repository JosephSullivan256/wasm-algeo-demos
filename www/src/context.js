
import ScrubberView from "../lib/scrubber/scrubber.js";
import Renderer3D from "./ctx_elts/rend3d.js";
import LatexDisplay from "./ctx_elts/latex_disp.js";


export default class Context {

	constructor(contextDiv) {
		this.contextDiv = contextDiv;
		this.disposables = [];
		this.run = () => { };
	}

	addSlider(name, value, lowerBound, upperBound, step) {
		let scrubber = new ScrubberView()
			.min(lowerBound)
			.max(upperBound)
			.step(step)
			.value(value);

		let div = document.createElement("div");
		let title = document.createElement("p");
		title.innerHTML = name;

		div.appendChild(title);
		div.appendChild(scrubber.elt);

		this.contextDiv.appendChild(div)

		scrubber.onValueChanged = (value) => { this.run() };

		return () => scrubber.value();
	}

	addRenderer3D() {
		let rend = new Renderer3D(this.contextDiv);
		this.disposables.push(rend);
		return rend;
	}

	addLatexDisplay() {
		let latexDisp = new LatexDisplay();
		this.contextDiv.appendChild(latexDisp.elt);
		return latexDisp;
	}

	setRun(lambda) {
		this.run = lambda;
		this.run();
	}

	reset() {
		for (let d of this.disposables) {
			d.dispose();
		}
		this.disposables = [];
		this.run = () => { };
		this.contextDiv.innerHTML = "";
	}
}