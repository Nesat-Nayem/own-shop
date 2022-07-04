import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Header from "../Header/Header";
const ContactUs = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Header></Header>

      <Box
        sx={{
          backgroundImage: `url(https://i.ibb.co/YP95Zjt/contact-us-banner.jpg)`,
          height: "50vh",
          objectFit: "cover",
          backgroundSize: "cover",
          marginTop: "90px",
        }}
      ></Box>

      {/* contact info */}
      <ContactInfo />
      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default ContactUs;
