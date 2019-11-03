import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { styles, Container } from './styles';
import { logout, getName } from '../../services/auth';
import { FaSignOutAlt, FaCheck } from 'react-icons/fa';

export default function Nav() {


    return (
        <Menu styles={styles}>
            <Container>
                <ul>
                    <li>
                        <strong>{getName()}</strong>
                    </li>
                    <li>
                        <Link to="/demands" title="Listar Chamados" > <FaCheck /> Chamados</Link>
                    </li>


                </ul>
                <a id="sair" onClick={logout} title="Finalizar Seção" >
                    <FaSignOutAlt/>   Sair
      </a>
            </Container>
        </Menu>
    );
}
