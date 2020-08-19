import express, { Router } from "express";

import IRoute from "./IRoute";
import RegisterRoute from "./auth/RegisterRoute";

export default class API {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  public get() {
    return this.router;
  }

  private registerRoutes() {
    this.register(new RegisterRoute());
  }

  private register(route: IRoute) {
    const { method, path, next } = route;
    console.debug("You have added a new route", method, path);

    if (next != null) {
      return this.router[method.toLowerCase()](path, route.callback, next);
    } else {
      return this.router[method.toLowerCase()](path, route.callback);
    }
  }
}
