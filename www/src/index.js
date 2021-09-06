import * as wasm from "wasm-algeo-demos";

import CodeMirror from 'codemirror/lib/codemirror.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';

class Demo {

	constructor() {
		this.codeMirror = CodeMirror(
			document.getElementById("codeMirror"),
			{
				value: 
`function myScript(){
	return 100;
}`,
				mode:  "javascript",
				theme: "default"
			}
		);
	}

}

function main() {
	//wasm.greet();
	new Demo();
}



main();
