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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Avatar from "@mui/material/Avatar";
import { Outlet } from "react-router-dom";


import { useSelector } from "react-redux";


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
      // borderRight: isActive ? "4px solid #00a1ba" : "4px solid transparent",
      borderRight: isActive ? "4px solid #E60073" : "4px solid transparent",
      backgroundColor: isActive ? "#444444 " : '#333333 '
    };
  }
  const drawer = (
    <>
  
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // mt: 2,
            backgroundColor:'#333333',
            
          
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
            backgroundColor:'#333333',
          

          }}
        >
          <Avatar
            sx={{ width: 90, height: 90 }}
         src='https://i.ibb.co/1qdnh78/img-1.jpg'
            alt='admin img'
          />
          <Typography sx={{color:'#F6F6F6'}} variant="h6" gutterBottom mt={1}>
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
           backgroundColor:'#333333',
           color:'#F6F6F6',
         
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
                    <ManageSearchIcon style={{color:'#F6F6F6',   
         
            }} />
                  </ListItemIcon>
                  <ListItemText style={{color:'#F6F6F6'}} primary={"Over view"} />
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
                    <SavedSearchOutlinedIcon style={{color:'#F6F6F6', }} />
                  </ListItemIcon>
                  <ListItemText style={{color:'#F6F6F6'}} primary={"Pending Providers"} />
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
                    <SavedSearchOutlinedIcon style={{color:'#F6F6F6'}} />
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
                <LogoutIcon style={{color:'#F6F6F6'}} />
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
    // backgroundColor: "#333333",
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
          backgroundColor:'black',
       
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1,    }}>
          <Typography sx={{ display: { xs: "none", md: "block" } , color: "#E60073",
          fontSize:'30px',
          fontWeight:'700',
     
        fontFamily: 'Cinzel',
        
        }}>
            Own <span style={{color:'#27B1FC'}}>Sell</span>
          </Typography>
            {/* <img onClick={goHome} src="https://i.ibb.co/n8Wp01q/web-logo.png" width="120" alt="weblogo" /> */}
          </Box>
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              // to="/home"
              to='/'
            >
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "black"
          
          }}
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } , border:'10px solid red', marginBottom:'500px' }}
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
              backgroundColor:'#333333',
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
