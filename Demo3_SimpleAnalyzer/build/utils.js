"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
exports.dateStringToDate = function (dateString) {
    //28/10/2018
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        try {
            this.data = fs_1.default
                .readFileSync(this.filename, {
                encoding: "utf-8"
            })
                .split("\n")
                .map(function (row) {
                return row.split(",");
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    CsvFileReader.prototype.get = function () {
        return this.data;
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
