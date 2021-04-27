import { Document } from "mongoose";
import { ITransactions } from "../../transactions/repositories/ITransactions";

export interface IUser extends Document {
  id: String;
  name: String;
  email: String;
  password: String;
  transactions?: Array<ITransactions>;
}
