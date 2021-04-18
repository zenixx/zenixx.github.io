<!DOCTYPE html>

<html>
	<head>
		<title>E0806: Много анаглифни обекти</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<script src="three.min.js"></script>
		<script src="stats.min.js"></script>
		<script src="WebGL.js"></script>
		<script src="AnaglyphEffect.js"></script>
		<script src="vax.js"></script>
	</head>
	<body>
		<script>
			vaxInitAnaglyph();
			var cubes = [];
			var n = 30;
			for (var i=0; i<n; i++)
			{
				cubes[i] = new THREE.Mesh(
					new THREE.IcosahedronBufferGeometry( 10 ),
					new THREE.MeshStandardMaterial( {color:'yellow'} )
				);
				cubes[i].position.set( THREE.Math.randFloat(-50,50),THREE.Math.randFloat(-50,50),THREE.Math.randFloat(-100,100) );
				scene.add( cubes[i] );
			}
	    function animate()
			{
				// въртене на обекта
			for (var i=0; i<n; i++)
				cubes[i].rotation.y = t;
			}
		</script>
	</body>
</html>
