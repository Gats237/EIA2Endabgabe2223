namespace Feuerwerksimulator {

    export abstract class Moveable {
    
    position: Vector;
    velocity: Vector;
    lifetime: number;

    conscstructor(_position: Vector, _velocity: Vector, _lifetime: number) {
        this.position = _position;
        this.velocity = _velocity;
        this.lifetime = _lifetime;
    }

    move(_timeslice: number): void {
        let offset: Vector = new Vector.copy();
        offset.scale(_timeslice);
        this.position.add(offset);
        this.lifetime -= _timeslice;



    }
    }

}