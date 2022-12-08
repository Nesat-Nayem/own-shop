import {
  Box,
  Stack,
  Grid,
  Paper,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  recentMoment,
  totalApproveOrders,
  totalEarning,
  totalOrders,
  totalSales,
} from "../../../utilities/dataAnalize";
import RecentMomentChart from "../RecentMomentChart/RecentMomentChart";

const AdminChart = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [allProvider, setAllProvider] = useState([]);
  const [serviceCount, setServiceCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState({
    recentMoment: [],
    earning: 0,
    sales: 0,
    orders: 0,
    providers: 0,
    ordersApprove: 0,
    totalService: 0,
  });
  useEffect(() => {
    setLoading(true);
    let one = "https://energetic-pear-threads.cyclic.app/api/orders/allorder";
    let two = "https://energetic-pear-threads.cyclic.app/api/getprovider";
    let three = "https://energetic-pear-threads.cyclic.app/api/products/getProduct";
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          setAllOrders(responses[0].data);
          setAllProvider(responses[1].data);
          setServiceCount(responses[2].data.length);
        })
      )
      .catch((errors) => {
        // react on errors.
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading) {
      setAllData((state) => {
        return {
          recentMoment: recentMoment(allOrders),
          earning: totalEarning(allOrders),
          sales: totalSales(allOrders),
          orders: totalOrders(allOrders),
          ordersApprove: totalApproveOrders(allOrders),
          providers: allProvider.length,
          totalService: serviceCount,
        };
      });
    }
  }, [loading]);

  //
  if (loading) {
    return (
      <Stack alignItems="center">
        <CircularProgress></CircularProgress>
      </Stack>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1">Services</Typography>
                  <IconButton
                    sx={{
                      background: "hsl(215deg 69% 90%)",
                      color: "hsl(215deg 70% 71%)",
                    }}
                  >
                    {" "}
                    <DirectionsCarIcon></DirectionsCarIcon>
                  </IconButton>
                </Box>
                <Typography variant="h5" gutterBottom>
                  <CountUp end={serviceCount} />
                </Typography>
                <Typography
                  color="hsl(120deg 30% 75%)"
                  variant="body1"
                  component={"span"}
                >
                  Best
                </Typography>
                <Typography variant="body1" component={"span"}>
                  {" "}
                  Level Services
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1">Earning</Typography>
                  <IconButton
                    sx={{
                      background: "hsl(215deg 69% 90%)",
                      color: "hsl(215deg 70% 71%)",
                    }}
                  >
                    {" "}
                    <AttachMoneyIcon></AttachMoneyIcon>
                  </IconButton>
                </Box>
                <Typography variant="h5" gutterBottom>
                  $<CountUp end={allData.earning} />
                </Typography>
                <Typography
                  color="hsl(120deg 30% 75%)"
                  variant="body1"
                  component={"span"}
                >
                  Good
                </Typography>
                <Typography variant="body1" component={"span"}>
                  {" "}
                  earning{" "}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1">Service Provider</Typography>
                  <IconButton
                    sx={{
                      background: "hsl(215deg 69% 90%)",
                      color: "hsl(215deg 70% 71%)",
                    }}
                  >
                    {" "}
                    <HomeRepairServiceIcon></HomeRepairServiceIcon>
                  </IconButton>
                </Box>
                <Typography variant="h5" gutterBottom>
                  <CountUp end={allData.providers} />
                </Typography>
                <Typography
                  color="hsl(120deg 30% 75%)"
                  variant="body1"
                  component={"span"}
                >
                  Good
                </Typography>
                <Typography variant="body1" component={"span"}>
                  {" "}
                  lever provider
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1">Orders</Typography>
                  <IconButton
                    sx={{
                      background: "hsl(215deg 69% 90%)",
                      color: "hsl(215deg 70% 71%)",
                    }}
                  >
                    {" "}
                    <StorefrontIcon></StorefrontIcon>
                  </IconButton>
                </Box>
                <Typography variant="h5" gutterBottom>
                  <CountUp end={allData.orders} />
                </Typography>
                <Typography color="red" variant="body1" component={"span"}>
                  Bad
                </Typography>
                <Typography variant="body1" component={"span"}>
                  {" "}
                  orders{" "}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <RecentMomentChart data={allData.recentMoment}></RecentMomentChart>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminChart;
