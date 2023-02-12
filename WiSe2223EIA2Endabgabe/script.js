"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    window.addEventListener("load", async () => {
        let serverRockets = await Feuerwerksimulator.handleLoad();
        serverRockets.forEach(rocket => {
            // Funktion addRockets erstellen und hier einf체gen
        });
    });
    Feuerwerksimulator.canvas = document.getElementById("canvas");
    Feuerwerksimulator.crc2 = Feuerwerksimulator.canvas.getContext("2d");
    Feuerwerksimulator.refreshRate = 10;
    setInterval(update, Feuerwerksimulator.refreshRate);
    // Globale Variablen f체r HTML Elemente
    let savedRocketsSelect = document.getElementById("saved-rockets-select");
    let nameInput = document.getElementById("rocket-name");
    let numCirclesInput = document.getElementById("num-circles");
    let colorInput = document.getElementById("explosion-color");
    let sizeInput = document.getElementById("explosion-size");
    let lifetimeInput = document.getElementById("explosion-lifetime");
    // Hier sollen die einzelnen abgeschossenen Raketen w채hrend ihrer Lebenszeit gespeichert.
    let explosions = [];
    Feuerwerksimulator.canvas.addEventListener("click", createExplosion);
    function createExplosion(_event) {
        // x und y position der maus auf dem canvas werden ausgelesen. Es wird der Offset vom Canvas zum Seitenrand abgezogen
        let x = _event.clientX - Feuerwerksimulator.crc2.canvas.offsetLeft;
        let y = _event.clientY - Feuerwerksimulator.crc2.canvas.offsetTop;
        let explosionPosition = new Feuerwerksimulator.Vector(x, y);
        let explosion = new Feuerwerksimulator.Explosion(explosionPosition, Number(numCirclesInput.value), colorInput.value, Number(sizeInput.value), Number(lifetimeInput.value));
        explosions.push(explosion);
    }
    //Neue Rakete initialisieren
    //Click Event für den Button "Rakete speichern"
    //Rakete speichern
    // Hier werden alle explosions und ihre partikel neu gemalt
    function update() {
        Feuerwerksimulator.crc2.fillStyle = "rgba(50, 50, 50, 0.05)";
        Feuerwerksimulator.crc2.fillRect(0, 0, Feuerwerksimulator.canvas.width, Feuerwerksimulator.canvas.height);
        explosions.forEach((explosion, index) => {
            // Entferne die Rakete, wenn die Lebenszeit vorbei ist
            if (explosion.lifetime == 0) {
                explosions.splice(index, 1);
                index--;
            }
            else {
                explosion.draw();
            }
        });
    }
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=script.js.map