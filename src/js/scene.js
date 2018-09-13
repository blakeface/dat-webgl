import * as THREE from 'three'
import { box, cylinder, icosahedron } from './shapes'

const shapes = [box, cylinder, icosahedron]
const width = window.innerWidth
const height = window.innerHeight

function getRandomVector(){
	return Array.from( {length: 3}, () => Math.floor(Math.random() * 10) )
}

export function scene() {

	// set the scene, renderer, and camera
	const scene = new THREE.Scene()
	const renderer = new THREE.WebGLRenderer()
	renderer.setSize( width, height )
	renderer.setClearColor( 0x000000, 1 )
	document.body.appendChild( renderer.domElement )
	const camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 1000 )
	camera.position.z = 50

	// add light
	const light = new THREE.DirectionalLight( 0xffffff )
	light.position.set( 0, 1, 1 ).normalize()
	scene.add(light)

	// add objects
	shapes.forEach(shape => {
		scene.add(shape)
		const vector = getRandomVector()
		console.log(vector)
		shape.position.set(vector[0], vector[1], vector[2])
		console.log(shape)
	})

	// animate
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