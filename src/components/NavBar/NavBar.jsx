import { useState } from "react";
import "./NavBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [setMenu] = useState("name");

  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/produtos",
      name: "Produtos",
    },
    {
      path: "/sobre",
      name: "Sobre",
    }
  ];



  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item, index) => (
              <Nav.Link 
              as={Link} to={item.path} 
              className="list_item" 
              key={index}
              onClick={() => setMenu(item.name)}
              >
                {item.name}	
              </Nav.Link>
            ))}
          </Nav>
            <Nav className="ms-auto">
              <button className="btn btn-success">Login</button>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;