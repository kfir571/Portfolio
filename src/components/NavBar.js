import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import snail from '../assets/img/snail.png';
import linkedin_icon from '../assets/img/linkedin_icon.svg';
import git_icon from '../assets/img/git_icon.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  return (
    <Router className="test">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="navBarContainer">
          <Navbar.Brand href="/">
            <img src={snail} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" />
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kfir-shabi1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BOHSzn7RScuJxTQ%2BpKTFZA%3D%3D"><img src={linkedin_icon} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/kfir571"><img className="git" src={git_icon} alt="" /></a>
              </div>
              <HashLink to='#conactEmail'>
                <button className="connnect-btn"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}