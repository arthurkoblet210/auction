import React from "react";
// import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  // const state = useSelector((state) => state.handleCart);
  return (
    <Navbar key={"lg"} expand={"lg"} className="bg-body-tertiary mb-3">
      <Container className="justify-content-space-between">
        <Link to="/" className="navbar-brand fw-bold fs-4 px-4">
          <img
            src="./assets/E_Commerce.png"
            alt="Logo"
            width={100}
            height={100}
          />
          Auction71
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${"lg"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
              Auction71
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 align-items-center text-center col">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Auctions
              </Link>
              <Link className="nav-link" to="/">
                Blog
              </Link>
              <Link className="nav-link" to="/">
                About
              </Link>
              <Link className="nav-link" to="/">
                FAQ
              </Link>
              <Link className="nav-link" to="/">
                Terms & Conditions
              </Link>
              <Link className="nav-link" to="/">
                Contact
              </Link>
              {/* <div className="text-center"> */}
              <Link to="/login" className="btn btn-outline-dark m-2">
                <i className="fa fa-user mr-1"></i> Login
              </Link>
              <Link to="/signup" className="btn btn-outline-dark m-2">
                <i className="fa fa-user-plus mr-1"></i> Signup
              </Link>
              {/* </div> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
