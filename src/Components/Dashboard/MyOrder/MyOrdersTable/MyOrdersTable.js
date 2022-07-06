import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Grid,
  Card,
  Avatar,
  Chip,
  Button,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  allData,
  parentServiceId,
  reviewServiceIndex,
  singleService,
} from "../../../../redux/dataSlice/dataSlice";

import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MessageIcon from "@mui/icons-material/Message";
import { NavLink } from "react-router-dom";
import MyOrdersCard from "../MyOrdersCard/MyOrdersCard";
import Loading from "../../../Loader/loading";

const MyOrdersTable = () => {
  const user = useSelector((state) => state.user.user);
  // order
  const [savedService, setSavedService] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    dispatch(singleService());
  }, [dispatch]);

  // data load
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:7070/api/orders/user/${user?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setSavedService(data);
        setLoading(false)
      });
  }, [user]);

  const handleRouteChange = (selectServiceId, index, service) => {
    navigate(`/dashboard/review/${selectServiceId}`);
    dispatch(reviewServiceIndex(parseInt(index) + 1));
    const data = {
      selectServiceId,
      email: user.email,
      providerEmail: service.providerEmail,
    };
    dispatch(parentServiceId(data));
  };

  if(loading === true){
    return(
      <Loading></Loading>
    )
  }else{
    if (savedService.length < 1) {
      return (
        <Typography
          sx={{ fontSize: 22 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          There is no orders at this momemnt.
        </Typography>
      );
    }
  }



  return (
    <>
  {
    loading === true ? <Loading></Loading>:

    <Grid container spacing={2}>
    {savedService?.map((service, index) => (
      <Grid item key={service._id} xs={12} md={6} lg={4}>
        <MyOrdersCard service={service} index={index}></MyOrdersCard>
      </Grid>
    ))}
  </Grid>

  }
    </>
  );
};

export default MyOrdersTable;
