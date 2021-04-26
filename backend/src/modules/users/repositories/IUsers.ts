import { Document } from "mongoose";
import { ITransactions } from "../../transactions/repositories/ITransactions";

export interface IUsers extends Document {
  id: Number;
  name: String;
  email: String;
  password: String;
  transactions?: Array<ITransactions>;
}
