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
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import MessageIcon from "@mui/icons-material/Message";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const MyOrdersCard = ({ service, notShow, index }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleRouteChange = (serviceId, index, service) => {
    navigate(`/dashboard/review/${serviceId}`);
  };

  return (
    <Card sx={{ mb: 4, height: notShow ? "initial" : "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={service?.serviceImg}
        alt="green iguana"
      />

      <CardContent>
        <Typography
          sx={{ fontSize: 22 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {service?.serviceName}
        </Typography>

        <Box sx={{}}>
          <Typography
            sx={{ fontSize: 15, fontWeight: "bold", mb: 1, marginTop: "20px" }}
            variant="h6"
          >
            {" "}
            Status: {service?.status}
          </Typography>

          <Typography sx={{ fontSize: 15, fontWeight: "bold" }} variant="h6">
            Price: ${service?.price}{" "}
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: 15, fontWeight: "bold", marginTop: "30px" }}
          variant="h6"
        >
          Service provider -
        </Typography>

        <Box>
          <Avatar
            sx={{ margin: "10px 30px" }}
            alt="Remy Sharp"
            src="https://i.postimg.cc/PrNrH6Wt/ppimg23.png"
          />
          <Typography sx={{ fontSize: 15 }} variant="h6">
            Name:- {service?.providerName}
          </Typography>

          <Typography sx={{ fontSize: 15 }} variant="h6">
            Email:- {service?.providerEmail}
          </Typography>

          <Typography sx={{ fontSize: 15 }} variant="h6">
            Phone:- {service?.providerNumber}
          </Typography>
        </Box>

        <Button
          to={`/dashboard/review/${service?.serviceId}`}
          onClick={() => handleRouteChange(service.serviceId, index, service)}
          style={{
            marginTop: 10,
            display: "block",
            letterSpacing: 2,
            textAlign: "center",
          }}
          variant="outlined"
          color="warning"
        >
          WRITE A REVIEW?
        </Button>
      </CardContent>
    </Card>
  );
};

export default MyOrdersCard;
