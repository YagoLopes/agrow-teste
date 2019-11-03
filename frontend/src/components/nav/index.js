import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { styles, List } from "./styles";
import { logout } from "../../services/auth";

export default function Nav({ history }) {
  function handleLogout() {
    logout();
    history.pushState("/");
  }

  return (
    <Menu styles={styles}>
      <List>
        <li>
          <strong>Yago Lopes</strong>
        </li>
        <li>
          <Link to="/demands">Pendentes</Link>
        </li>
        <li>
          <Link to="/demands/create">Adicionar</Link>
        </li>
      </List>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Menu>
  );
}
