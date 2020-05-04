import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetaDataKeys";
import { RequestHandler } from "express";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, descrip: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(
          MetadataKeys.MiddleWare,
          target,
          key) || [];
    
    Reflect.defineMetadata(
        MetadataKeys.MiddleWare,
        [...middlewares,middleware],
        target,
        key
    );

  };
}
