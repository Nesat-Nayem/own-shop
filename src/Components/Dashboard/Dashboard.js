import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PaymentIcon from "@mui/icons-material/Payment";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HandymanIcon from "@mui/icons-material/Handyman";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Avatar from "@mui/material/Avatar";
import { Outlet } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AnchorIcon from '@mui/icons-material/Anchor';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useSelector } from "react-redux";
// import { allData } from "../../redux/dataSlice/dataSlice";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Skeleton from '@mui/material/Skeleton';
// import useFirebase from "../../Hooks/useFirebase";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { allData } from "../../redux/dataSlice/dataSlice";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/userSlice";


const drawerWidth = 260
const Dashboard = (props) => {

  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user.user)
  console.log(user)
  const navigate = useNavigate();
//   const { handleSignOut } = useFirebase()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const goHome = () => {
    navigate("/home")
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const LogOut = () =>{
    console.log('log out clicked')
    dispatch(signOut())
  }


//   const { user, loading } = useSelector(allData)
  const { loading } = useSelector(allData)
  const activeStyle = ({ isActive }) => {
    return {
      borderRight: isActive ? "4px solid #00a1ba" : "4px solid transparent",
      backgroundColor: isActive ? "#f4f5f8" : 'white'
    };
  }
  const drawer = (
    <>
      {/* { */}
        {/* // loading ?  */}
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
         
          }}
        >
          {/* <Skeleton variant="circular" width={80} height={80} /> */}
          {/* <Skeleton variant="text" width={200} /> */}
        </Box>  <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 2,
            
          }}
        >
          <Avatar
            sx={{ width: 90, height: 90 }}
         src='https://i.ibb.co/1qdnh78/img-1.jpg'
            alt='admin img'
          />
          <Typography variant="h6" gutterBottom mt={1}>
            {user?.role}
            {/* David */}
          </Typography>
        </Box>
      {/* } */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <NavLink style={{ textDecoration: "none", color: "gray" }} 
        
        // to="/home"
        to=''
        
        >
          <Button color="inherit">Home</Button>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "gray" }}
          // to="/services"
          to=''
        >
          <Button color="inherit">SERVICES</Button>
        </NavLink>
      </Box>
      <Divider />
      <List>

        
      {
          // loading ? [...new Array(8)].map((ske, index) =>
            // <Skeleton variant="rectangular" width={250} sx={{ borderRadius: 2, mb: 2 }} height={45} />
          // ) : 
          
          <Box
          sx={{
           
          }}
          >


            {/* admin  */}

            {
              user?.role === 'admin' ? <>

                <ListItem
                  component={NavLink}
                  to={`/dashboard/overview`}
                  // to='/dashboard/overview'
                  button
                  style={activeStyle}
                >
                  <ListItemIcon>
                    <ManageSearchIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Over view"} />
                </ListItem>
                {/* Service Provider Overview */}

                <ListItem
                  component={NavLink}
                  // to={`/dashboard/pendingprovider`}
                  to={`/dashboard/pendingProvider`}
                  button
                  style={activeStyle}
                >
                  <ListItemIcon>
                    <SavedSearchOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Pending Providers"} />
                </ListItem>


                </> : user?.role === 'vendor' ? <>

     
                <ListItem
                  component={NavLink}
                  to={`/dashboard/servicerequist`}
                  // to=''
                  button
                  style={activeStyle}
                >
                  <ListItemIcon>
                    <SavedSearchOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Make Service Request"} />
                </ListItem>

                </> 
                : <>
              <ListItem
                  component={NavLink}
                  to={`/dashboard/myorder`}
                  button
                  style={activeStyle}
                >
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary={"My Orders"} />
                </ListItem>

                </>

            }



            {/* <ListItem onClick={handleSignOut} button> */}
            <ListItem onClick={LogOut} button>
              <ListItemIcon>
                <LogoutIcon />
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1,  }}>
          <Typography sx={{ display: { xs: "none", md: "block",color: "gray" } }}>
            Own Sell
          </Typography>
            {/* <img onClick={goHome} src="https://i.ibb.co/n8Wp01q/web-logo.png" width="120" alt="weblogo" /> */}
          </Box>
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            <NavLink
              style={{ textDecoration: "none", color: "gray" }}
              // to="/home"
              to='/'
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "gray" }}
              // to="/services"
              to=''
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } , marginBottom:'500px' }}
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
