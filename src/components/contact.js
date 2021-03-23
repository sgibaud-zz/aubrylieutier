import React from 'react';
import { Container } from 'react-bootstrap';

export default class PageContact extends React.Component {
    render() {
        return (
            <Container className='container-contact'>
                <h4>Agence</h4>
                <h4>aubry lieutier architectes</h4>
                <p className='contact'>4, rue de l’Industrie - 67560 Rosheim<br />
                    tél: +33 88 35 55 54<br />
                    <a className='mail' href='mailto:aubrylieutier@aubrylieutier.com'>aubrylieutier@aubrylieutier.com</a></p>
            </Container>
        )
    }
}