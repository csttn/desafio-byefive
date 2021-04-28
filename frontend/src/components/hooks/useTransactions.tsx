import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
interface UserInput {
  name: string;
  email: string;
  password: string;
}

interface AuthenticationInput {
  email: string;
  password: string;
}

interface IResponseAuthenticated {
  userInfo: {
    userTransactions: {
      transactions: [];
    };
    _id: string;
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

interface TransactionsContextProps {
  transactions: TransactionItemProps[];
  createTransaction: (trasaction: TransactionInput) => Promise<void>;
  handleAuthentication: (userAuth: AuthenticationInput) => Promise<void>;
  handleCreateUser: (UserData: UserInput) => Promise<void>;
  tokenUser: string;
  handleLogout: () => void;
}

const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionItemProps[]>([]);
  const [tokenUser, setTokenUser] = useState("");

  useEffect(() => {
    console.log(tokenUser);
  }, [tokenUser]);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", transactionInput, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
        "Access-Control-Allow-Origin": "*",
      },
    });

    const transaction = response.data;

    setTransactions([...transactions, transaction]);
  }

  async function handleAuthentication({
    email,
    password,
  }: AuthenticationInput) {
    try {
      const response = await api.post<IResponseAuthenticated>("/sessions", {
        email,
        password,
      });

      const { token, userInfo } = response.data;
      const { userTransactions } = userInfo;

      localStorage.setItem("tokenUser", JSON.stringify(token));

      console.log(userTransactions.transactions, token);

      setTokenUser(token);

      setTransactions(userTransactions.transactions);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    localStorage.clear();
    setTokenUser("");
    setTransactions([]);
  }

  async function handleCreateUser({ name, email, password }: UserInput) {
    try {
      const response = await api.post(
        "/users/create",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      toast(response.statusText);
    } catch (e) {
      toast.error(e);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        handleAuthentication,
        handleCreateUser,
        tokenUser,
        handleLogout,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
