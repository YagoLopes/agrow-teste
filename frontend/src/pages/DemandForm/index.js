import React, { useState, useEffect } from "react";
import { Form, Input } from "unform";
import * as Yup from "yup";
import api from "../../services/api";
import Nav from "../../components/nav";

import { Container } from "./styles";

const schema = Yup.object().shape({
  description: Yup.string().required("Descrição é obrigatório"),
  requester: Yup.string().required("Requisitante é obrigatória"),
  client: Yup.string().required("Clente é obrigatória"),
  limit: Yup.string().required("Data limite é obrigatória"),
  author: Yup.string().required("O Responsavel é obrigatória")
});

export default function DemandForm({ history, match }) {
  const [data, setData] = useState({});

  async function handleSubmit(data) {
    await api.postOrPut("/demands", match.params.id, data);

    history.push("/demands");
  }

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/demands/${id}`);

      setData(response.data);
    }

    if (match.params.id) {
      loadData();
    }
  }, [match.params, match.params.id]);

  return (
    <>
      <Nav />
      <Container>
        <main>
          <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
            <Input name="client" label="Cliente" />
            <Input name="author" label="Atendente" />
            <Input name="requester" label="Solicitante" />
            <Input name="description" label="Descrição" />
            <Input name="limit" type="datetime-local" label="Data limite" />
            <button type="submit">Enviar</button>
            <button
              className="voltar"
              onClick={() => history.push("/demands")}
              type="button"
            >
              Cancelar
            </button>
          </Form>
        </main>
      </Container>
    </>
  );
}
