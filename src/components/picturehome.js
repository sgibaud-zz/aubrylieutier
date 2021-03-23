import React from 'react';
import { Container } from 'react-bootstrap';

export default class Picture extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <img className='img-home' src='http://aubrylieutier.draconic-graphisme.com/images/home/accueil_5.png' alt='' />
                    <div>
                        <h4><span>thierry</span> aubry</h4>
                        <h4><span>vincent</span> lieutier</h4>
                    </div>
                </Container>
            </>
        )
    }
}