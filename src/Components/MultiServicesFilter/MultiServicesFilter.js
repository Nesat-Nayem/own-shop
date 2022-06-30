import React, { useRef, useState } from "react";
// import Grid from "@material-ui/core/Grid";
import { Box } from "@mui/system";
import { Container, Grid, TextField, Typography } from "@mui/material";
import "./MultiServicesFilter.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
// import {
//   addDateAndPass,
//   addFilterData,
// } from "../../../../Redux/Slice/flightSlice";

import { Link } from "react-router-dom";
import SecondaryButton from "../StyledComponent/SecondaryButton";
import useAuth from "../../hooks/useAuth";
// import SecondaryButton from "../../../StyledComponent/Buttons/SecondaryButton";

const MultiServicesFilter = () => {
  const { register, handleSubmit, reset } = useForm();

  //   const [flights, setFlights] = useState([]);
  const [to, setTo] = useState([]);
  const fromRef = useRef();
  const dateRef = useRef();
  const toRef = useRef();

  const { searchId, setSearchId , city, setCity, provider, setProvider, service,setServiceName  } = useAuth()


  const onSubmit = data =>{
    // console.log(data)
    // const muiltiSearch = {
    //   searchid : data?.serviceId
     
    // }
    // setSearchId(muiltiSearch)
  }

  const handleserivceId = (e) =>{
    e.preventDefault()
    const searchId = e.target.value
    setSearchId(searchId);
    console.log(searchId)
  }
const handleserivceCity = (e) =>{
  e.preventDefault()
  const searchCity = e.target.value;
  setCity(searchCity);
  console.log(searchCity)
}

const handleproviderName =(e)=>{
  e.preventDefault()
  const searchprovider = e.target.value;
  setProvider(searchprovider);
  console.log(searchprovider)
}
const searchservicename =(e)=>{
  e.preventDefault()
  const searchname = e.target.value;
  setServiceName(searchname);
  console.log(searchname)
}


  //   useEffect(() => {
  //     // fetch("https://dashboard.heroku.com/flight")
  //     fetch("https://agile-lowlands-71900.herokuapp.com/flight")
  //       .then((res) => res.json())
  //       .then((data) => setFlights(data));
  //   }, []);

  //   const handleFrom = () => {
  //     const e = fromRef.current.value;
  //     console.log(e);
  //     // eslint-disable-next-line array-callback-return
  //     const fillterData = flights.filter((item) => {
  //       if (item.from === e) {
  //         return item.to
  //       }
  //     });
  // const flightTo = fillterData.map((item) => item.to);
  // const filterTo = fillterData.filter(
  //   ({ to }, index) => !flightTo.includes(to, index + 1)
  // );
  //     setTo(filterTo);
  //     // console.log(fillterData);
  //   };

  // const dispatch = useDispatch();

  // const handleSubmit = () => {
  //   let from = fromRef.current.value;
  //   let to = toRef.current.value;
  //   const data = {
  //     from,
  //     to,
  //   };

  // if (from && to) {
  //   axios
  //     // .post("https://agile-lowlands-71900.herokuapp.com/filter", data)
  //     .post("https://agile-lowlands-71900.herokuapp.com/filter", data)
  //     .then((res) => dispatch(addFilterData(res.data)));
  // }
  // dispatch(
  //   addDateAndPass({ date: dateRef.current.value, passanger: counter })
  // );
  // };

  //remove the duplicate item
  //   const flightFrom = flights.map((item) => item.from);
  //   const filterFrom = flights.filter(
  //     ({ from }, index) => !flightFrom.includes(from, index + 1)
  //   );

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
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexWrap: 'wrap', columnGap: 20 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 3 }}
          className="flight_box"
        >
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Box className="selector_box">
              {/* <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexWrap: 'wrap', columnGap: 20 }}> */}
              <Box htmlFor="cars" className="label">
                Service Name
              </Box>
              {/* <TextField  className="selector"  variant="outlined" /> */}
              <TextField
                className="selector"
                // {...register("serviceName")}
                onChange={searchservicename}
                id="outlined-basic"
                variant="outlined"
              />
              {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
              {/* <select
                  className="selector"
                  ref={ fromRef }
                //   onChange={ () => handleFrom() }
                >
                  <option style={ { color: "black" } } required value="From">From</option> */}
              {/* { filterFrom.map((flight) => {
                    const { from } = flight;
                    return (
                      <option style={ { color: "black" } } required key={ flight._id } value={ from }>
                        { from }
                      </option>
                    );
                  }) } */}
              {/* </select> */}
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
              {/* <select className="selector" ref={ toRef }>
                <TextField id="standard-basic" label="Standard" variant="standard" /> */}
              {/* <option style={ { color: "black" } } required value="To">To</option> */}
              {/* { to.map((flight) => {
                    const { to } = flight;
                    return (
                      <option style={ { color: "black" } } required key={ flight._id } value={ to }>
                        { to }
                      </option>
                    );
                  }) } */}
              {/* </select> */}
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
              {/* <input
                  ref={ dateRef }
                  type="date"
                  required
                  size="small"
                  className="form-control selector"
                  id="exampleDatepicker1"
                /> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Box className="selector_box">
              <Box htmlFor="cars" className="label">
                Service Id
              </Box>
              <TextField
                className="selector"
                // {...register("serviceId")}
                id="outlined-basic"
                onChange={handleserivceId}
                variant="outlined"
              />
              {/* <Box className="selector">
                  <Box className="passenger">
                    <span className="int" onClick={ () => decrementCounter() }>
                      <i style={ { color: "white" } } className="fas fa-minus"></i>
                    </span>
                    <span style={ { color: "white" } } className="number">
                      { counter }
                    </span>
                    <span className="dec" onClick={ () => incrementCounter() }>
                      <i style={ { color: "white" } } className="fas fa-plus"></i>
                    </span>
                  </Box>
                </Box> */}
            </Box>
          </Grid>
          {/* </form> */}
          <Box className="personal_flight_btn">
            <Link to="/searchresultm" style={{ textDecoration: "none" }}>
              {/* <SecondaryButton onClick={ handleSubmit }> */}
              <SecondaryButton type="submit" >search now</SecondaryButton>
            </Link>
          </Box>
        </Grid>

        </form>

      </Container>
    </Box>
  );
};

export default MultiServicesFilter;
