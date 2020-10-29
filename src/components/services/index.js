import React from 'react';
import Icon2 from '../../images/image5.jpg';
import Icon3 from '../../images/image8.jpg';
import Icon4 from '../../images/image3.jpg';
import Icon5 from '../../images/image6.jpg';
import { 
    ServicesContainer,
    ServicesWrapper,
    ServicesIcon,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElement';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>OUR SERVICES</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Interior Painting</ServicesH2>
                    <ServicesP>Change the feel and vibe of your home with a fresh color</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>Exterior Painting</ServicesH2>
                    <ServicesP>Advance the look of your property and keep your first impression on who ever passes by</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Commercial Painting</ServicesH2>
                    <ServicesP>Present your business with everlasting impression to your customers</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>All Rendering Services</ServicesH2>
                    <ServicesP>Rendering, coating, and finishes. Cement Render, Acrylic Render, Bagging render...</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
