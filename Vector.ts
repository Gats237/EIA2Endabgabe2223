namespace  Feuerwerksimulator {

   export class Vector {
        x: number;
        y: number;
      
        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
        }
      }
      
      class MouseTracker {
        vectors: Vector[];
      
        constructor() {
          this.vectors = [];
        }
      
        getMousePosition(event: MouseEvent): void {
          let x: number = event.clientX;
          let y: number = event.clientY;
          console.log("X: " + x + " Y: " + y);
      
          let vector = new Vector(x, y);
          this.vectors.push(vector);
        }
      }
      
      const mouseTracker = new MouseTracker();
      document.addEventListener("click", (event) => {
        mouseTracker.getMousePosition(event);
      });
      
        document.addEventListener("mousemove", (event) => {
        mouseTracker.getMousePosition(event);
        })
    }