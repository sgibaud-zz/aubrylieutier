import React from 'react';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';


export default class ModalSlide extends React.Component {
    render() {
        const { show, onHide, id } = this.props;

        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slideToScroll: 2,
            initialeState: 0,
            speed: 350,
            cssEase: 'ease-in-out',
            initialSlide: 0,
            vertical: true,
            draggable: true,
            verticalSwiping: true,
            adaptativeHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        draggable: true,
                    }
                }
            ]
        };

        return (

            <Modal
                show={show}
                onHide={onHide}
                animation={true}
                size="lg">
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body>
                    <Slider {...settings}>
                        {id != [] &&
                            id.map(({ img, id, projet }) => (
                                <div className='' key={id}>
                                    <img className='img-modal' src={img} alt={projet} />
                                </div>
                            ))}
                    </Slider>
                </Modal.Body>
            </Modal>
        );
    }
}

