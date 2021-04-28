import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container } from "./styles";
import { useTransactions } from "../hooks/useTransactions";

interface AuthenticatedModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function AuthenticatedModal({
  isOpen,
  onRequestClose,
}: AuthenticatedModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleAuthentication } = useTransactions();

  async function handleSubmitAuthenticateUser(event: FormEvent) {
    event.preventDefault();

    function validateEmail(email: string) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    const emailValidate = validateEmail(email);

    if (!emailValidate) {
      return toast.error("Email inválido");
    }

    handleAuthentication({ email, password });

    setEmail("");
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
        <Container onSubmit={handleSubmitAuthenticateUser}>
          <h2>Autenticar Usuario</h2>

          <input
            type="e-mail"
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

          <button type="submit">Authenticar</button>
        </Container>
      </Modal>
    </div>
  );
}
