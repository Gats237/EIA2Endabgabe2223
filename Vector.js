"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    class Vector {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Feuerwerksimulator.Vector = Vector;
    class MouseTracker {
        vectors;
        constructor() {
            this.vectors = [];
        }
        getMousePosition(event) {
            let x = event.clientX;
            let y = event.clientY;
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
    });
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Vector.js.map