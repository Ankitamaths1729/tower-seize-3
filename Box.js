class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.3,
        'density':2,
        friction : 6,
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    
    if(this.body.speed <4){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    var rand=Math.round(random(1,255));
    var randa=Math.round(random(1,255));
    var randb=Math.round(random(1,255));
    fill(rand,randa,randb);
    rect(0,0, this.width, this.height);
    pop();
    }
     else{
      World.remove(world, this.body);
      push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          pop();
      }
    }
    
  
};