import * as THREE from 'three'
import OrbitControls from 'three-orbit-controls'
const orbitControls = OrbitControls(THREE)

import Assets from './three-assets'
import Shapes from './shapes'

let sceneShapes = []
const protoShapes = Object.values(Shapes)

function getRandomVector() {
	const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	return Array.from( {length: 3}, () => Math.floor(Math.random() * 15) * plusOrMinus )
}

function getRandomShape(count) {
	let params = {
		width: Math.floor(Math.random() * window.innerWidth / (count*4)),
		height: Math.floor(Math.random() * window.innerHeight / (count*4)),

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
	document.body.appendChild( Assets.renderer.domElement )

	// add lights
	Assets.scene.add( new THREE.AmbientLight( 0x505050 ) )
	Assets.scene.add( Assets.spotLight )
	Assets.scene.add( Assets.dirLight )

	// add objects
	for (var i = shapeCount - 1; i >= 0; i--) {
		try {
			const shape = getRandomShape(shapeCount)
			Assets.scene.add( shape )
			const vector = getRandomVector()
			shape.position.set(vector[0], vector[1], vector[2])
		}
		catch (e) {
			console.log(e.message)
		}
	}

	// add orbit controls
	const controls = new orbitControls( Assets.camera, Assets.renderer.domElement );
	controls.target.set( 0, 1, 0 );
	controls.update();

	// Animate
	function animate(timestamp) {
		requestAnimationFrame( animate )
		sceneShapes.forEach((shape, i) => {
			const even = (i % 2)
			shape.rotation.x = even
				? shape.rotation.x + (0.01 * Number(i))
				: shape.rotation.x - (0.01 * Number(i))
			shape.rotation.y = even
				? shape.rotation.y + (0.01 * Number(i))
				: shape.rotation.y - (0.01 * Number(i))
		})
		Assets.renderer.render( Assets.scene, Assets.camera )
	}
	animate()
}