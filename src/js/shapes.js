import * as THREE from 'three'

const material = new THREE.MeshPhongMaterial({
	color: 0xff0000,
  shininess: 100,
})

// box
const bGeometry = new THREE.BoxGeometry( 1, 1, 1 )
const box = new THREE.Mesh( bGeometry, material )
box.castShadow = true

// cylinder
const cGeometry = new THREE.CylinderGeometry( 1, 1, 3, 10 )
const cylinder = new THREE.Mesh( cGeometry, material )
cylinder.castShadow = true

// icosahedron
const iGeometry = new THREE.IcosahedronGeometry()
const icosahedron = new THREE.Mesh( iGeometry, material )
icosahedron.castShadow = true

// plane
const pGeometry = new THREE.PlaneGeometry( 5, 20, 32 );
const plane = new THREE.Mesh( pGeometry, material );
plane.castShadow = true

export { box, cylinder, icosahedron, plane }