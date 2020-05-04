"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetaDataKeys_1 = require("./MetaDataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, descrip) {
            Reflect.defineMetadata(MetaDataKeys_1.MetadataKeys.Path, path, target, key);
            Reflect.defineMetadata(MetaDataKeys_1.MetadataKeys.Method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
