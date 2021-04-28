import React from "react";
import logoImg from "../../assets/logo.svg";
import { useTransactions } from "../hooks/useTransactions";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenTransactionNewModal: () => void;
  onOpenAuthenticatedModal: () => void;
  onOpenCreateUserModal: () => void;
}

export function Header({
  onOpenTransactionNewModal,
  onOpenAuthenticatedModal,
  onOpenCreateUserModal,
}: HeaderProps) {
  const { tokenUser, handleLogout } = useTransactions();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="money" />
        <div>
          {tokenUser ? (
            <>
              <button type="button" onClick={onOpenTransactionNewModal}>
                Nova transação
              </button>
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={onOpenCreateUserModal}>
                Criar usuário
              </button>
              <button type="button" onClick={onOpenAuthenticatedModal}>
                Autenticar
              </button>
            </>
          )}
        </div>
      </Content>
    </Container>
  );
}
