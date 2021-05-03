import React, { useState } from 'react';
import bannerImage from '../images/b1.jpg'
import bannerImg2 from '../images/2.jpg'
import bannerImg3 from '../images/3.jpg'


import Carousel from 'react-bootstrap/Carousel'
export default function Banner() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className="carouselbox" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 itemss"
                    src={bannerImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href="#photos"><button className="banner_button">Get started</button></a>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100  itemss"
                    src={bannerImg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 itemss"
                    src={bannerImg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}



