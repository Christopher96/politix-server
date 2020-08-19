import { Schema } from "mongoose";
import { setLastUpdated } from "./users.methods";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.methods.setLastUpdated = setLastUpdated;

export default UserSchema;
