import * as THREE from "three";
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';


export default class ImplicitSurface extends MarchingCubes {
	// f is a lambda (x: f32, y: f32, z: f32) -> f32
	constructor(f) {
		super(
			50, // resolution
			new THREE.MeshPhongMaterial( {
				color: '#1565C0', // blue 800
				side: THREE.DoubleSide,
				flatShading: false
			} ) // material
		);
		
		this.isolation = 0;
		let res = this.resolution;

		for ( var k = 0 ; k < res ; k++ ) {
			for ( var j = 0 ; j < res ; j++ ) {
				for ( var i = 0 ; i < res ; i++ ) {
	
				var x = 8*(i-res/2)/res;
				var y = 8*(j-res/2)/res;
				var z = 8*(k-res/2)/res;
	
				this.field[ i + j*res + k*res*res ] = f(x,y,z);
	
				}
			}
		}
	}

	dispose() {
		this.reset();
	}
}