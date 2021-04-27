export interface ICreateTransactionDTO {
  title: string;
  type: "withdraw" | "deposit";
  category: string;
  amount: number;
  user_id: string;
}
