import * as THREE from 'three'

const material = new THREE.MeshPhongMaterial({
	color: 0x00ffff,
  shininess: 100,
})

// box
const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 )
const box = new THREE.Mesh( boxGeometry, material )

// cylinder
const cylinderGeometry = new THREE.CylinderGeometry( 5, 5, 20, 32 )
const cylinder = new THREE.Mesh( cylinderGeometry, material )


export { box, cylinder }