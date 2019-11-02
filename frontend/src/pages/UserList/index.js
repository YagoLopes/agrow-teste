import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

import Nav from "../../components/nav";

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');

      setUsers(response.data);
    }

    loadUsers()
  }, []);

  return (
    <>
    <Nav/>
    <Container>
      <div>
      
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>
          { users.map(user => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <Link to={`/users/edit/${user._id}`}>Editar</Link>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <Link to="/users/create">Criar usuário</Link>
      </div>
    </Container>
    </>
  );
}