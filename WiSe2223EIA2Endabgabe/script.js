"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    window.addEventListener("load", async (params) => {
    }, handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        // Aufruf der Funktionen
        Feuerwerksimulator.canvas = document.getElementById("canvas");
        Feuerwerksimulator.crc2 = Feuerwerksimulator.canvas.getContext("2d");
        // danach internal size zu match schicken
        Feuerwerksimulator.canvas.width = Feuerwerksimulator.canvas.offsetWidth;
        Feuerwerksimulator.canvas.height = Feuerwerksimulator.canvas.offsetHeight;
        Feuerwerksimulator.canvas.addEventListener("click", readProperties);
    }
    let explosives = [];
    let RocketName;
    let color;
    let Radius;
    let LifetimeSlider;
    let ParticleSlider;
    let moveables = [];
    // Ausgegebener Wert des Formdata
    let settings = [];
    // Racketeninterface
    //Eventlistener für Canvas
    // Funktionen
    function readProperties(_event) {
        let formData = new FormData(document.forms[0]);
        let rect = Feuerwerksimulator.canvas.getBoundingClientRect();
        let x = _event.clientX - rect.left;
        let y = _event.clientY - rect.top;
        console.log(x, y);
        Feuerwerksimulator.crc2.save();
        Feuerwerksimulator.crc2.beginPath();
        Feuerwerksimulator.crc2.arc(x, y, 10, 0, 2 * Math.PI);
        Feuerwerksimulator.crc2.fillStyle = "favcolor";
        Feuerwerksimulator.crc2.fill();
        Feuerwerksimulator.crc2.closePath();
        Feuerwerksimulator.crc2.restore();
        console.log("X: " + x + "Y: " + y);
        for (let entry of formData) {
            let RocketName = String(formData.get("RocketName"));
            let color = String(formData.get("favcolor"));
            let Radius = String(formData.get("Radius"));
            let lifetime = String(formData.get("lifetime"));
            let partikelanzahl = String(formData.get("partikelanzahl"));
        }
        Firework.push(new Feuerwerksimulator.Rakete(RocketName, color, Radius, LifetimeSlider, ParticleSlider, x, y));
    }
    //function Particlesystem
    // Particle erstellen
    function createParticle(_quantity, _size, _mousePositionX, _mousePositionY, _color, _luminance, _duration, _type) {
        let origin = new Feuerwerksimulator.Vector(_mousePositionX, _mousePositionY);
        let color = _color;
        let radian = (Math.PI * 2) / _quantity;
        for (let i = 0; i < _quantity; i++) {
            let px;
            let py;
            let velocity;
            let particle;
            if (i % 2 == 0) {
                px = Math.cos(radian * i) * 150 + Math.random() * 20;
                py = Math.sin(radian * i) * 150 + Math.random() * 20;
            }
            else {
                px = Math.cos(radian * i) * 110 * Math.random() * 2;
                py = Math.sin(radian * i) * 110 * Math.random() * 2;
            }
            velocity = new Feuerwerksimulator.Vector(px, py);
            particle = new Particle(origin, velocity, color, Radius, LifetimeSlider);
            moveables.push(particle);
        }
    }
    //Rakete starten 
    function setBackground() {
        Feuerwerksimulator.crc2.save();
        Feuerwerksimulator.crc2.fillStyle = "black";
        Feuerwerksimulator.crc2.fillRect(0, 0, Feuerwerksimulator.canvas.width, Feuerwerksimulator.canvas.height);
        Feuerwerksimulator.crc2.restore();
    }
    //Event Listener für Mouseposition 
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=script.js.map