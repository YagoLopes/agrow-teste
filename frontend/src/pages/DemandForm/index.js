import React, { useState, useEffect } from 'react';
import { Form, Input, Textarea } from 'unform';
import * as Yup from 'yup';
import api from '../../services/api';
import Nav from '../../components/nav';

import { Container } from './styles';
import { getName } from '../../services/auth';

const schema = Yup.object().shape({
    description: Yup.string().required('Descrição é obrigatório'),
    requester: Yup.string().required('Requisitante é obrigatória'),
    client: Yup.string().required('Clente é obrigatória'),
    limit: Yup.string().required('Data limite é obrigatória'),
});

export default function DemandForm({ history, match, }) {
    const [data, setData] = useState({});
    async function handleSubmit(data) {
        const { description, requester, client, limit } = data;
        const author = getName();
        await api.postOrPut('/demands', match.params.id, { author, description, requester, client, limit });

        history.push('/demands');
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
                <header>{ history.location.pathname === "/demands/create" ?  "NOVO CHAMADO":  "ALTERAR" }</header>
                <main>
                    <Form schema={schema} initialData={data} onSubmit={handleSubmit}>
                        <Input name="client" label="Cliente" />
                        <Input name="requester" label="Solicitante" />
                        <Textarea name="description" label="Descrição" />
                        <Input name="limit" type="datetime-local" label="Data limite" />
                        <button type="submit">Enviar</button>
                        <button
                            className="voltar"
                            onClick={() => history.push('/demands')}
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
