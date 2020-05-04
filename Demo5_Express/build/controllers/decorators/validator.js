"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetaDataKeys_1 = require("./MetaDataKeys");
function validator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, descrip) {
        Reflect.defineMetadata(MetaDataKeys_1.MetadataKeys.Validator, keys, target, key);
    };
}
exports.validator = validator;
