function programa() {		
	var scene = new THREE.Scene(); 
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight-200);
	renderer.setClearColorHex(0xFFFFFF, 1);
	document.body.appendChild(renderer.domElement); 
		
	//Dimensiones del cubo
	var geometry = new THREE.BoxGeometry(0.5,0.5,0.5); 
	var material = new THREE.MeshLambertMaterial({color:0x00ABFF});
	var cube = new THREE.Mesh(geometry, material);
	cube.position.set(0, 0, 2);
	scene.add(cube);
	camera.position.z = 5;
	
	//Esfera
	var geometrySphere = new THREE.SphereGeometry(0.25, 32, 32);
	var materialSphere = new THREE.MeshLambertMaterial({color: 0xFFA500});
	var esfera = new THREE.Mesh(geometrySphere, materialSphere);
	esfera.position.set(1, 0, 1);
	scene.add(esfera);
	
	//Cilindro
	var geometryCylinder = new THREE.CylinderGeometry( 0.01, 0.3, 0.7, 32, 32);
	var materialCylinder = new THREE.MeshLambertMaterial( {color: 0xff0000} );
	var cylinder = new THREE.Mesh( geometryCylinder, materialCylinder );
	cylinder.position.set(-1,0,3)
	scene.add( cylinder );

	
	//Luz direcional
	var directionalLight = new THREE.DirectionalLight(0xffffff);
	directionalLight.position.set( -1, 1, 1);
	scene.add( directionalLight );
	
	//Punto de luz
	var light = new THREE.PointLight(0x008000, 3, 20 );
	light.position.set(-4, 0, 0);
	scene.add( light );
	
	//Controles camara
	var controles = new THREE.OrbitControls(camera);
	var mover = false;
	var escalar = false;
	var moverCylinder = false;
	var escalarCylinder = false;
	
	var render = function () { 
		requestAnimationFrame(render); 
		cube.rotation.x += 0.03; 
		cube.rotation.y += 0.03;
		
		//MOVER esfera
		if(esfera.position.z > 4) {
			mover = true;
		}
		else if(esfera.position.z < -4) {
			mover = false;
		}
		
		if(mover == false) {
			esfera.position.z += 0.1;
		}
		else if(mover == true){
			esfera.position.z -= 0.1;
		}
		
		//ESCALAR cubo
		if(cube.scale.x >= 1) {
			escalar = true;
		}
		else if(cube.scale.x < 0.1) {
			escalar = false;
		}
		
		if(escalar == false) {
			cube.scale.x += 0.005;
			cube.scale.y += 0.005;
			cube.scale.z += 0.005;
		}
		else {
			cube.scale.x -= 0.005;
			cube.scale.y -= 0.005;
			cube.scale.z -= 0.005;
		}
		
		//MOVER Y ESCALAR piramide
		/*if(cylinder.position.z > 4) {
			moverCylinder = true;
		}
		else if(cylinder.position.z < -4) {
			moverCylinder = false;
		}
		
		if(moverCylinder == false) {
			cylinder.position.z += 0.01;
		}
		else if(moverCylinder == true){
			cylinder.position.z -= 0.01;
		}*/
		
		cylinder.rotation.x += 0.03; 
		cylinder.rotation.y += 0.03;
		
		//escalar
		if(cylinder.scale.x > 0.5) {
			escalarCylinder = true;
		}
		else if(cylinder.scale.x < 0.1) {
			escalarCylinder = false;
		}
		
		if(escalarCylinder == false) {
			cylinder.scale.x += 0.005;
			cylinder.scale.y += 0.005;
			cylinder.scale.z += 0.005;
		}
		else {
			cylinder.scale.x -= 0.005;
			cylinder.scale.y -= 0.005;
			cylinder.scale.z -= 0.005;
		}
		
		renderer.render(scene, camera); 
	};

	render(); 
}