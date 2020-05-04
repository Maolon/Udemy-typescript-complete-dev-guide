import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetaDataKeys";
import { Request, Response, NextFunction, RequestHandler } from "express";

function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("!Invalid request");
      return;
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Property ${key} Cannot be Null`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      
      const routeHandler = target.prototype[key];
      
      const path = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key);
      
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        key
      );
      
      const middlewares =
        Reflect.getMetadata(MetadataKeys.MiddleWare, target.prototype, key) ||
        [];
      
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) || [];

      const validator = bodyValidators(requiredBodyProps)

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  };
}
