import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import BootCarousel from './BootCarousel';
import { 
    HeroContainer, 
    HeroContent,
    HeroH1,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id='home'>
            <BootCarousel></BootCarousel>
            <HeroContent>
                <HeroH1>AUSH PAINTING</HeroH1>
            
                <HeroBtnWrapper>
                    <Button 
                      to="footer" 
                      onMouseEnter={onHover} 
                      onMouseLeave={onHover}
                      primary="true"
                      dark="true"
                      smooth={true} 
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                    >
                        Contact us for free quote {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
