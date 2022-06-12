import React, { useState, useEffect } from "react";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
// import CommonService from '../HomeServices/CommonService'
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomSlider from "../CustomSlider/CustomSlider";
import ComonServices from "../ComonServices/ComonServices";
// import CustomSlider from '../../SharedRoute/CustomSlider/CustomSlider';
const FeaturedServices = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  console.log(services)

  useEffect(() => {
    setLoading(true);
    axios
      // .get("https://dry-sea-00611.herokuapp.com/api/v1/trending")
      // .get("http://localhost:5000/products")
      .get("http://localhost:7070/api/products/getProduct")
      .then((res) => setServices(res.data))
     
     
      
      // {
      //   const fullData = res.data;
      //   let mainData = [];
      //   fullData.forEach((element) => {
      //     if (element.serviceInfo.length) {
      //       const createData = {
      //         Category: element.serviceInfo[0].Title,
      //         Id: element.serviceInfo[0]._id,
      //         Img: element.serviceInfo[0].Img,
      //       };
      //       mainData = [...mainData, createData];
      //     }
      //   });
      //   setServices(mainData);
      // }
      
      // )
      .finally(setLoading(false));
  }, []);

  return (
    <Container sx={{ mb: 8 }}>
      {loading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"50%"}
          sx={{ mb: 2 }}
          height={30}
        />
      ) : (
        <Box
          // sx={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "space-between",
          // }}
        >
          {/* <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Trending
          </Typography>
          <Link to="/services" style={{ fontSize: 17 }}>
            View All
          </Link> */}

            {/* title text  */}
            <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="featuredcatimg">
              <img src="https://truelysell.com/assets/img/title-image.png" />

              <div className="feturedtextcata">
                <h1>Latest Services</h1>
                <h6>New Services</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="fetuedcarig">
              <a href="#">
                VIEW ALL
                <span>
                  <i class="fas fa-angle-right"></i>
                </span>
              </a>
              <h1>Latest Services</h1>
            </div>
          </div>
        </div>
      </div>
            {/* title text  */}

        </Box>
      )}

      {loading ? (
        <Box sx={{ display: "flex", gap: 5 }}>
          {[...new Array(4)].map((ske, index) => (
            <Stack key={index} spacing={1}>
              <Skeleton
                variant="rectangular"
                width={250}
                sx={{ borderRadius: 2 }}
                height={185}
              />
            </Stack>
          ))}
        </Box>
      ) : (
        <CustomSlider data={services} component={ComonServices}></CustomSlider>
      )}
    </Container>
  );
};

export default FeaturedServices;
