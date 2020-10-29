import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialIcons,
    SocialIconLink,
    SocialLogo,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElement';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer id="footer">
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="">0405362126</FooterLink>
                            <FooterLink to="">aushpainting@gmail.com</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/' onClick={toggleHome}>
                          AUSH PAINTING
                      </SocialLogo>
                      <WebsiteRights>AUSH c {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                      <SocialIcons>
                          <SocialIconLink 
                            href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                          </SocialIconLink>
                          <SocialIconLink 
                            href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                          </SocialIconLink>
                          <SocialIconLink 
                            href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                          </SocialIconLink>
                          <SocialIconLink 
                            href="/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>  
        </FooterContainer>
    )
}

export default Footer;
