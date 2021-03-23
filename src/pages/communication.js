import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Slide from '../components/slide';
import Header from '../components/header';
import Navbars from '../components/navbar';
import ModalCom from '../components/modalcom';
import NavbarSide from '../components/navbarside';

export default class Communications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            communications: '',
            show: false,
            id: []
        }
    }

    componentDidMount = () => {
        fetch('https://aubrylieutier-d5b0d-default-rtdb.firebaseio.com/communications.json')
            .then(resp => resp.json())
            .then(data => this.setState({ communications: data }));
    }

    handleOpenModal(communications) {
        this.setState({ show: true, id: communications.images });
    }

    handleCloseModal = () => {
        this.setState({ show: false });
    }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 900,
            slidesToShow: 5,
            slidesToScroll: 4,
            cssEase: 'ease-in-out',
            initialSlide: 0,
            vertical: true,
            draggable: true,
            verticalSwiping: true,    
        };

        const { communications } = this.state;
        return (
            <Container fluid='md'>
                <Header className='navbar-brand' />
                <NavbarSide className='menu-overlay' />
                <Container>
                    <Slider {...settings}>
                        {
                            communications !== '' &&
                            communications
                                .map((m) =>
                                    <Slide slide={m}
                                        onSlideChange={(communication) => this.handleOpenModal(communication)} />
                                )
                        }
                    </Slider>
                </Container>

                <Navbars />

                <ModalCom
                    show={this.state.show}
                    onHide={this.handleCloseModal}
                    id={this.state.id}
                />

            </Container>

        )
    }
}