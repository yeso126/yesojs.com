var THREE = require('three');
var scene, camera, renderer;
var geometry, material, mesh;


export  function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 1000;

	geometry = new THREE.BoxGeometry( 400, 400, 200 );
	material = new THREE.MeshBasicMaterial({
		color: 0x2c63a4 ,
		wireframe: true
	});

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight - 4 );

	document.getElementById('glcanvas').appendChild( renderer.domElement );

}

export function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.001;
	mesh.rotation.y += 0.009;

	renderer.render( scene, camera );

}
