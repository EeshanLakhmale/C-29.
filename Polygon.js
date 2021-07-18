class Polygon{
    constructor(x, y, radius, maxSides) {
        var options = {
                     
        }
        this.body = Bodies.circle(x, y,radius, options, maxSides);
        this.radius = radius;
        this.maxSides = maxSides;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img, polygon.pos.x, polygon.pos.y, 40, 40);
        pop();
      }
}