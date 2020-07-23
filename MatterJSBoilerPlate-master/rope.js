class SlingShot{
    constructor(body1,body2, offsetX, offsetY){
{ 
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            pointB: point2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.pointB= pointB
        this.sling = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
    this.sling.bodyA = null;
    }

    display(){
        if (this.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
}