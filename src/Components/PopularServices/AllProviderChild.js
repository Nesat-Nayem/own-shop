import React from "react";
// material ui card start
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import "./PopularServices.css";
import { Link, useNavigate } from "react-router-dom";

const AllProviderChild = (props) => {
  const {
    providerPhoto,
    LogoImg,
    name,
    about,
    location,
    img,
    bio,
    date,
    email,
    number,
    offerService,
    providerId,
    reviewUser,
    reviews,
    providername,
    AvgRating,
    _id,
  } = props.provider;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const randomImage = () => {
    const urls = [
      "https://i.ibb.co/y5jq6XV/cardentingpainting.jpg",
      "https://i.ibb.co/j9Nv898/glass.jpg",
      "https://i.ibb.co/bBbvJMF/1617102282-unnamed.jpg",
      "https://i.ibb.co/Zhy4K3M/1613631861-Veneer-with-polish.jpg",
      "https://i.ibb.co/PCT5Mmp/manSalon.jpg",
    ];
    const i = Math.floor(Math.random() * 5);
    return urls[i];
  };

  //   const navigate = useNavigate();

  const handleSeeDetails = (id) => {
    // navigate(`/home/providerProfile/${id}`)
  };

  return (
    <Card
      sx={{ ml: 2 }}
      onClick={() => handleSeeDetails(_id)}
      style={{ border: "none", boxShadow: "none", cursor: "pointer" }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          width: "100%",
          height: "200px",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></Box>
      <Box
        sx={{
          height: 50,
          width: 50,
          p: 0.1,
          ml: 2,
          mt: -3,
          zIndex: 5500,
          borderRadius: "50%",
          backgroundColor: "#fff",
        }}
      >
        <Avatar
          src={providerPhoto}
          sx={{ borderRadius: "50%", height: 50, width: 50 }}
          alt="prvodierImage"
        />
      </Box>

      <CardContent sx={{ pt: 0 }}>
        <Typography gutterBottom variant="p" component="div"></Typography>
        <Typography variant="body2" color="#363636" fontSize={12}>
          <span style={{ color: "#55acee" }}>{name}</span>
        </Typography>
        <Typography variant="h6" color="#363636" fontSize={16} component="div">
          {/* {bio.slice(0, 25)} */}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Rating name="read-only" value={parseFloat(AvgRating)} readOnly />
          <span
            style={{ color: "#767676", fontSize: "11px", marginLeft: "4px" }}
          >
            ({reviewUser} Feedback)
          </span>
        </Typography>
        <Typography variant="p" color="#363636" fontSize={14} component="div">
          By <span style={{ color: "#55acee" }}>{providername}</span>
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <p style={{ fontSize: "14px" }}>
          {location}
        </p>
      </Box>
    </Card>
  );
};

export default AllProviderChild;
