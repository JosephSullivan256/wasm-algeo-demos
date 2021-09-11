// CSS
import "./css/style.css";

// Web assembly from rust
import * as wasm from "wasm-algeo-demos";

// CodeMirror theme, javascript syntax highlighting, general css, theme css
import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';

// Default script to put on codeMirror
import default_contents from '!!raw-loader!./scripts/default_contents.js'

import Context from './context.js'


class Main {
	constructor() {
		this.initWasm();
		this.initDOM();
	}

	initWasm() {
		// pass properties from wasm to the window so that things are useable in the CodeMirror
		for(let property in wasm) window[property]=wasm[property];
	}

	initDOM() {
		// create codeMirror element insider the div
		this.codeMirror = CodeMirror(
			document.getElementById("codeMirror"),
			{
				value: default_contents,
				mode:  "javascript",
				theme: "default",
				viewportMargin: Infinity,
			}
		);
		// create an event for running script in coedMirror
		document
			.getElementById("createDemo")
			.addEventListener(
				"click",
				()=>this.createDemo()
			);
		// set context div
		this.contextDiv = document.getElementById("context");
	}

	createDemo() {
		this.contextDiv.innerHTML = "";
		let context = new Context(this.contextDiv);
		
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
		Function(
			'ctx', '"use strict";' + this.codeMirror.getValue()
		)(context);
		
	}
}


new Main();
