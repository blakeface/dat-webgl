import * as THREE from 'three'
import { box, cylinder } from './shapes'

export function scene() {
	const width = window.innerWidth
	const height = window.innerHeight
	const shapes = [box, cylinder]

	// set the scene
	const scene = new THREE.Scene()
	const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 )
	const renderer = new THREE.WebGLRenderer()
	renderer.setSize( width, height )
	renderer.setClearColor( 0x000000, 1 )
	document.body.appendChild( renderer.domElement )

	// add light
	const light = new THREE.DirectionalLight( 0xffffff )
	light.position.set( 0, 1, 1 ).normalize()
	scene.add(light)

	// add object
	scene.add( box )
	scene.add( cylinder )
	camera.position.z = 100

	// animate
	function animate(shape, x, y, z) {
		requestAnimationFrame( animate )
		renderer.render( scene, camera )
	}

	shapes.forEach(shape => animate(shape))
	console.log(shapes)
}