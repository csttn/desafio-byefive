import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./styles";
import { useTransactions } from "../hooks/useTransactions";

interface CreateUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateUserModal({
  isOpen,
  onRequestClose,
}: CreateUserModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { handleCreateUser } = useTransactions();

  async function handleSubmitCreateUser(event: FormEvent) {
    event.preventDefault();

    function validateEmail(email: string) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    const emailValidate = validateEmail(email);

    if (!emailValidate) {
      return toast.error("Email inválido");
    }

    handleCreateUser({ email, password, name });
    setEmail("");
    setName("");
    setPassword("");

    onRequestClose();
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        closeTimeoutMS={1000}
      >
        <ToastContainer />
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        ></button>
        <Container onSubmit={handleSubmitCreateUser}>
          <h2>Criar Usuario</h2>

          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </div>
  );
}
