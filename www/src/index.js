import * as wasm from "wasm-algeo-demos";

import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';

class Demo {

	constructor() {
		self.codeMirror = CodeMirror.fromTextArea(
			document.getElementById("codeMirror"),
			{
				value: "function myScript(){return 100;}\n",
				mode:  "javascript",
				theme: "eclipse"
			}
		);
	}

}

function main() {
	wasm.greet();
	new Demo();
}



main();
