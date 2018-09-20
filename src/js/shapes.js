import * as THREE from 'three'

const shinyMaterial = new THREE.MeshPhongMaterial({
	color: 0xff0000,
  shininess: 100,
})

// box
function box(params) {
	const geometry = new THREE.BoxGeometry(
		params.width,
		params.height,
		params.depth
	)
	const box = new THREE.Mesh( geometry, shinyMaterial )
	box.castShadow = true
	return box;
}

// cylinder
function cylinder(params) {
	const geometry = new THREE.CylinderGeometry(
		params.radius, // top
		params.radius, // bottom
		params.height,
	)
	const cylinder = new THREE.Mesh( geometry, shinyMaterial )
	cylinder.castShadow = true
	return cylinder
}

// hedron
function hedron(params) {
	const geometry = new THREE.IcosahedronGeometry()
	const hedron = new THREE.Mesh( geometry, shinyMaterial )
	hedron.castShadow = true
	return hedron
}

// plane
function plane(params) {
	const geometry = new THREE.PlaneGeometry( params.width, params.height );
	const plane = new THREE.Mesh( geometry, shinyMaterial );
	plane.castShadow = true
	return plane
}

export { box, cylinder, hedron, plane }