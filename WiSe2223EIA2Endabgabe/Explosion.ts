namespace    Feuerwerksimulator {

    export class Explosion extends Moveable {
        particles: Particle[];

        // Erstellen von particle
        constructor(_mousePosition: Vector, _particleAmount: number, _color: string, _size: number, _lifetime: number) {
            super(_mousePosition, new Vector(0, 0), _lifetime);

            this.particles = [];
            for (let i: number = 0; i < _particleAmount; i++) {
                // kreieren eine zufällige velocity für jeden Partikel
                let particleVelocity: Vector = new Vector((Math.random()) * 10, (Math.random()) * 10);
                // Hier werden alle Partikel dieser Explosion erstellt und die Lebenszeit zufällig kleiner als die der Rakete gehalten
                this.particles.push(new Particle(_mousePosition, particleVelocity, _color, _size, _lifetime - Math.random() * this.lifetime));
            }
        }

        draw(): void {
            // Hier wird die Rakete noch visuell dargestellt
        }
    }