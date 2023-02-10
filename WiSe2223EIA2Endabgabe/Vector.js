"use strict";
var Feuerwerksimulator;
(function (Feuerwerksimulator) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Feuerwerksimulator.Vector = Vector;
})(Feuerwerksimulator || (Feuerwerksimulator = {}));
//# sourceMappingURL=Vector.js.map