import React, { useRef, useState } from "react";
import { Box } from "@mui/system";
import { Container, Grid, TextField, Typography } from "@mui/material";
import "./MultiServicesFilter.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import { Link } from "react-router-dom";
import SecondaryButton from "../StyledComponent/SecondaryButton";
import useAuth from "../../hooks/useAuth";

const MultiServicesFilter = () => {
  const { register, handleSubmit, reset } = useForm();
  const [to, setTo] = useState([]);
  const fromRef = useRef();
  const dateRef = useRef();
  const toRef = useRef();

  const {
    searchId,
    setSearchId,
    city,
    setCity,
    provider,
    setProvider,
    service,
    setServiceName,
  } = useAuth();

  const onSubmit = (data) => {};

  const handleserivceId = (e) => {
    e.preventDefault();
    const searchId = e.target.value;
    setSearchId(searchId);
    console.log(searchId);
  };


  const handleserivceCity = (e) => {
    e.preventDefault();
    const searchCity = e.target.value;
    setCity(searchCity);
    console.log(searchCity);
  };

  const handleproviderName = (e) => {
    e.preventDefault();
    const searchprovider = e.target.value;
    setProvider(searchprovider);
    console.log(searchprovider);
  };
  const searchservicename = (e) => {
    e.preventDefault();
    const searchname = e.target.value;
    setServiceName(searchname);
    console.log(searchname);
  };

  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }
  return (
    <Box
      className="personal_flight_Container"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container
        className="personal_flight"
        spacing={{ xs: 2, md: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "#fff",
            paddingTop: "50px",
            paddingBottom: "40px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: "#fff",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            OwnSell Services
          </Typography>
          <Typography variant="h2" sx={{ color: "#fff" }}>
            Fiend Your Service
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexWrap: "wrap", columnGap: 20 }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3, lg: 3 }}
            className="flight_box"
          >
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Box className="selector_box">
                <Box htmlFor="cars" className="label">
                  Service Name
                </Box>
                <TextField

                sx={{outline:'0px'}}
                  className="selector"
                  // {...register("serviceName")}
                  onChange={searchservicename}
                  id="removeoutline"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Box className="selector_box">
                <Box className="label">Provider Name</Box>
                <TextField
                  className="selector"
                  // {...register("providerName")}
                  onChange={handleproviderName}
                  id="outlined-basic"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Box className="selector_box">
                <Box htmlFor="cars" className="label">
                  City
                </Box>
                <TextField
                  className="selector"
                  // {...register("city")}
                  onChange={handleserivceCity}
                  id="outlined-basic"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Box className="selector_box">
                <Box htmlFor="cars" className="label">
                  Service Id
                </Box>
                <TextField
                  className="selector"
                  id="outlined-basic"
                  onChange={handleserivceId}
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Box className="personal_flight_btn">
              <Link to="/searchresultm" style={{ textDecoration: "none" }}>
                <SecondaryButton type="submit">search now</SecondaryButton>
              </Link>
            </Box>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default MultiServicesFilter;
