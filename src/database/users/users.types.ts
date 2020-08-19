import { Document, Model } from "mongoose";
import { IUser } from "../../../interfaces";

export interface IUserDocument extends IUser, Document {
  setLastUpdated: (this: IUserDocument) => Promise<void>;
}

export interface IUserModel extends Model<IUserDocument> {}
