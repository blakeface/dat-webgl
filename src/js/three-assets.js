import * as THREE from 'three'

const width = window.innerWidth
const height = window.innerHeight

// scene
const scene = new THREE.Scene()

// renderer
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setPixelRatio( window.devicePixelRatio )
renderer.setClearColor( 0x000000, 0 )
renderer.setSize( width, height )
renderer.shadowMap.enabled = true

// camera
const camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 1000 )
camera.position.z = 50
camera.focalLength = 3


// spot light
const spotLight = new THREE.SpotLight( 0xffffff )
spotLight.angle = Math.PI / 5
spotLight.penumbra = 0.2
spotLight.position.set( 2, 3, 3 )
spotLight.castShadow = true
spotLight.shadow.camera.near = 3
spotLight.shadow.camera.far = 10
spotLight.shadow.mapSize.width = 1024
spotLight.shadow.mapSize.height = 1024

// directional light
const dirLight = new THREE.DirectionalLight( 0x55505a, 1 )
dirLight.position.set( 0, 3, 0 )
dirLight.castShadow = true
dirLight.shadow.camera.near = 1
dirLight.shadow.camera.far = 10
dirLight.shadow.camera.right = 1
dirLight.shadow.camera.left = - 1
dirLight.shadow.camera.top	= 1
dirLight.shadow.camera.bottom = - 1
dirLight.shadow.mapSize.width = 1024
dirLight.shadow.mapSize.height = 1024

// ground
const ground = new THREE.Mesh(
	new THREE.PlaneBufferGeometry( 50, 50, 1, 1 ),
	new THREE.MeshPhongMaterial( { color: 0xffffff, shininess: 150 } )
)
ground.rotation.x =- Math.PI / 2
ground.receiveShadow = true

// package it up and export
const Assets = {
	scene: scene,
	renderer: renderer,
	camera: camera,
	spotLight: spotLight,
	dirLight: dirLight,
	ground: ground
}

export default Assets