import React, { useEffect, useRef, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Container,
  CardContent,
  CardActionArea,
  Card,
  Grid,
  Modal,
  TextField,
  Popover,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { GrLogout } from "react-icons/gr";
import { useTheme } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
console.log(SpeechRecognition);
let mic;
if (SpeechRecognition) {
  mic = new SpeechRecognition();
  mic.continuous = true;
  mic.interimResults = true;
  mic.lang = "en-US";
}

const Navigation = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [state, setState] = React.useState(false);
  const user = useSelector((state) => state.user.user);

  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [messageSeen, setMessageSeen] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [isMessageSeen, setIsMessageSeen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open2 = Boolean(anchorEl);
  const id = open2 ? "simple-popover" : undefined;

  useEffect(() => {
    axios
      .get(`https://dry-sea-00611.herokuapp.com/singleservice`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const handleClickClose = () => {
    setAnchorEl(null);
  };

  const handleCardClick = (id) => {
    navigate(`/Home/service-details/${id}`);
  };

  const goHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.pageYOffset;
      if (scroll > 100) {
        if (navRef.current) {
          navRef.current.classList.add("scroll-nav");
        }
      } else {
        if (navRef.current) {
          navRef.current.classList.remove("scroll-nav");
        }
      }
    });
  }, []);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserLogin = () => {
    navigate("/login");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // nav button
  const navButton = {
    width: "25px",
    height: "25px",
    borderRadius: "50px",
    padding: "8px",
    marginRight: "20px",
    backgroundColor: "#FF5E14",
    color: "whiteSmoke",
  };
  // link of navbar
  const navLink = {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
    marginRight: "15px",
    letterSpacing: "3px",
    fontSize: "15px",
  };

  // style sheets

  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up("md")]: {
        display: "none !important",
      },
      [theme.breakpoints.down("md")]: {
        marginLeft: "95% !important",
      },
    },
    navbar: {
      [theme.breakpoints.down("md")]: {
        height: "70px !important",
      },
    },

    navItemContainer: {
      [theme.breakpoints.down("md")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("md")]: {
        position: "absolute",
        bottom: "50px",
      },
    },
  });
  const { navIcon, navItemContainer, navLogo, navbar } = useStyle();

  const list = (
    <Box
      sx={{ width: 250 }}
      // role="presentation"
    >
      <List sx={{ mt: "50%" }}>
        <Divider sx={{ color: "#98a1bc" }} />
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemText>
              <AiOutlineHome /> HOME
            </ListItemText>
          </ListItem>
        </Link>
        <Divider sx={{ color: "#98a1bc" }} />
        <Link to="/services" style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemText>
              {/* <BsBicycle />    CYCLES */}
              services
            </ListItemText>
          </ListItem>
        </Link>
        <Divider sx={{ color: "#98a1bc" }} />
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemText>
              <MdOutlineDashboard /> DASHBOARD
            </ListItemText>
          </ListItem>
        </Link>
        <Divider sx={{ color: "#98a1bc" }} />
        <ListItem>
          {user?.email && (
            <ListItemText sx={{ color: "black" }}>
              <img
                src={user?.photoURL}
                style={{
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
                alt="userImage"
              />
              {user?.displayName}
            </ListItemText>
          )}
        </ListItem>
        {user?.email && <Divider sx={{ color: "#98a1bc" }} />}
      </List>
    </Box>
  );
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  console.log(note);

  useEffect(() => {
    if (mic) {
      handleListen();
    }
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {};
    }
    mic.onstart = () => {};

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      setNote(transcript);
      mic.onerror = (event) => {};
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  return (
    <Container id="back-to-top-anchor">
      <AppBar
        id="navbar"
        ref={navRef}
        className={navbar}
        position="fixed"
        style={{ boxShadow: 0.5 }}
        sx={{ paddingX: 3, paddingY: 1, background: "#fff" }}
      >
        <IconButton
          sx={{ mr: 40, zIndex: 999999, color: "#FF5E14" }}
          onClick={() => setState(true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ zIndex: "99" }}
          className={navIcon}
        >
          <MenuIcon />
        </IconButton>

        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", ml: 2 }}
        >
          <Box>
            <img
              onClick={goHome}
              className={navLogo}
              src={"https://i.ibb.co/n8Wp01q/web-logo.png"}
              width="120"
              alt="weblogo"
            />
          </Box>

          <Box style={{ zIndex: "9999" }} className={navItemContainer}>
            <Button variant="text">
              <NavLink style={navLink} to="/home">
                HOME
              </NavLink>
            </Button>

            <Button variant="text">
              {" "}
              <NavLink style={navLink} to="/services">
                SERVICES
              </NavLink>
            </Button>

            <Button variant="text">
              {" "}
              <NavLink style={navLink} to="/dashboard">
                DASHBOARD
              </NavLink>
            </Button>

            <Button variant="text">
              {" "}
              <NavLink style={navLink} to="/dashboard/myorders">
                My Order
              </NavLink>
            </Button>

            <Button variant="text">
              {" "}
              <NavLink style={navLink} to="/contact">
                CONTACT US
              </NavLink>
            </Button>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center" }}
            className={navItemContainer}
          >
            {user?.email && (
              <>
                <></>
                <Tooltip arrow title="My Account"></Tooltip>
              </>
            )}

            {!user?.email && (
              <Button variant="text" onClick={handleUserLogin}></Button>
            )}

            {user?.email && <Menu></Menu>}
          </Box>
        </Toolbar>
      </AppBar>
      <React.Fragment>
        <Drawer open={state} onClose={() => setState(false)}>
          {list}
        </Drawer>
      </React.Fragment>
    </Container>
  );
};
export default Navigation;
