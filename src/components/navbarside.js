import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavbarSide extends React.Component {
    /* defaultActiveKey="/home" */

    render() {
        return (
            <>
                <Navbar expand="lg md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav>
                            <NavLink exact to='/'>accueil</NavLink>
                            <NavLink to='/projets'>réalisations</NavLink>
                            <NavLink to='/concours'>concours</NavLink>
                            <NavLink to='/communications'>communications</NavLink>
                            <NavLink to='/contact'>contact</NavLink>
                            <NavLink to='/mention'>mentions légales</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}