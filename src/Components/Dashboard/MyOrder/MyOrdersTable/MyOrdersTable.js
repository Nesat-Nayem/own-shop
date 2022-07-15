import { Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { allData, userOrder } from "../../../../redux/dataSlice/dataSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyOrdersCard from "../MyOrdersCard/MyOrdersCard";
import Loading from "../../../Loader/loading";

const MyOrdersTable = () => {
  const user = useSelector((state) => state.user.user);
  const { userOrders, getLoad } = useSelector(allData);

  // console.log("from redux thank", getLoad);
  // console.log("from redux thank", userOrders);
  // order

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userOrder(user?._id));
  }, [dispatch]);

  if (getLoad === true) {
    return <Loading></Loading>;
  } else {
    if (userOrders.length < 1) {
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
      {getLoad === true ? (
        <Loading></Loading>
      ) : (
        <Grid container spacing={2}>
          {userOrders?.map((service, index) => (
            <Grid item key={service._id} xs={12} md={6} lg={4}>
              <MyOrdersCard service={service} index={index}></MyOrdersCard>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default MyOrdersTable;
