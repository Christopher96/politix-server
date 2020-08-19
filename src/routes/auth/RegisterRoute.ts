import { Response, Request, NextFunction } from "express";

import IRoute from "../IRoute";
import HTTPMethod from "../../lib/HTTPMethod";
import { verifyToken } from "../../middleware/jwt";
import { UserModel } from "../../database/users/users.model";
import { IUserDocument } from "../../database/users/users.types";

interface AuthRequest extends Request {
  user: IUserDocument;
}

export default class RegisterRoute implements IRoute {
  method = HTTPMethod.GET;
  path = "/auth/register";
  // next = verifyToken;

  callback(req: AuthRequest, res: Response<any>, next: NextFunction) {
    return res.status(200).send("hi");
    // const { username } = req.body;

    // try {
    //   await UserModel.findOne({ username });

    //   let user = new UserModel(req.body);
    //   try {
    //     let savedUser = await user.save();
    //     req.user = savedUser;
    //     next();
    //   } catch (e) {
    //     res.status(500).send(e);
    //   }
    // } catch (e) {
    //   res.status(401).send(`User '${req.body.username}' already exists`);
    // }
  }
}
