import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Slide from '../components/slide';
import Header from '../components/header';
import Navbars from '../components/navbar';
import ModalSlide from '../components/modal';
import NavbarSide from '../components/navbarside';


export default class Concours extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            concours: '',
            show: false,
            id: []
        }
    }

    componentDidMount = () => {
        fetch('https://aubrylieutier-d5b0d-default-rtdb.firebaseio.com/concours.json')
            .then(resp => resp.json())
            .then(data => this.setState({ concours: data }));
    }

    handleOpenModal(concours) {
        this.setState({ show: true, id: concours.images });
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

        const { concours } = this.state;
        return (
            <>
                <Container fluid='md'>
                    <Header className='navbar-brand' />
                    <NavbarSide className='menu-overlay' />

                    <Container>
                        <Slider {...settings}>
                            {
                                concours !== '' &&
                                concours
                                    .map((m) =>
                                        <Slide slide={m}
                                            onSlideChange={(concour) => this.handleOpenModal(concour)} />
                                    )
                            }
                        </Slider>
                    </Container>

                    <Navbars />

                    <ModalSlide
                        show={this.state.show}
                        onHide={this.handleCloseModal}
                        id={this.state.id}
                    />
                </Container>
            </>
        )
    }
}