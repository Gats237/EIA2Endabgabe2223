"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    class Explosion extends Feuerwerksimulator.Moveable {
        particles;
        // Erstellen von particle
        constructor(_mousePosition, _particleAmount, _color, _size, _lifetime) {
            super(_mousePosition, new Feuerwerksimulator.Vector(0, 0), _lifetime);
            this.particles = [];
            for (let i = 0; i < _particleAmount; i++) {
                // kreieren eine zufällige velocity für jeden Partikel
                let particleVelocity = new Feuerwerksimulator.Vector((Math.random()) * 10, (Math.random()) * 10);
                // Hier werden alle Partikel dieser Explosion erstellt und die Lebenszeit zufällig kleiner als die der Rakete gehalten
                this.particles.push(new Feuerwerksimulator.Particle(_mousePosition, particleVelocity, _color, _size, _lifetime - Math.random() * this.lifetime));
            }
        }
        draw() {
            // Hier wird die Rakete noch visuell dargestellt
        }
    }
    Feuerwerksimulator.Explosion = Explosion;
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Explosion.js.map