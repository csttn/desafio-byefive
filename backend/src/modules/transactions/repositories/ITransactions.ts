import { Document } from "mongoose";

export interface ITransactions extends Document {
  id: String;
  title: String;
  type: "withdraw" | "deposit";
  category: String;
  amount: Number;
  createdAt: Date;
}
