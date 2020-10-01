class Bob {
  constructor(x, y, radius) {
      var options  ={
          isStatic:false,
          restitution:1.15
          
        }

    this.body = Bodies.circle(x, y, radius, options);
    this.radius = 2 * radius;

    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red")
    ellipse(this.body.position.x, this.body.position.y, this.radius);

  }
};
