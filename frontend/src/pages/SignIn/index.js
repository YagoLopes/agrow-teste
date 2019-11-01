import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { Container } from "./styles";
import api from "../../services/api";
import {setToken} from "../../services/auth";

import logo from "../../assets/img/logo.png";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido.")
    .required("O e-mail é obrigatório."),
  password: Yup.string().required("A senha é obrigatória.")
});

export default function SignIn({history}) {
 async function handleSubmit({ email, password }) {
    try {
      const response = await api.post("session", { email, password });
      await setToken(response.data._id);
      history.push("/main");
    } catch (error) {
      alert.error("Usuário ou senha ivalida!!");
    }
  }

  return (
    <Container>
      <main>
        <img src={logo} alt="GoBarber" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />

          <button type="submit">Acessar</button>
        </Form>
      </main>
    </Container>
  );
}