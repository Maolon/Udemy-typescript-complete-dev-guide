"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumberCollections = /** @class */ (function (_super) {
    __extends(NumberCollections, _super);
    function NumberCollections(collection) {
        var _this = _super.call(this) || this;
        _this.collection = collection;
        _this.length = collection.length;
        return _this;
    }
    NumberCollections.prototype.compare = function (a, b) {
        if (a > b)
            return 1;
        else if (a === b)
            return 0;
        else
            return -1;
    };
    NumberCollections.prototype.swap = function (i, j) {
        if (!this.isIndexValid(i) || !this.isIndexValid(j))
            throw new Error("Invalid Index: swap(" + i + "," + j + ")");
        var tmp = this.collection[i];
        this.collection[i] = this.collection[j];
        this.collection[j] = tmp;
    };
    NumberCollections.prototype.get = function (i) {
        if (!this.isIndexValid(i))
            throw new Error("Invalid Index: get(" + i + ")");
        return this.collection[i];
    };
    NumberCollections.prototype.getCollection = function () {
        return this.collection;
    };
    NumberCollections.prototype.print = function () {
        console.log(this.collection);
    };
    NumberCollections.prototype.isIndexValid = function (i) {
        if (i >= 0 && i < this.length)
            return true;
        else
            return false;
    };
    return NumberCollections;
}(Sorter_1.Sorter));
exports.NumberCollections = NumberCollections;
