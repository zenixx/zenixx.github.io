/**
 * FMI VR/AR/XR Library
 * 2020-05-09
 * v 0.002
 *
 * vaxInit()
 *
 */

var renderer, scene, camera, light, stats, clock, t, animate;

function vaxInit()
{
	if ( !THREE.WEBGL.isWebGLAvailable() )
		alert( THREE.WEBGL.getWebGLErrorMessage() );
	
	renderer = new THREE.WebGLRenderer( {antialias:true} );
	document.body.appendChild( renderer.domElement );
	document.body.style.margin = 0;
	document.body.style.overflow = 'hidden';
	
	stats = new Stats();
	document.body.appendChild( stats.dom );
	
	scene = new THREE.Scene();
	scene.background = new THREE.Color('white');

	clock = new THREE.Clock(true);
	
	camera = new THREE.PerspectiveCamera( 60, 1, 1, 1000 );
	camera.position.set(0,0,100);
	camera.lookAt(new THREE.Vector3(0,0,0));
	
	light = new THREE.PointLight();
	light.position.set(0,150,300);
	scene.add( light );
	
	window.addEventListener( 'resize', onWindowResize, false );
	onWindowResize();
	
	renderer.setAnimationLoop( frame );
}

function onWindowResize( event )
{
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight, true );
}			

function frame( )
{
	t = clock.getElapsedTime();

	if (animate) animate();
	
	stats.update();
	
	renderer.render( scene, camera );
}

