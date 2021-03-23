import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbars extends React.Component {
    /* defaultActiveKey="/home" */

    render() {
        return (
            <>
                <Container>
                    <Nav className="flex-column display-nav" collapseOnSelect>
                        <NavLink exact to='/'>accueil</NavLink>
                        <NavLink to='/projets'>réalisations</NavLink>
                        <NavLink to='/concours'>concours</NavLink>
                        <NavLink to='/communications'>communications</NavLink>
                        <NavLink to='/contact'>contact</NavLink>
                        <NavLink to='/mention'>mentions légales</NavLink>
                    </Nav>
                </Container>
            </>
        )
    }
}