import { Schema, model, Model } from "mongoose";
import { IUsers } from "../../IUsers";

const UserSchema = new Schema({
  id: { type: Number, unique: true },
  name: String,
  email: String,
  password: String,
  transactions: [{ type: Schema.Types.ObjectId, ref: "Transactions" }],
});

const User: Model<IUsers> = model("User", UserSchema);

export { User };
