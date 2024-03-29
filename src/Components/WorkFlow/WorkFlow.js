import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ScreenSearchDesktopOutlinedIcon from "@mui/icons-material/ScreenSearchDesktopOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
// import { div } from 'react-router-dom';
import "./WorkFlow.css";

const useStyles = makeStyles({
  around: {
    backgroundColor: "#ffb600",
    width: "140px",
    height: "140px",
    borderRadius: "50px",
    lineHeight: "140px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    transform: "rotate(135deg)",
    animation: "toTopFromBottom 0.3s forwards",
  },
  icons: {
    textAlign: "center",
    // transform: 'rotate(220deg)'
    transform: "rotate(-0deg)",
  },
  text: {
    marginLeft: "20px",
  },

  text2: {
    color: "#FF5E14",
  },
});

const WorkFlow = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className="service-area">
        <div className="grayBox"></div>
        <Grid sx={{ mb: 5, position: "relative" }} container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box className={classes.text}>
              <Typography className="sub-title"> STEPS</Typography>

              <div style={{ textDecoration: "none" }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#FF5E14",
                  }}
                >
                  How Own Sell Works
                </Typography>
              </div>
              <Typography variant="body1" gutterBottom>
                {" "}
                Our provider will provide their service to user. After order
                user can asked their query to provider. Service A to Z will keep
                small amount of cost from provider
              </Typography>
              <div style={{ textDecoration: "none" }}>
                <Button
                  to="/dashboard/becomeaprovider"
                  style={{ backgroundColor: "#FF5E14" }}
                  sx={{
                    borderRadius: 1,
                    p: 2,
                    fontWeight: "bold",
                    me: 5,
                    mt: 2,
                    position: "relative",
                    zIndex: 2,
                  }}
                  variant="contained"
                >
                  Our services
                </Button>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: "center",
              }}
            >
              <Box className="position-1">
                <Box className="step-around "></Box>
                <Box className={classes.icons}>
                  <AssignmentOutlinedIcon
                    className=" "
                    sx={{
                      fontSize: "50px",
                      borderStyle: "none",
                      height: "auto ",
                      maxWidth: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box className="step-section step-1">
              <Box className={classes.text2}>
                <Typography sx={{ fontWeight: "bold", p: 1 }}>
                  Choose What To Do
                </Typography>
              </Box>

              <Typography sx={{ p: 1 }}>
                Chose your needed service and then go to details page on left
                side you will find category by choosing your category a modal
                will open
              </Typography>
              <Box className="front"></Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: "center",
              }}
            >
              <Box className="position-2">
                <Box className="step-around"></Box>
                <Box className={classes.icons}>
                  <ScreenSearchDesktopOutlinedIcon
                    className="img-rotate"
                    sx={{
                      fontSize: "50px",
                      borderStyle: "none",
                      height: "auto ",
                      maxWidth: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="step-section step-2">
              <Box className={classes.text2}>
                <Typography sx={{ fontWeight: "bold", p: 1 }}>
                  Find What You Want
                </Typography>
              </Box>
              <Typography sx={{ p: 1 }}>
                Chose you a provider who will be provide your service you can
                save this order for later or you can complete your order by
                clicking next then give our info and card to confirm order.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: "center",
              }}
            >
              <Box className="position-3">
                <Box className="step-around"></Box>
                <Box className={classes.icons}>
                  <AddLocationAltOutlinedIcon
                    className="img-rotate"
                    sx={{
                      fontSize: "50px",
                      borderStyle: "none",
                      height: "auto ",
                      maxWidth: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="step-section step-3">
              <Box className={classes.text2}>
                <Typography sx={{ fontWeight: "bold", p: 1 }}>
                  Amazing Places
                </Typography>
              </Box>
              <Typography sx={{ p: 1 }}>
                After a order complete you can chat with your provider. On my
                Orders chat page you can find all of your order then you will
                find a chat icons beside provider info by clicking that icons
                you can chat with provider
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default WorkFlow;
