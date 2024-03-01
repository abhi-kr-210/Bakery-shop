import React,{useState} from 'react'

import {Container,Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../Styles/HeaderStyle1.css";
import logo from "../../assets/brand_logo.png";
function Header1() {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header className="header_new">
  <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className='img-fluid logo_img' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">HOME</Nav.Link>
          <Nav.Link as={Link} to="/about" >ABOUT</Nav.Link>
          <Nav.Link as={Link} to="/ourmenu">OUR MENU</Nav.Link>
          <Nav.Link as={Link} to="/shop">SHOP</Nav.Link>
          <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
          <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          <Nav.Link as={Link} to="/">
            <div className="cart">
              <i className="bi bi-cart"></i>
              <em className='roundpoint'>2</em>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</header>

  )
}

export default Header1