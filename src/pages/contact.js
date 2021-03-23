import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header';
import Navbars from '../components/navbar';
import PageContact from '../components/contact';
import NavbarSide from '../components/navbarside';

export default class Contact extends React.Component {
    render() {
        return (
            <>
                <Container className='container-width'>
                    <Header className='navbar-brand' />
                    <NavbarSide className='menu-overlay' />
                    <PageContact />
                    <Navbars />
                </Container>
            </>
        )
    }
}