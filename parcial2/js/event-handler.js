function toolsEvent(evt) 
{
    switch(evt){
      case '0':
        //Box
        var geometry = new THREE.BoxGeometry();        
        // MATERIAL
        var material = new THREE.MeshNormalMaterial(); 
        //singleGeometry.merge(singleGeometry, geometry); 
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x =-2;
        mesh.position.y=-2;
        mesh.position.z=-8;
        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '1':
        //Sphere
        var radius = 1;
        var widthSegments = 30;
        var heightSegments = 30;
        var geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);      
        // MATERIAL
        var material = new THREE.MeshNormalMaterial();  
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.y=-1.8;
        mesh.position.z=-5.5;

        mesh.scale.x =.7;
        mesh.scale.y =.7;
        mesh.scale.z =.7;

        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '2':
        //Cone
        var radius = 0.5;
        var height = 2;
        var radialSegments = 30;
        var geometry = new THREE.ConeBufferGeometry(radius, height, radialSegments);     
        // MATERIAL
        var material = new THREE.MeshNormalMaterial();  
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x =2;
        mesh.position.y=-1.7;
        mesh.position.z=-5.5;
        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '3':
        //Cylinder
        var radiusTop = 1;
        var radiusBottom = 1;
        var height = 1.5;
        var radialSegments = 30;
        var geometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, radialSegments);    
        // MATERIAL
        var material = new THREE.MeshNormalMaterial();  
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x =2;
        mesh.position.y=-1.7;
        mesh.position.z=-8;
        mesh.scale.x=.5;
        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '4':
        //Pyramid
        var radius = 1;
        var geometry = new THREE.TetrahedronBufferGeometry(radius);  
        // MATERIAL
        var material = new THREE.MeshNormalMaterial();  
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x=-2;
        mesh.position.y=-2.1;
        mesh.position.z=-5.5;
        mesh.rotation.x = 56 *Math.PI /180;
        mesh.rotation.y = -45 * Math.PI /180;
        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '5':
        //Donut
        var radius = 1;
        var tubeRadius = 0.5;
        var radialSegments = 30;
        var tubularSegments = 30;
        var geometry = new THREE.TorusBufferGeometry(radius, tubeRadius, radialSegments, tubularSegments);
        // MATERIAL
        var material = new THREE.MeshNormalMaterial();  
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.y =-1.9;
        mesh.position.z =-1.5;

        mesh.scale.x =.4;
        mesh.scale.y=.4;
        mesh.scale.z=.4;
        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '6':
        //Dodecahedron
        var radius = 1;
        var geometry = new THREE.DodecahedronBufferGeometry(radius);
        // MATERIAL
        var material = new THREE.MeshNormalMaterial();  
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.y=-1.6
        mesh.position.z=-8;
        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '7':
        //TorusKnot
        var radius = 1;
        var tubeRadius = 0.5;
        var tubularSegments = 100;
        var radialSegments = 100;
        var p = 2;
        var q = 3;
        var geometry = new THREE.TorusKnotBufferGeometry(radius, tubeRadius, tubularSegments, radialSegments, p, q);
        // MATERIAL
        var material = new THREE.MeshNormalMaterial();  
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.y =-1.8;
        mesh.position.z =-3;

        mesh.scale.x =.3;
        mesh.scale.y=.3;
        mesh.scale.z=.3;
        scene.add(mesh);
        figures.push(mesh);
        sceneReady = true;
        break;
      case '8':
        //Plane
        var width = 1;
        var height = 1;
        var geometry = new THREE.PlaneBufferGeometry(width, height);        // MATERIAL
        var material = new THREE.MeshNormalMaterial();
        
        mesh = new THREE.Mesh(geometry, material);
        piso = mesh;
        document.getElementById("img-plane").disabled = true;
        document.getElementById('img-plane').style.display = 'block';
        mesh.position.x =0;
        mesh.position.y =-2.5;
        mesh.position.z =-4.5;

        mesh.rotation.x =-90 *Math.PI /180;

        mesh.scale.x =5.5;
        mesh.scale.y=10;
        mesh.scale.z=1;
        scene.add(mesh);
        sceneReady = true;
        
        break;
      case '9':
          //circle
          var radius = 1;
          var segments = 24;
          var geometry = new THREE.CircleBufferGeometry(radius, segments);        // MATERIAL
          var material = new THREE.MeshNormalMaterial();  
          mesh = new THREE.Mesh(geometry, material);
          mesh.position.x =-1.7;
          mesh.position.y =-1.8;
          mesh.position.z =-3;

          mesh.scale.x =.7;
          mesh.scale.y=.7;
          mesh.scale.z=.7;
          scene.add(mesh);
          figures.push(mesh);
          sceneReady = true;
          break;
    }
    
}

function setPlay(){
  playing = true;
  reseted= false;
}

function setPause(){
  playing = false;
}

function resetA(){
  reseted =true;
  playing=false;
  document.getElementById("animationRotationX").value = 0;
  document.getElementById("animationRotationY").value = 0;
  document.getElementById("animationRotationZ").value = 0;
}

function resetPosition() {
  activeCamera.position.set(0., 0., 5.);
}

function resetRotation() {
  activeCamera.lookAt( 0., 0., 0. );
}

function addObj() {
  var loader = new THREE.OBJLoader();
  var fullPath = document.getElementById('objFile').value;
  var filename = "";
  if (fullPath) {
      var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
          filename = filename.substring(1);
      }
  }

    manager = new THREE.LoadingManager();
       manager.onProgress = function (item, loaded, total) {
       console.log(item, loaded, total);
    };
    var texture = new THREE.Texture();
    var loader = new THREE.OBJLoader(manager);
    loader.load(filename, function (object) {
    mesh = new THREE.Mesh( object.children[0].geometry, object.children[0].material);
    mesh.position.y=-2.7;
    mesh.scale.x=4;
    mesh.scale.y=4;
    mesh.scale.z=4;
    scene.add(mesh);
    renderer.render(scene, activeCamera);
    figures.push(mesh);
    sceneReady = true;
    });
}

function addChair() {
  var chair = new Chair();
  var material = new THREE.MeshNormalMaterial();  
  mesh = new THREE.Mesh(chair, material);
  chair.position.x=1.7;
  chair.position.y=-1.8;
  chair.position.z=-3;
  //chair.material = new THREE.MESHNormalMaterial();
  //scene.add(merge(mesh,chair));
  //scene.add(mesh);
  scene.add(chair);
  figures.push(mesh);
  sceneReady = true;
}




function onClick( event ) {
  event.preventDefault();
  var x = event.clientX;
  var y = event.clientY;

  var rect = event.target.getBoundingClientRect();
  mouse.x = 2 * (x - rect.left) / canvas.width - 1;
  mouse.y = 2 * (rect.top - y) / canvas.height + 1;
  console.log(mouse.x, mouse.y);
  raycaster.setFromCamera( mouse, activeCamera );
  var intersects = raycaster.intersectObjects( scene.children, true);
  for ( var i = 0; i < intersects.length; i++ ) {
    if(intersects[0].object==piso){

    }else{
    switch(document.getElementById("materialSelect").value){
      case "Basic":
        intersects[0].object.material = new THREE.MeshBasicMaterial({wireframe: false,
          color: document.getElementById("objectColor").value
        });
        break;
      case "Wireframe":
        intersects[0].object.material = new THREE.MeshBasicMaterial({wireframe: true,
          color: document.getElementById("objectColor").value
        });
        break;
      case "Normal":
        intersects[0].object.material = new THREE.MeshNormalMaterial({wireframe: false,
          color: document.getElementById("objectColor").value
        });
        break;
      case "Lambert":
        intersects[0].object.material = new THREE.MeshLambertMaterial({wireframe: false,
          color: document.getElementById("objectColor").value
          
        });
        break;
      case "Phong":
        intersects[0].object.material = new THREE.MeshPhongMaterial({wireframe: false,
          color: document.getElementById("objectColor").value,
          specular: "white",
          shininess: 5
        });
        break;
      case "Standard":
        intersects[0].object.material = new THREE.MeshStandardMaterial({wireframe: false,
          color: document.getElementById("objectColor").value
        });
        break;
      case "Texture":
        intersects[0].object.material = new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load('imgs/crate.jpg')
    });
        break
    }
    if(document.getElementById("deleter").checked){
      scene.remove(intersects[0].object);
    }
    intersects[0].object.position.x = document.getElementById("positionX").value;
    intersects[0].object.position.y = document.getElementById("positionY").value;
    intersects[0].object.position.z = document.getElementById("positionZ").value;

    // scale
    intersects[0].object.scale.x = document.getElementById("scallingX").value;
    intersects[0].object.scale.y = document.getElementById("scallingY").value;
    intersects[0].object.scale.z = document.getElementById("scallingZ").value;

    //rotation
    intersects[0].object.rotation.x = document.getElementById("rotationX").value * Math.PI /180;
    intersects[0].object.rotation.y = document.getElementById("rotationY").value * Math.PI /180;
    intersects[0].object.rotation.z = document.getElementById("rotationZ").value * Math.PI /180;


  /*
      An intersection has the following properties :
          - object : intersected object (THREE.Mesh)
          - distance : distance from camera to intersection (number)
          - face : intersected face (THREE.Face3)
          - faceIndex : intersected face index (number)
          - point : intersection point (THREE.Vector3)
          - uv : intersection point in the object's UV coordinates (THREE.Vector2)
  */
}
}
}

function cameraMode(cam){
  var cameraPosition = activeCamera.position.clone();
  var cameraMatrix =  activeCamera.matrix.clone();
  switch (cam){
    case "Orto":

      activeCamera = ortoCamera;
      activeCamera.position.copy(cameraPosition);
      activeCamera.matrix.copy(cameraMatrix);
      break;
    case "Pers":

      activeCamera= cameraPerspective;
      activeCamera.position.copy(cameraPosition);
      activeCamera.matrix.copy(cameraMatrix);
      break;
  }
  activeCamera.updateProjectionMatrix();
  controls.object = activeCamera;
  controls.update();
}



function initEventHandler(evt)
{
	
}