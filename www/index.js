import * as wasm from "wasm-algeo-demos";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Demo {

	constructor() {
		this.canvas = document.getElementById('canvas');
		this.renderer = new THREE.WebGLRenderer({canvas});
		this.renderer.setClearColor( 0xffffff, 1 );
	
		const fov = 75;
		const aspect = this.canvas.width/this.canvas.height;
		const near = 0.1;
		const far = 5;
		this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		// change coordinate system good
		this.camera.up.set(0,0,1);
		this.camera.position.y = -2;
		
		this.controls = new OrbitControls( this.camera, this.renderer.domElement );
		// an animation loop is required when either damping or auto-rotation are enabled
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.05;
	
		this.scene = new THREE.Scene();

		const iv = new THREE.Vector3(1, 0, 0);
		const jv = new THREE.Vector3(0, 1, 0);
		const kv = new THREE.Vector3(0, 0, 1);

		const origin = new THREE.Vector3( 0, 0, 0 );
		const length = 1;
		const headLength = 0.05;
		const headWidth = 0.03;

		this.scene.add(new THREE.ArrowHelper(iv, origin, length, 0xff0000, headLength, headWidth));
		this.scene.add(new THREE.ArrowHelper(jv, origin, length, 0x00ff00, headLength, headWidth));
		this.scene.add(new THREE.ArrowHelper(kv, origin, length, 0x0000ff, headLength, headWidth));
	
		this.step();
	}

	step() {
		requestAnimationFrame(()=>this.step());

		this.controls.update();
		this.renderer.render(this.scene, this.camera);
	}
}

function main() {
	//wasm.greet();
	new Demo();
}



main();
