"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
//Composition Approach to MatchReader
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.data = [];
    }
    MatchReader.prototype.read = function () {
        var _this = this;
        this.reader.read();
        var data = this.reader.data;
        data.map(function (row) {
            _this.data.push([
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ]);
        });
    };
    MatchReader.prototype.get = function () {
        return this.data;
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
