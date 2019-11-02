import React from "react";
import { bubble as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import {styles, List } from "./styles";
import {logout} from "../../services/auth";


export default function Nav() {

  function handleLogout(){
    logout();  
  }

  return (
    <Menu styles={styles}>
     <List>
     <li><Link to="/main">Dashboard</Link></li>
 
   <li><Link to="/demands">Demandas</Link></li>
   <li><Link to="/demands/create">Nova Demanda</Link></li>
   <li><Link to="/users">Usuários</Link></li>
   <li><Link to="/users/create">Novo Usuário</Link></li>
    </List>
    <button type="button" onClick={handleLogout} >Sair</button>
  </Menu>
  );
}
