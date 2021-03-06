class Paper {
  constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
      // console.log('this.body', this.body);
      // console.log('world', world);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
  
      ellipseMode(RADIUS);

      strokeWeight(3);
      stroke("purple");
      fill("purple");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };