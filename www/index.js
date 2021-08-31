import * as wasm from "wasm-algeo-demos";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Demo {

	constructor() {
		this.canvas = document.getElementById('canvas');
		this.renderer = new THREE.WebGLRenderer({canvas});
	
		const fov = 75;
		const aspect = this.canvas.width/this.canvas.height;
		const near = 0.1;
		const far = 5;
		this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		this.camera.position.z = 2;
		
		this.controls = new OrbitControls( this.camera, this.renderer.domElement );
		this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		this.controls.dampingFactor = 0.05;
	
		this.scene = new THREE.Scene();
	
		const boxWidth = 1;
		const boxHeight = 1;
		const boxDepth = 1;
		const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
	
		const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
	
		this.cube = new THREE.Mesh(geometry, material);
		this.scene.add(this.cube);
	
		this.step();
	}

	step() {
		requestAnimationFrame(()=>this.step());

		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	}
}

function main() {
	wasm.greet();
	new Demo();
}



main();
