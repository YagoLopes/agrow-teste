import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { Container } from "./styles";

import logo from "../../assets/img/logo.png";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido.")
    .required("O e-mail é obrigatório."),
  password: Yup.string().required("A senha é obrigatória.")
});

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.log({ email, password });
  }

  return (
    <Container>
      <main>
        <img src={logo} alt="GoBarber" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />

          <button type="submit">Acessar</button>
          <Link to="/register">Criar conta gratuita</Link>
        </Form>
      </main>
    </Container>
  );
}
