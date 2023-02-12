namespace Feuerwerksimulator {

  window.addEventListener("load",async () => {
    let serverRockets: Rocket[] = await handleLoad();
    console.log(serverRockets);
    serverRockets.forEach(rocket => {
      addRocket(rocket);
    
    });
  }); 


// Canvas Deklaration  / globaler Scope / müssen überall zugreifbar sein

export let canvas: HTMLCanvasElement =<HTMLCanvasElement>document.getElementById("canvas");
export let crc2:CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d")
export let refreshRate: number = 10;
setInterval(update, 1000 / refreshRate);
    

   
    canvas.addEventListener("click",readProperties);

  // HTML Elemente zuweisen
    let rocketName : HTMLInputElement = <HTMLInputElement>document.getElementById("RocketName");
    let savedRocktetsselected: HTMLSelectElement= <HTMLSelectElement>document.getElementById("saved-rocktes-selected");
    let savedRockets: HTMLDivElement= <HTMLDivElement>document.getElementById("saved-rocktes");
    let rocketName: HTMLInputElement= <HTMLInputElement>document.getElementById("RocketName");
    let rocketColor: HTMLInputElement= <HTMLInputElement>document.getElementById("rocket-color");
    



// Arrays für Raketen und Partikel
    let explosives : explosives[] = [];
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
            let color: string = String(formData.get("fav
            
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

    }

