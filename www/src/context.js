
import ScrubberView from "../lib/scrubber/scrubber.js";
import Renderer3D from "./rend3d.js";

export default class Context {
	

	constructor(contextDiv) {
		this.contextDiv = contextDiv;
		this.disposables = [];
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

		return ()=>scrubber.value();
	}

	addRenderer3D() {
		let rend = new Renderer3D(this.contextDiv);
		this.disposables.push(rend);
		return rend;
	}

	reset() {
		for(let d of this.disposables) {
			d.dispose();
		}
		this.disposables = [];
		this.contextDiv.innerHTML = "";
	}
}