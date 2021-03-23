import React from 'react';



export default class SlideModal extends React.Component {

    render() {
        return (
            <>
                <div className='' >
                    <img className='img-slide' src={this.props.projet.images} alt='' />
                </div>

            </>
        )
    }
}