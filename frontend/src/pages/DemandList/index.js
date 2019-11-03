import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import api from '../../services/api';
import 'moment-timezone';
import { FaPlus } from 'react-icons/fa';

import { Container } from './styles';

import Nav from '../../components/nav';

export default function DemandsList() {
  const [demands, setDemands] = useState([]);

  useEffect(() => {
    loadDemands();
  }, []);

  async function loadDemands() {
    const response = await api.get('/demands');

    setDemands(response.data);
  }

  async function destroy(id) {
    await api.delete(`/demands/${id}`);
    loadDemands();
  }

  return (
    <>
      <Nav />

      <Container>

      <header>CHAMADOS</header>

     <div>
          {demands.map((demand) => (
            <article key={demand._id}>
              <strong>{demand.client}</strong>
              <span>
                {' '}
Atendente:
                {demand.author}
              </span>
              <span>
                {' '}
Solicitante:
                {demand.requester}
              </span>
              <span>
                  Entregar até:
                {' '}
                <Moment format="YYYY/MM/DD HH:mm">{demand.limit}</Moment>
              </span>
              <span>
                  Criado em:
                {' '}
                <Moment format="YYYY/MM/DD HH:mm">{demand.createdAt}</Moment>
              </span>
              <p>{demand.description}</p>
              <Link to={`/demands/edit/${demand._id}`} title="Editar dados do chamado"   >Editar</Link>
              <a
                className="destroy"
                title="Excluir chamado"
                onClick={() => {
                  destroy(demand._id);
                }}
              >
                  Excluir
              </a>
            </article>
          ))}
        </div>
        <Link id="new" to="/demands/create" title="Adicionar novo chamado" ><FaPlus/></Link>
      </Container>
    </>
  );
}
