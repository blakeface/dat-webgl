import * as THREE from 'three'
import OrbitControls from 'three-orbit-controls'
const orbitControls = OrbitControls(THREE)

import { scene, renderer, camera, spotLight, dirLight, ground } from './three-assets'
import { box, cylinder, icosahedron, plane } from './shapes'

const shapes = [
	box,
	cylinder,
	icosahedron,
]

function getRandomVector(){
	return Array.from( {length: 3}, () => Math.floor(Math.random() * 10) )
}

export function threeScene() {

	// create canvas element
	document.body.appendChild( renderer.domElement )

	// add lights
	scene.add( new THREE.AmbientLight( 0x505050 ) )
	scene.add( spotLight )
	scene.add( dirLight )

	// add objects
	scene.add( ground )
	shapes.forEach(shape => {
		scene.add(shape)
		const vector = getRandomVector()
		shape.position.set(vector[0], vector[1], vector[2])
	})

	// add orbit controls
	const controls = new orbitControls( camera, renderer.domElement );
	controls.target.set( 0, 1, 0 );
	controls.update();

	// Animate
	function animate(timestamp) {
		requestAnimationFrame( animate )
		shapes.forEach(shape => {
			shape.rotation.x += 0.01
			shape.rotation.y += 0.01
		})
		renderer.render( scene, camera )
	}
	animate()
}