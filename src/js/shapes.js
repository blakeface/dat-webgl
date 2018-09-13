import * as THREE from 'three'

const material = new THREE.MeshPhongMaterial({
	color: 0x00ffff,
  shininess: 100,
})

// box
const bGeometry = new THREE.BoxGeometry( 1, 1, 1 )
const box = new THREE.Mesh( bGeometry, material )

// cylinder
const cGeometry = new THREE.CylinderGeometry( 1, 1, 3, 10 )
const cylinder = new THREE.Mesh( cGeometry, material )

const iGeometry = new THREE.IcosahedronGeometry()
const icosahedron = new THREE.Mesh( iGeometry, material )


export { box, cylinder, icosahedron }