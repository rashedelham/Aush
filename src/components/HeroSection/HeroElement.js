import styled from 'styled-components';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdArrowForward, MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';


export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;

  

  :before {
      content: '';
      top: 0;
      left: 0;
      right: 0; 
      bottom: 0;
      background: 
        linear-gradient(
          180deg, rgba(0,0,0,0.2) 0%, 
          rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(
          180deg, rgba(0,0,0,0.2) 0%, 
          transparent 100%
        );
      z-index: 2;
  }
`

// export const HeroBg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0; 
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `

// export const BootCarousel = styled.div`
//   width: 100%;
//   height: 100%;
//   --o-object-fit: cover;
//   object-fit: cover;
//   background:#232a34;


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: grid;
  flex-dirction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
      font-size: 40px;
  }

  @media screen and (max-width: 480px) {
      font-size: 32px;
  }

  @media screen and (max-width: 768px) {
      font-size: 24px;
  }

  @media screen and (max-width: 480px) {
      font-size: 18px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled(Link)`
  background-color: #faa200;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowBack = styled(MdArrowBack)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`

//slide show

  