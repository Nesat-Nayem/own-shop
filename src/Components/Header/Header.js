import React, { useEffect, useState } from "react";
import "./Header.css";

import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className={
        isSticky || isCollapsed
          ? " shadow-sm custom-bg py-2 "
          : " custom-bg py-4"
      }
    >
      <Navbar.Brand className="ms-md-5 text-color" href="/">
        OwnSell
      </Navbar.Brand>

      <Navbar.Toggle
        onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
        aria-controls="responsive-navbar-nav"
      />

      <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
        <Nav className="ms-auto ">
          <Nav.Link
            href="/"
            className="me-md-5 nav-item text-color"
            onClick={() => window.scrollTo(500, 0)}
            active
          >
            Home
          </Nav.Link>

          <Nav.Link href="/products" className="me-md-5 nav-item text-color" active>
            Services
          </Nav.Link>

          <Nav.Link href="#link" className="me-md-5 nav-item text-color" active>
            About
          </Nav.Link>
          <Nav.Link href="#link" className="me-md-5 nav-item text-color" active>
            Contract
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
