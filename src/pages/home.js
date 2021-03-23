import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header';
import Navbars from '../components/navbar';
import NavbarSide from '../components/navbarside';
import Picture from '../components/picturehome';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Container fluid='md'>
                    <Header className='navbar-brand' />
                    <NavbarSide className='menu-overlay' />
                    <Picture />
                    <Navbars />
                </Container>
            </>
        )
    }
}