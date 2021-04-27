import { Schema, model, Model } from "mongoose";
import { ITransactions } from "../../ITransactions";

const TransactionsSchema = new Schema({
  id: { type: String, unique: true },
  title: String,
  type: { type: String, enum: ["withdraw", "deposit"] },
  category: String,
  amount: Number,
  createdAt: Date,
});

const Transactions: Model<ITransactions> = model(
  "Transactions",
  TransactionsSchema
);

export { Transactions };
