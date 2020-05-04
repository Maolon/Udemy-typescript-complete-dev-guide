"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// a quicksorter, able to sorting numbers string(in alphabet)
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        this.qsort(0, this.length - 1);
    };
    Sorter.prototype.qsort = function (lo, hi) {
        if (lo < hi) {
            var pi = this.partition(lo, hi);
            this.qsort(lo, pi - 1);
            this.qsort(pi + 1, hi);
        }
    };
    Sorter.prototype.partition = function (lo, hi) {
        var pivot = this.get(hi);
        var i = lo - 1;
        try {
            for (var j = lo; j < hi; j++) {
                if (this.compare(this.get(j), pivot) == -1) {
                    i++;
                    this.swap(i, j);
                }
            }
            this.swap(i + 1, hi);
        }
        catch (err) {
            console.log(err);
        }
        return i + 1;
    };
    return Sorter;
}());
exports.Sorter = Sorter;
