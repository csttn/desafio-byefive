import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./components/hooks/useTransactions";
import { AuthenticatedModal } from "./components/AutehenticatedUserModal/index";
import { CreateUserModal } from "./components/CreateUserModal/index";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  const [isAuthenticationModalOpen, setIsAuthenticationModalOpen] = useState(
    false
  );
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);

  function handleOpenCreateUserModal() {
    setIsCreateUserModalOpen(true);
  }

  function handleCloseCreateUserModal() {
    setIsCreateUserModalOpen(false);
  }

  function handleOpenAuthenticatedModal() {
    setIsAuthenticationModalOpen(true);
  }

  function handleCloseAuthenticatedModal() {
    setIsAuthenticationModalOpen(false);
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header
        onOpenTransactionNewModal={handleOpenNewTransactionModal}
        onOpenAuthenticatedModal={handleOpenAuthenticatedModal}
        onOpenCreateUserModal={handleOpenCreateUserModal}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <AuthenticatedModal
        isOpen={isAuthenticationModalOpen}
        onRequestClose={handleCloseAuthenticatedModal}
      />

      <CreateUserModal
        isOpen={isCreateUserModalOpen}
        onRequestClose={handleCloseCreateUserModal}
      />
    </TransactionProvider>
  );
}
