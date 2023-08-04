// IMPORTS
import { useEffect, useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import social1 from "../assets/img/email.png"
import social2 from "../assets/img/linkedin.png"
import social3 from "../assets/img/github.png"
import cv from "../assets/cv.pdf"

export const NavBar = () => {
    // CONSTANTS
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    // FUNCTIONS
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link 
                        href="#home" 
                        className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                        onClick = {() => onUpdateActiveLink('home')}>
                        Home
                    </Nav.Link>
                    <Nav.Link 
                        href="#skills" 
                        className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                        onClick = {() => onUpdateActiveLink('skills')}>
                        Skills
                    </Nav.Link>
                    <Nav.Link 
                        href="#projects" 
                        className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                        onClick = {() => onUpdateActiveLink('projects')}> 
                        Projects
                    </Nav.Link>
                
                   <Nav.Link 
                        href={cv} 
                        className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>
                        My CV
                    </Nav.Link>                  
        
                  </Nav>
                  {/* Social Icons */}
                  <span className="navbar-text">
                 
                    <div className="social-icon">
                        <a href="mailto:harinisritharar@gmail.com">
                            <img src={social1} alt="email"/>
                        </a>
                        <a href="https://www.linkedin.com/in/harini-sritharar/">
                            <img src={social2} alt="linkedin"/>
                        </a>
                        <a href="https://github.com/Harini-Sritharar">
                            <img src={social3} alt="github"/>
                        </a>
                    </div>
                  </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}