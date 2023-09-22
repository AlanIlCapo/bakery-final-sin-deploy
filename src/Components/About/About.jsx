import React from 'react';
import './About.css';
import Carousel from 'better-react-carousel';
import bread from '../assets/Images/bread.png';
import bagels from '../assets/Images/bagels.png';
import cake from '../assets/Images/cake.png';
import croissant from '../assets/Images/croissant.png'



const About = () => {

    return(
        <div className='Carousel'>
            <Carousel className='carousel-slider' cols={1} rows={1} gap={10} loop>
                <Carousel.Item>
                    <img className='img-carousel' width="100%" src={bread} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-carousel' width="100%" src={bagels} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-carousel' width="100%" src={cake} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-carousel' width="100%" src={croissant} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export { About }