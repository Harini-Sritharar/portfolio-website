// IMPORTS
import { useEffect, useState } from "react"
import { Navbar,Container } from "react-bootstrap"
import social1 from "../assets/img/email.png"
import social2 from "../assets/img/linkedin.png"
import social3 from "../assets/img/github.png"


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
                <Navbar.Brand href="#home">
                    <img src={''} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <span className="navbar-toggler-icon"></span>
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
                  </Nav>
                  <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={social1} alt=""/></a>
                        <a href="#"><img src={social2} alt=""/></a>
                        <a href="#"><img src={social3} alt=""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect!</span></button>
                  </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}