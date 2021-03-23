import React from 'react';
import { Modal } from 'react-bootstrap';



export default class ModalCom extends React.Component {
    render() {
        const { show, onHide, id } = this.props;



        return (

            <Modal
                show={show}
                onHide={onHide}
                animation={true}
                size="lg">
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body className='div-modal-comm'>
                
                    {id.map(({title1, subtitle1, subtitle2, text, img, id}) => (
                        <div key={id}>                            
                            <img className='img-modal' src={img} alt={title1} />
                            <h3 className='title-modal'>{title1}</h3>
                            <h6 className='subtitle-modal'>{subtitle1}</h6>
                            <h6 className='subtitle-modal'>{subtitle2}</h6>
                            <p className='text-modal-comm'>{text}</p>
                        </div>
                    ))}
                   
                </Modal.Body>

            </Modal>
        );
    }
}

