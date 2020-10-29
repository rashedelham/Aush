import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import Image1 from '../../images/image2.jpg'
import Image2 from '../../images/image3.jpg'
import Image3 from '../../images/image8.jpg'
import Image4 from '../../images/image5.jpg'
import Image5 from '../../images/image6.jpg'
import Image6 from '../../images/image9.jpg'


class BootCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <Img
                        src={Image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Img
                        src={Image2}
                        alt="Second slide"
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <Img
                        src={Image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Img
                        src={Image4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Img
                        src={Image5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Img
                        src={Image6}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    };
}

export const Img = styled.img`
  width: 100%;
  height: 100%; 
`

export default BootCarousel;