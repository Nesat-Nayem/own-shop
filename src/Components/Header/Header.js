import React, { useEffect, useState } from "react";
import "./Header.css";

import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/userSlice";
import { Typography } from "@mui/material";

const Header = () => {
  const user = useSelector((state) => state.user.user)
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const logout = () =>{
    console.log('log out clicked')
    dispatch(signOut())
  }

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
        {/* OwnSell */}
        <Typography
              sx={{
                display: { xs: "none", md: "block" },
                color: "#E60073",
                fontSize: "30px",
                fontWeight: "700",

                fontFamily: "Cinzel",
              }}
            >
              Own <span style={{ color: "#27B1FC" }}>Sell</span>
            </Typography>
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

        

          <Nav.Link href="/dashboard" className="me-md-5 nav-item text-color" active>
            Dashboard
          </Nav.Link>

          <Nav.Link href="/contract" className="me-md-5 nav-item text-color" active>
            Contract
          </Nav.Link>
          {user?.email ? 
          (
            <Nav.Link onClick={logout} className="me-md-5 nav-item text-color" active>
             Log Out
            </Nav.Link>):
          (
                      <Nav.Link href="/singin" className="me-md-5 nav-item text-color" active>
                      Long in 
                     </Nav.Link> )
          }
        </Nav>
        {/* <h1 style={{color:'red'}}>{user?.username}</h1> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

