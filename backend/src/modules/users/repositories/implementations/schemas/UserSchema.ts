import { Schema, model, Model } from "mongoose";
import { IUser } from "../../IUser";

const UserSchema = new Schema({
  id: { type: String, unique: true },
  name: String,
  email: String,
  password: String,
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transactions" }],
});

const User: Model<IUser> = model("User", UserSchema);

export { User };
