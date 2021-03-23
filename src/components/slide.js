import React from 'react';



export default class Slide extends React.Component {

    toSlide(projet) {
        this.props.onSlideChange(projet);
    }

    render() {

        const {slide} = this.props;

        return (
            <>
                <div className='row-slide' id={slide.id}>
                    <img className='img-slide' src={slide.image} alt={slide.projet}
                        onClick={() => this.toSlide(slide)} />
                    <div className='div-slide'>
                        <h6>{slide.projet}</h6>
                        <p className='para-slide'>{slide.description}</p>
                    </div>
                </div>

            </>
        )
    }
}