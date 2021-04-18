// Общи настройки на сцената
function sceneInit()
{
	vaxInit();
	
	// включваме сенки
	renderer.shadowMap.enabled = true;
				
	// фиксирана гледна точка
	camera.position.set( 0, 100, 150 );
	camera.lookAt( new THREE.Vector3(0,20,0) );

	// наличната светлина я правим по-слаба
	light.intensity = 0.75;
	
	// околна светлина за по-бледи сенки
	ambientLight = new THREE.AmbientLight('gold',0.25);
	scene.add( ambientLight );
	
	// прожекторна светлина за сенки
	spotLight = new THREE.SpotLight('white',0.5,0,1.0,1.0);
	spotLight.shadow.mapSize = new THREE.Vector2( 1024*2, 1024*2 );
	spotLight.position.set( 0, 100, 0 );
	spotLight.target = new THREE.Object3D();
	spotLight.castShadow = true;
	scene.add( spotLight );
	scene.add( spotLight.target );
}



// Създаване на обектите в сцената
function sceneObjects()
{
	// земя
	ground = new THREE.Mesh(
		new THREE.BoxBufferGeometry(300,4,300),
		new THREE.MeshPhongMaterial({color:'lightgreen'})
	);
	ground.position.set( 0, -2, 0 );
	ground.receiveShadow = true;
	scene.add( ground );

	// обект
	object = new THREE.Mesh(
		new THREE.BoxBufferGeometry(8,8,8),
		new THREE.MeshLambertMaterial({color:'red'})
	);
	object.castShadow = true;
	scene.add( object );
}