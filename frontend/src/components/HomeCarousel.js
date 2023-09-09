import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function HomeCarousel() {
    return (
        <div className='container-xl d-flex justify-content-center align-items-center' >
            <div style={{ display: 'block', width: 1000, padding: 30 }}>
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <img
                            className='d-block w-100'
                            src="images/Decision.jpg"
                            alt="One"
                        />
                        <Carousel.Caption>
                            <h3>A website helps you make a wise decision</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src='images/DummyHouse.png'
                            alt="Two"
                        />
                        <Carousel.Caption>
                            <h3>A website helps you find a dream house</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default HomeCarousel;