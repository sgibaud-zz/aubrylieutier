import React from 'react';
import { Modal } from 'react-bootstrap';



export default class ModalSlide extends React.Component {
    render() {
        const { show, onHide, id } = this.props;



        return (

            <Modal
                show={show}
                onHide={onHide}
                animation={true}
                size="lg">
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body>                  
                        {
                            id.map(({ img, id, projet }) => (
                                <div className='div-modal' key={id}>
                                    <img className='img-modal' src={img} alt={projet} />
                                </div>
                            ))}               
                </Modal.Body>
            </Modal>
        );
    }
}

