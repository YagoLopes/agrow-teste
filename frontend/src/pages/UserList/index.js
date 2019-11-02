import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container } from './styles';

import Nav from "../../components/nav";

export default function UserList() {
  const [users, setUsers] = useState([])


  useEffect(() => {
 

    loadUsers()
  }, []);

  async function loadUsers() {
    const response = await api.get('/users');

    setUsers(response.data);
  }

  async function destroy(id) {
    await api.delete(`/users/${id}`);
    loadUsers();
  }


  return (
    <>
    <Nav/>
    <Container>
    <div>
        {users.map((user) => {
          return <article key={user._id}>
            <img src={user.avatar_url} alt={user.name} />
<strong>{user.name}</strong>
<p>{user.email}</p>
<Link to={`/users/edit/${user._id}`}>Editar</Link>
<a className="destroy" onClick={()=>{destroy(user._id)}} >Excluir</a>

          </article>
                 
        })}
        </div>
    </Container>
    </>
  );
}