import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";
import axios from "axios";

export interface TransactionItemProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionInput {
  title: string;
  type: string;
  category: string;
  amount: number;
}

interface TransactionsContextProps {
  transactions: TransactionItemProps[];
  createTransaction: (trasaction: TransactionInput) => Promise<void>;
  token: string;
}

const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionItemProps[]>([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3333/transactions/`,
      headers: {
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk1NDk2MzUsImV4cCI6MTYxOTYzNjAzNSwic3ViIjoiNjA4ODVkYjVmM2JjNmEwMmU1ZGVkNWVhIn0.u3kCpI-MhfDjVYqnUnISdi6Jt8Pc2F2OFdzzly9Pfx4`,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err with mailchimp request", err);
      });

    // api.get("/transactions").then(({ data }) => console.log(data));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, token }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
