"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    class Rakete {
        RocketName;
        favcolor;
        Radius;
        LifetimeSlider;
        ParticleSlider;
        x;
        y;
        constructor(RocketName, favcolor, Radius, LifetimeSlider, ParticleSlider, x, y) {
            this.RocketName = RocketName;
            this.favcolor = favcolor;
            this.Radius = Radius;
            this.LifetimeSlider = LifetimeSlider;
            this.ParticleSlider = ParticleSlider;
            this.x = x;
            this.y = y;
            draw();
            ocapacity();
        }
    }
    Feuerwerksimulator.Rakete = Rakete;
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Explosive.js.map