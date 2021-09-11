
import ScrubberView from "../lib/scrubber/scrubber.js";

export default class Context {


	constructor(contextDiv) {
		this.contextDiv = contextDiv;
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
}