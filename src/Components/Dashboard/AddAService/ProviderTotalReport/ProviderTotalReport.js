import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./TotalReports.module.css";
import Typography from "@mui/material/Typography";
import AnimatedNumber from "animated-number-react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch, useSelector } from "react-redux";

const ProviderTotalReport = () => {
  const [num, setNum] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  // console.log(user)
  const handleChange = (e) => {
    setNum(e.target.value);
  };
  const formatValue = (num) => num.toFixed();



  const [orders,setOrders] = useState('')

  useEffect(()=>{
    fetch(`http://localhost:7070/api/orders/provideremailorder/${user.email}`)
    .then(res=>res.json())
    .then(data=>setOrders(data))
  })


  // total earning 

  let total = 0;
  if (orders.length > 0) {
    orders?.forEach((item) => {
      total += item.price;
    });
  }
  // console.log(total);

  // total provider services 

  const [services,setServices] = useState('')
  useEffect(()=>{
    fetch(`http://localhost:7070/api/products/providerservices/${user.email}`)
    .then(res=>res.json())
    .then(data=>setServices(data))
  })



  useEffect(() => {}, [dispatch]);

  useEffect(() => {}, [dispatch]);

  useEffect(() => {}, [dispatch]);

  // Load orders from Database
  useEffect(() => {}, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ mt: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(200, 250, 205)",
                  borderRadius: "10px",
                  height: "180px",
                  margin: "20px",
                }}
              >
                <Box className={`${styles.reportContainer}`}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GroupsIcon
                      sx={{
                        display: "block",
                        margin: "auto",
                        color: "rgb(0, 123, 85)",
                      }}
                    ></GroupsIcon>
                  </Box>
                  <Box className={`${styles.reports}`}>
                    <Box sx={{ color: "rgb(0, 82, 73)" }}>
                      <AnimatedNumber
                         value={orders.length}
                       
                        formatValue={formatValue}
                        onChange={handleChange}
                        className={`${styles.animatedNum}`}
                        duration="3000"
                      />
                      <ArrowDropUpIcon
                        sx={{
                          fontSize: "30px",
                          color: "rgb(0, 82, 73)",
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography
                    sx={{ color: "rgb(0, 123, 85)", fontSize: "13px" }}
                    variant="small"
                  >
                    Total Customer
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid xs={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(208, 242, 255)",
                  borderRadius: "10px",
                  height: "180px",
                  margin: "20px",
                }}
              >
                <Box className={`${styles.reportContainer}`}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ShopTwoIcon
                      sx={{
                        display: "block",
                        margin: "auto",
                        color: "rgb(4, 41, 122)",
                      }}
                    />
                  </Box>

                  <Box className={`${styles.reports}`}>
                    <Box sx={{ color: "rgb(4, 41, 122)" }}>
                      <AnimatedNumber
                        value={services.length}
                       
                        formatValue={formatValue}
                        onChange={handleChange}
                        className={`${styles.animatedNum}`}
                        duration="3000"
                      />
                      <ArrowDropUpIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ color: "rgb(4, 41, 122)", fontSize: "13px" }}
                    variant="small"
                  >
                    Total Services
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid xs={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(255, 231, 217)",
                  borderRadius: "10px",
                  height: "180px",
                  margin: "20px",
                }}
              >
                <Box className={`${styles.reportContainer}`}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StorefrontIcon
                      sx={{
                        display: "block",
                        margin: "auto",
                        color: "rgb(122, 12, 46)",
                      }}
                    ></StorefrontIcon>
                  </Box>

                  <Box className={`${styles.reports}`}>
                    <Box sx={{ color: "rgb(122, 12, 46)" }}>
                      <AnimatedNumber
                        value={orders.length}
                        // value="88"
                        formatValue={formatValue}
                        onChange={handleChange}
                        className={`${styles.animatedNum}`}
                        duration="3000"
                      />
                      <ArrowDropUpIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ color: "rgb(122, 12, 46)", fontSize: "13px" }}
                    variant="small"
                  >
                    Total Orders
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(255, 247, 205)",
                  borderRadius: "10px",
                  height: "180px",
                  margin: "20px",
                }}
              >
                <Box className={`${styles.reportContainer}`}>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      backgroundImage:
                        "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CurrencyExchangeIcon
                      sx={{
                        display: "block",
                        margin: "auto",
                        color: "rgb(183, 129, 3)",
                      }}
                    ></CurrencyExchangeIcon>
                  </Box>

                  <Box className={`${styles.reports}`}>
                    <Box sx={{ color: "rgb(183, 129, 3)" }}>
                      <AnimatedNumber
                        // value={totalUser?.length}
                        value={total}
                        formatValue={formatValue}
                        onChange={handleChange}
                        className={`${styles.animatedNum}`}
                        duration="3000"
                      />
                      <ArrowDropUpIcon
                        sx={{
                          fontSize: "30px",
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    sx={{ color: "rgb(183, 129, 3)", fontSize: "13px" }}
                    variant="small"
                  >
                    Total Earning
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProviderTotalReport;
