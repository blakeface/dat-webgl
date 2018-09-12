import * as THREE from 'three'

let datPoints = 2
const width = window.innerWidth
const height = window.innerHeight

// Dat protocol
const datUrl = 'dat://3167d872cec0d2896009a4156409b9e1ce89638d030c42be7c4be02f4e967bf7/'
try	{
	const archive = new DatArchive(datUrl)
	const stat = archive.stat('/index.html')
}
catch (e) {
	console.log(`Want to see something cool? Try this out over the dat protocol: ${datUrl}`)
	console.log(`learn more at https://datproject.org/`)
}

// set the scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer()
renderer.setSize( width, height )
renderer.setClearColor( 0x000000, 1 )
document.body.appendChild( renderer.domElement );

// add light
const light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 1, 1 ).normalize();
scene.add(light);

// create objects
const path = new THREE.CurvePath()
path.curves([])
const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
const material = new THREE.MeshPhongMaterial({
	color: 0x00ffff,
  shininess: 100,
});
const tube = new THREE.Mesh( geometry, material );
scene.add( tube );
camera.position.z = 5;



// animate
function animate() {
	requestAnimationFrame( animate );
	tube.rotation.x += 0.01;
	tube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();