 namespace   Feuerwerksimulator {

  export   class Rakete {
    RocketName: string;
    favcolor:string;  
    Radius: number;
    LifetimeSlider: number; 
    ParticleSlider: number; 
    x: number; 
    y: number;

constructor( RocketName: string, favcolor:string, Radius: number, LifetimeSlider: number, ParticleSlider: number, x: number, y: number) {
    this.RocketName = RocketName;
    this.favcolor = favcolor;
    this.Radius = Radius;
    this.LifetimeSlider = LifetimeSlider;
    this.ParticleSlider = ParticleSlider;
    this.x = x;
    this.y = y;
    draw ();
    ocapacity();






    
}
}

 }