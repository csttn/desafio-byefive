import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { Transactions } from "../../repositories/implementations/schemas/TransactionsSchema";

import { v4 as uuidV4 } from "uuid";
import { User } from "../../../users/repositories/implementations/schemas/UserSchema";

async function CreateTransactionUseCase({
  amount,
  category,
  title,
  type,
  user_id,
}: ICreateTransactionDTO) {
  //buscar usuario para injetar transaction na lista dele
  const _id = user_id;

  const user = await User.findById(_id).exec();

  //criar trasnactio
  const transaction = new Transactions();

  transaction.id = uuidV4();
  transaction.title = title;
  transaction.category = category;
  transaction.type = type;
  transaction.amount = amount;
  transaction.createdAt = new Date();

  // salvando trasnaction
  await transaction.save();

  // adicionando referencia da transaction ao usuario
  user.transactions.push(transaction);

  await user.save();
}

export { CreateTransactionUseCase };
