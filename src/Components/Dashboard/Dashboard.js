import * as React from "react";
import AppBar from "@mui/material/AppBar";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";
import StorageIcon from '@mui/icons-material/Storage';

import LayersIcon from "@mui/icons-material/Layers";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import InterestsIcon from "@mui/icons-material/Interests";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HailIcon from '@mui/icons-material/Hail';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import { allData } from "../../redux/dataSlice/dataSlice";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/userSlice";

const drawerWidth = 260;
const Dashboard = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  // console.log(user)
  const navigate = useNavigate();
  //   const { handleSignOut } = useFirebase()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const goHome = () => {
    navigate("/home");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const LogOut = () => {
    // console.log('log out clicked')
    dispatch(signOut());
  };

  //   const { user, loading } = useSelector(allData)
  const { loading } = useSelector(allData);
  const activeStyle = ({ isActive }) => {
    return {
      // borderRight: isActive ? "4px solid #00a1ba" : "4px solid transparent",
      borderRight: isActive ? "4px solid #E60073" : "4px solid transparent",
      backgroundColor: isActive ? "#444444 " : "#003366 ",
    };
  };
  const drawer = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // mt: 2,
          backgroundColor: "#003366",
        }}
      >
      </Box>{" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
          backgroundColor: "#003366",
        }}
      >
        <Avatar
          sx={{ width: 90, height: 90 }}
          //  src='https://i.ibb.co/1qdnh78/img-1.jpg'
          src="https://i.ibb.co/5Fdfdxw/Ellipse-91.png"
          alt="admin img"
        />
        <Typography sx={{ color: "#FF0080" }} variant="h6" gutterBottom mt={1}>
          {/* {user?.username} */}
          Welcome Back! Janin
          {/* David */}
        </Typography>
      </Box>
      {/* } */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <NavLink
          style={{ textDecoration: "none", color: "gray" }}
          // to="/home"
          to=""
        >
          <Button color="inherit">Home</Button>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "gray" }}
          // to="/services"
          to=""
        >
          <Button color="inherit">SERVICES</Button>
        </NavLink>
      </Box>
      <Divider />
      <List>
        {
          <Box
            sx={{
              backgroundColor: "#003366",
              color: "#F6F6F6",
            }}
          >
            {/* admin  */}

            {user?.role === "admin" ? (
              <>
                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/overview`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <SpeedIcon sx={{ mr: 2, fontSize: "24px" }} />
                    Dashboard
                  </Button>
                </NavLink>

                <Accordion
                  TransitionProps={{ unmountOnExit: true }}
                  sx={{
                    background: "#003366 !important",
                    boxShadow: "none !important",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ArrowBackIosNewIcon
                        sx={{ color: "#fff !important", fontSize: "12px" }}
                      />
                    }
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{
                      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        transform: "rotate(-90deg)",
                        marginBottom: 0,
                      },
                    }}
                  >
                    <Button
                      sx={{
                        color: "#fff !important",
                        textTransform: "capitalize",
                        fontWeight: "300",
                        fontSize: "16px",
                      }}
                    >
                      <LayersIcon sx={{ mr: 2, fontSize: "24px" }} />
                      Categories
                    </Button>
                  </AccordionSummary>
                  <AccordionDetails sx={{ background: "#012C56 !important" }}>
                    <NavLink
                      style={{
                        textDecoration: "none",
                        marginTop: "0 !important",
                      }}
                      to={`/dashboard/addcategory`}
                    >
                      <Button
                        sx={{
                          color: "#fff !important",
                          textTransform: "capitalize",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                      >
                        <LibraryAddCheckIcon
                          sx={{ mr: 1, ml: 1, color: "yellow" }}
                        />{" "}
                        Category
                      </Button>
                    </NavLink>

                    <NavLink
                      style={{
                        textDecoration: "none",
                        marginTop: "0 !important",
                      }}
                      to={`/dashboard/subcategory`}
                    >
                      <Button
                        sx={{
                          color: "#fff !important",
                          textTransform: "capitalize",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                      >
                        <LibraryAddCheckIcon
                          sx={{ mr: 1, ml: 1, color: "yellow" }}
                        />{" "}
                        Sub Category
                      </Button>
                    </NavLink>
                  </AccordionDetails>
                </Accordion>

                {/* ser provider approval  */}

                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/pendingProvider`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <GroupIcon sx={{ mr: 2, fontSize: "24px" }} />
                    Vendors
                  </Button>
                </NavLink>

                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/report`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <StorageIcon sx={{ mr: 2, fontSize: "24px" }} />
                   Total Report
                  </Button>
                </NavLink>

                {/*======= Product Nav Menu End ======*/}
                {/* metrial ui accourdian  */}
                {/* Service Provider Overview */}
              </>
            ) : user?.role === "vendor" ? (
              <>
                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/provideroverview`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <SpeedIcon sx={{ mr: 2, fontSize: "24px" }} />
                    Provider Overview
                  </Button>
                </NavLink>

                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/addservice`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <PlaylistAddCheckIcon sx={{ mr: 2, fontSize: "24px" }} />
                    Add A Service
                  </Button>
                </NavLink>
                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/vendorReport`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <InterestsIcon sx={{ mr: 2, fontSize: "24px" }} />
                    Vendor Report
                  </Button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/myorder`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <ShoppingCartIcon sx={{ mr: 2, fontSize: "24px" }} />
                    My Orders
                  </Button>
                </NavLink>
                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/myorder`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <HailIcon sx={{ mr: 2, fontSize: "24px" }} />
                   Give Feedback
                  </Button>
                </NavLink>

                <NavLink
                  style={{
                    textDecoration: "none",
                    marginTop: "0 !important",
                    marginLeft: "15px",
                  }}
                  to={`/dashboard/history`}
                >
                  <Button
                    sx={{
                      color: "#fff !important",
                      textTransform: "capitalize",
                      fontWeight: "300",
                      fontSize: "16px",
                    }}
                  >
                    <AutoModeIcon sx={{ mr: 2, fontSize: "24px" }} />
                  History
                  </Button>
                </NavLink>
              </>
            )}

            {/* follow it  */}

            {/* <ListItem onClick={handleSignOut} button> */}
            <ListItem onClick={LogOut} button>
              <ListItemIcon>
                <LogoutIcon style={{ color: "#F6F6F6", marginLeft: "10px" }} />
              </ListItemIcon>
              <ListItemText primary={"LogOut"} />
            </ListItem>
          </Box>
        }
      </List>
      <Divider />
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const navStyle = {
    backgroundColor: "white",
    // backgroundColor: "#003366",
    color: "black",
    boxShadow:
      " 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        style={navStyle}
        sx={{
          backgroundColor: "black",

          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
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
            {/* <img onClick={goHome} src="https://i.ibb.co/n8Wp01q/web-logo.png" width="120" alt="weblogo" /> */}
          </Box>
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              // to="/home"
              to="/"
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              // to="/services"
              to=""
            >
              <Button color="inherit">SERVICES</Button>
            </NavLink>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          marginBottom: "500px",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              // border:'10px solid red',
              backgroundColor: "#003366",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 10,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Dashboard;
