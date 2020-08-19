import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import HTTPMethod from "../lib/HTTPMethod";

export default interface IRoute {
  method: HTTPMethod;
  path: string;
  next?: (req: any, res: any, next: any) => void;
  callback(
    req: Request<ParamsDictionary>,
    res: Response<any>,
    next?: NextFunction
  ): void;
}
