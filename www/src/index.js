import * as wasm from "wasm-algeo-demos";

import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';

// CSS
import "./style.css";

class Main {

	constructor() {
		// wasm.greet();

		this.codeMirror = CodeMirror(
			document.getElementById("codeMirror"),
			{
				value: 
`// create a demo
function create_demo(context){

	// initialize ui/controller elements
	let lowerBound = 0;
	let upperBound = 10;
	let step = 1;

	let n = context.addSlider("n", lowerBound, upperBound, step)
	let disp1 = context.addLatexDisplay();
	let rend = context.add2DRenderer();

	// set "run" method
	context.setRun(()=>{
		// create polynomial x^n
		let poly = Poly("x").pow(n.inner);

		disp1.display(poly);
		rend.display(poly);
	})
}`,
				mode:  "javascript",
				theme: "default",
				viewportMargin: Infinity,
			}
		);

		document
			.getElementById("createDemo")
			.addEventListener(
				"click",
				()=>this.createDemo()
			);


	}

	createDemo() {
		let context = new Context();

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
		Function(
			'"use strict"; return (' + this.codeMirror.getValue() + ')'
		)()(context);
	}
}

class Context {
	constructor() {

	}
}


new Main();
