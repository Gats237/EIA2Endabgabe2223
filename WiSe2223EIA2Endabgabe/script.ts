namespace Feuerwerksimulator {

  window.addEventListener("load",async (params:type) => {
    
  } handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        
        // Aufruf der Funktionen
        canvas=<HTMLCanvasElement>document.getElementById("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d")
    

    
    // danach internal size zu match schicken
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
   
    canvas.addEventListener("click",readProperties);

    }

    //Variablen
   export  let crc2: CanvasRenderingContext2D 
   export  let canvas: HTMLCanvasElement 
   
   let explosives : explosives[] = [];
   
    let RocketName: string;
    let color: string;
    let Radius: number;
    let LifetimeSlider: number;
    let ParticleSlider: number;
    let moveables: Moveable[] = [];

// Ausgegebener Wert des Formdata
    let settings: FormDataEntryValue[]=[];

    // Racketeninterface

    


     

    //Eventlistener für Canvas

   

    // Funktionen

    function readProperties (_event: MouseEvent){
        let formData: FormData = new FormData(document.forms[0]);
        let rect: DOMRect=canvas.getBoundingClientRect();
        let x: number =  _event.clientX - rect.left;
        let y: number = _event.clientY- rect.top;

        console.log(x, y);
        crc2.save();
        crc2.beginPath();
        crc2.arc(x, y, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "favcolor";
        crc2.fill();
        crc2.closePath();
        crc2.restore();

       console.log("X: " + x + "Y: " + y);
        for (let entry of formData) {
            let RocketName: string = String(formData.get("RocketName"));
            let color: string = String(formData.get("favcolor"));
            let Radius: string = String(formData.get("Radius"));
            let lifetime: string = String(formData.get("lifetime"));
            let partikelanzahl: string = String(formData.get("partikelanzahl"));

        }

        Firework.push(new Rakete ( RocketName, color, Radius, LifetimeSlider, ParticleSlider, x, y))

    }

//function Particlesystem

  
// Particle erstellen

function createParticle(_quantity: number, _size: number, _mousePositionX: number, _mousePositionY: number, _color: string, _luminance: string, _duration: number, _type: string): void {
    let origin: Vector = new Vector(_mousePositionX, _mousePositionY);
    let color: string = _color;
    let radian: number = (Math.PI * 2) / _quantity;
    for (let i: number = 0; i < _quantity; i++) {
      let px: number;
      let py: number;
      let velocity: Vector;
      let particle: Moveable;
      if (i % 2 == 0) {
        px = Math.cos(radian * i) * 150 + Math.random() * 20;
        py = Math.sin(radian * i) * 150 + Math.random() * 20;
      }
      else {
        px = Math.cos(radian * i) * 110 * Math.random() * 2;
        py = Math.sin(radian * i) * 110 * Math.random() * 2;
      }
      velocity = new Vector(px, py);
      particle = new Particle( origin, velocity, color, Radius, LifetimeSlider,);
      moveables.push(particle);
    }
  }
    
//Rakete starten 

function setBackground(): void {
    crc2.save();
    crc2.fillStyle = "black";
    crc2.fillRect(0, 0, canvas.width, canvas.height);
    crc2.restore();
}



    //Event Listener für Mouseposition 








}

