"use strict"
var canvas;
var renderer;
var scene;
var camera;
var light;
var mesh;
var sceneReady = false;
var playing = false;
var reseted = false;
var raycaster;
var objeto;
var figures;
var piso;
var ortoCamera;
var cameraPerspective;
var activeCamera;
var controls;


var mouse = new THREE.Vector2();

function main()
{
    // RENDERER
    canvas = document.getElementById("canvas");
    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor("black");                    

    // LIGHTS
    light = new THREE.AmbientLight();    

    // CAMERAS
    raycaster = new THREE.Raycaster();

    cameraPerspective = new THREE.PerspectiveCamera(60., canvas.width / canvas.height, 0.01, 10000.);  // CAMERA
    //cameraPerspective = new THREE.PerspectiveCamera( 50, 0.5 * (canvas.width/canvas.height), 150, 1000 );
    cameraPerspective.position.set(0., 0., 5.);
    //scene.add( cameraPerspective );
    


    //ortoC
    ortoCamera = new THREE.OrthographicCamera( canvas.width / - 2, canvas.width / 2, canvas.height / 2, canvas.height / - 2, 1, 1000 );
    ortoCamera.position.set(0., 0., 5.);
    //scene.add( ortoCamera );

    activeCamera = ortoCamera;

    controls = new THREE.OrbitControls( activeCamera, renderer.domElement );

    // SCENE
    figures = [];
    scene = new THREE.Scene();                              
    scene.add(camera);
    scene.add(light);
    

    // EVENTS
    renderer.domElement.addEventListener( 'click', onClick, false );    
    initEventHandler();

    // ACTION
    requestAnimationFrame(renderLoop);              // RENDER LOOP
}
       
function renderLoop() {
    if(sceneReady)
    {   
        renderer.render(scene, activeCamera);
         if (playing){
            for(var i = 0; i < figures.length; i++){
                  figures[i].rotation.x = (figures[i].rotation.x + Number(document.getElementById("animationRotationX").value)) % 360;
                  figures[i].rotation.y = (figures[i].rotation.y + Number(document.getElementById("animationRotationY").value)) % 360;
                  figures[i].rotation.z = (figures[i].rotation.z + Number(document.getElementById("animationRotationZ").value)) % 360;

            }
         }
        if (reseted){
            for(var i = 0; i < figures.length; i++){
                figures[i].rotation.x=0;
                figures[i].rotation.y=0;
                figures[i].rotation.z=0;
          }

         }
         
    }
    requestAnimationFrame(renderLoop);
}