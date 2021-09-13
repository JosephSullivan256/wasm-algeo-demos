import katex from 'katex';
import '../../node_modules/katex/dist/katex.css';

export default class LatexDisplay {

	constructor() {
		this.elt = document.createElement("div");
	}

	// display displayable
	display(d) {
		this.displayLatex(d.toLatex());
	}

	displayLatex(tex) {
		this.reset();
		katex.render(tex, this.elt, {
			throwOnError: false
		});
	}

	reset() {
		this.elt.innerHTML = "";
	}
}