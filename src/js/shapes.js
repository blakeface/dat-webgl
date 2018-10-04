import * as THREE from 'three'
import imageUrls from '../assets/image-urls'

function getMesh(geometry) {
	const material = Math.random() > .5 ? getGifMaterial() : getRandomShinyMaterial()
	const mesh = new THREE.Mesh( geometry, material )
	mesh.castShadow = true
	return mesh
}

function getRandomShinyMaterial() {
	const shinyMaterial = new THREE.MeshPhongMaterial({
		color: getRandomHex(),
	  shininess: 100,
	})
	return shinyMaterial
}

function getRandomHex() {
	const letters = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }
  return new THREE.Color(hex)
}

function getGifMaterial(){
	const i = Math.floor(Math.random() * imageUrls.length)
	const texture = new THREE.TextureLoader().load( imageUrls[i] )
	// texture.wrapS = THREE.RepeatWrapping;
	// texture.wrapT = THREE.RepeatWrapping;
	// texture.repeat.set( i + 3, i + 3);
	return new THREE.MeshBasicMaterial( { map: texture } );
}

const Shapes = {
	box: function(params) {
		const geometry = new THREE.BoxGeometry(
			params.width,
			params.height,
			params.depth
		)
		return getMesh(geometry)
	},

	cylinder: function(params) {
		const geometry = new THREE.CylinderGeometry(
			params.radius, // top
			params.radius, // bottom
			params.height,
		)
		return getMesh(geometry)
	},

	sphere: function(params) {
		const geometry = new THREE.SphereGeometry( params.radius )
		return getMesh(geometry)
	},

	// plane: function(params) {
	// 	const geometry = new THREE.PlaneGeometry( params.width, params.height )
	// 	return getMesh(geometry)
	// },

	torus: function(params) {
		const geometry = new THREE.TorusGeometry( params.radius )
		return getMesh(geometry)
	},

	torusKnot: function(params) {
		const geometry = new THREE.TorusKnotGeometry( params.radius )
		return getMesh(geometry)
	},

	icosahedron: function(params) {
		const geometry = new THREE.IcosahedronGeometry()
		return getMesh(geometry)
	},

	octahedron: function(params) {
		const geometry = new THREE.OctahedronGeometry()
		return getMesh(geometry)
	},

	tetrahedron: function(params) {
		const geometry = new THREE.TetrahedronGeometry()
		return getMesh(geometry)
	},

}

export default Shapes