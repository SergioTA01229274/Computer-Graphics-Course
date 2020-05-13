class BoxModel extends THREE.Mesh
{
    constructor()
    {
        super(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({wireframe: true}));
    }
    setNormalMaterial()
    {
        this.material = new THREE.MeshNormalMaterial();
    }
    setWireframeMaterial()
    {
        this.matetrial = new THREE.MeshBasicMaterial({wireframe: true});
    }
}

class Back extends BoxModel
{
    constructor()
    {
        super();
        // TRANSFORM
        this.position.set(0., 0.5, -0.5);
        this.rotation.x = this.rotation.x - Math.PI / 2.;
        this.scale.set(1., 0.1, 1.);
    }
}


class Leg extends BoxModel
{
    constructor()
    {
        super();
        // TRANSFORM
        this.scale.set(0.1, 1., 0.1);
    }
}

class Seat extends THREE.Mesh
{
    constructor()
    {
        super(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({wireframe: false}));
        // TRANSFORM
        this.scale.set(1., 0.1, 1.);
    }
}

class Bench extends THREE.Group 
{
    constructor()
    {
        super();
        // CHILDREN
        this.seat = new Seat();
        this.leftFrontLeg = new Leg();
        this.rightFrontLeg = new Leg();
        this.leftBackLeg = new Leg();
        this.rightBackLeg = new Leg();
        // TRANSFORMS
        this.leftFrontLeg.position.set(-0.5, -0.5, 0.5);
        this.rightFrontLeg.position.set(0.5, -0.5, 0.5);
        this.leftBackLeg.position.set(-0.5, -0.5, -0.5);
        this.rightBackLeg.position.set(0.5, -0.5, -0.5);
        // BUILD HIERARCHY
        this.add(this.seat);
        this.add(this.leftFrontLeg);
        this.add(this.rightFrontLeg);
        this.add(this.leftBackLeg);
        this.add(this.rightBackLeg);
    }
}

class Chair extends THREE.Group 
{
    constructor(size = 1.)
    {
        super();
        // CHILDREN
        this.bench = new Bench();
        this.back = new Back();
        // BUILD HIERARCHY
        this.add(this.bench);
        this.add(this.back);
    }
}