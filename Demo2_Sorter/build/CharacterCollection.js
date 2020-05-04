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
var CharacterCollections = /** @class */ (function (_super) {
    __extends(CharacterCollections, _super);
    function CharacterCollections(collection) {
        var _this = _super.call(this) || this;
        _this.collection = collection;
        _this.length = collection.length;
        return _this;
    }
    CharacterCollections.prototype.compare = function (a, b) {
        if (a.toLowerCase() > b.toLowerCase() ||
            (a.toLowerCase() === b.toLowerCase() && a < b))
            return 1;
        else if (a === b)
            return 0;
        else
            return -1;
    };
    CharacterCollections.prototype.swap = function (i, j) {
        if (!this.isIndexValid(i) || !this.isIndexValid(j))
            throw new Error("Invalid Index");
        var characters = this.collection.split("");
        var tmp = characters[i];
        characters[i] = characters[j];
        characters[j] = tmp;
        this.collection = characters.join("");
    };
    CharacterCollections.prototype.get = function (i) {
        if (!this.isIndexValid(i))
            throw new Error("Invalid Index");
        return this.collection.charAt(i);
    };
    CharacterCollections.prototype.isIndexValid = function (i) {
        if (i >= 0 && i < this.length)
            return true;
        else
            return false;
    };
    CharacterCollections.prototype.getCollection = function () {
        return this.collection;
    };
    CharacterCollections.prototype.print = function () {
        console.log(this.collection);
    };
    return CharacterCollections;
}(Sorter_1.Sorter));
exports.CharacterCollections = CharacterCollections;
