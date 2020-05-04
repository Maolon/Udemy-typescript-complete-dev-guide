import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetaDataKeys";
import { RequestHandler } from "express";

export function validator(...keys: string[]) {
  return function (target: any, key: string, descrip: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
    
  };
}
