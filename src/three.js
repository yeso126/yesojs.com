import THREE from 'THREE';

var scene, camera, renderer;
var boxGeometry, boxMaterial, boxMesh;
var hexGeometry, hexMaterial, hexMesh;
var tetraGeometry, tetraMaterial, tetraMesh;



function render() {
	renderer.render( scene, camera );
}

export  function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 1000;
	camera.position.x= 1000;

	var tetraGeometry = new THREE.TetrahedronGeometry(3000,2);
	var tetraMaterial = new THREE.MeshLambertMaterial({color: 0xfcfa2b, wireframe: true});
	tetraMesh = new THREE.Mesh(tetraGeometry, tetraMaterial);

	var hexGeometry = new THREE.IcosahedronGeometry(400);
	var hexMaterial = new THREE.MeshLambertMaterial({color: 0xfcfa2b, wireframe: true});
	hexMesh = new THREE.Mesh(hexGeometry, hexMaterial);

	var boxGeometry = new THREE.IcosahedronGeometry(200,4);
	var boxMaterial = new THREE.MeshPhongMaterial();
	boxMaterial.map = THREE.ImageUtils.loadTexture('./static/textures/earthmap1k.jpg');
	boxMaterial.bumpMap    = THREE.ImageUtils.loadTexture('./static/textures/earthbump1k.jpg');
	boxMaterial.bumpScale = 0.05;
	boxMesh = new THREE.Mesh( boxGeometry, boxMaterial );


	var ambientLight = new THREE.AmbientLight( 0x14fef7, 0.4 );

	var light1= new THREE.DirectionalLight( 0x45babe, 1.88);
	light1.position.set(200,100,200);


	var light2= new THREE.DirectionalLight( 0x650000, 2.2);
	light2.position.set(100,350,500);


	scene.add(tetraMesh);
	scene.add(hexMesh);
	scene.add(boxMesh);
	scene.add(ambientLight);
	scene.add(light1);
	scene.add(light2);

	renderer = new THREE.WebGLRenderer({
		alpha: true,
		antialias: true
	});
	renderer.setSize( window.innerWidth, window.innerHeight - 4 );

	document.getElementById('glcanvas').appendChild( renderer.domElement );

};

export function animate() {

	requestAnimationFrame( animate );

	// boxMesh.rotation.x += 0.003;
	boxMesh.rotation.y += 0.05/32;

	hexMesh.rotation.x += -0.005;
	hexMesh.rotation.y += -0.006;

	tetraMesh.rotation.y += -0.005;

	render();

};

export function onResize() {
	camera.aspect= window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight - 4 );
};
