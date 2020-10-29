import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer, 
    Logo,
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElement';
import Logo1 from '../../images/logo.png';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
          <IconContext.Provider value={{ color: '#faa200'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                   <NavLogo><Logo to='/' onClick={toggleHome} src={Logo1} /></NavLogo> 
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks 
                              to="about"
                              smooth={true} 
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                            >About</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks 
                              to="services"
                              smooth={true} 
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                            >Services</NavLinks>
                       </NavItem>
                   </NavMenu>
                   <NavBtn>
                      <NavBtnLink to="/signin">Admin Sign In</NavBtnLink>
                   </NavBtn>
                  
                   
                </NavbarContainer>
            </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar;
