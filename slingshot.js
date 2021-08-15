class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world,this.body);

    }
    fly(){
        this.body.bodyA = null;
    }
    attach(){
        this.body.bodyA = body;
    }
    fly(){
        this.body.bodyA = null;
    }
    attach(){
        this.body.bodyA = body;
    }

    /*display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
*/
}