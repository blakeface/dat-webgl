import * as THREE from 'three'
import OrbitControls from 'three-orbit-controls'
const orbitControls = OrbitControls(THREE)

import { scene, renderer, camera, spotLight, dirLight, ground } from './three-assets'
import Shapes from './shapes'

let sceneShapes = []
const protoShapes = Object.values(Shapes)

function getRandomVector() {
	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	return Array.from( {length: 3}, () => Math.floor(Math.random() * 15) * plusOrMinus )
}

function getRandomShape(count) {
	let params = {
		width: Math.floor(Math.random() * window.innerWidth / (count*10)),
		height: Math.floor(Math.random() * window.innerHeight / (count*10)),

	}
	// depth and radius are dependent on width and height
	params.depth = (params.width < params.height) ? params.width : params.height
	params.radius = (params.width < params.height)
		? Math.floor(params.width / 3)
		: Math.floor(params.height / 3)

	const shape = protoShapes[ Math.floor(Math.random() * protoShapes.length) ](params)
	sceneShapes.push(shape)
	return shape
}

export function threeScene(shapeCount) {

	// create canvas element
	document.body.appendChild( renderer.domElement )

	// add lights
	scene.add( new THREE.AmbientLight( 0x505050 ) )
	scene.add( spotLight )
	scene.add( dirLight )

	// add objects
	for (var i = shapeCount - 1; i >= 0; i--) {
		try {
			const shape = getRandomShape(shapeCount)
			scene.add( shape )
			const vector = getRandomVector()
			shape.position.set(vector[0], vector[1], vector[2])
		}
		catch (e) {
			console.log(e.message)
		}
	}

	// add orbit controls
	const controls = new orbitControls( camera, renderer.domElement );
	controls.target.set( 0, 1, 0 );
	controls.update();

	// Animate
	function animate(timestamp) {
		requestAnimationFrame( animate )
		sceneShapes.forEach(shape => {
			shape.rotation.x += 0.01
			shape.rotation.y += 0.01
		})
		renderer.render( scene, camera )
	}
	animate()
}