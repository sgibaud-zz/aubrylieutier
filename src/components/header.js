import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavbarSide from './navbarside';


export default class Header extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <h1 className='title-home'>aubry lieutier architectes <span>d.p.l.g.</span></h1>                  
                </Container>
            </>
        )
    }
}