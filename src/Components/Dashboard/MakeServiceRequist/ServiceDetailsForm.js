import React from "react";
import { Typography, TextField, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ServiceOptionsRow from "./ServiceOptionsRow";

const subButton = {
  backgroundColor: "#FF5E14",
  // width: "90%",
  margin: "15px 0 25px 0",
  color: "#fff",
  letterSpacing: "2px",
};

const ServiceDetailsForm = ({
  handleAddMoreDetails,
  totalRow,
  pos,
  serviceOption,
  handleServiceOptons,
  handleServiceChange,
}) => {
  const optionRow = serviceOption.Key;
  //
  return (
    <Grid container spacing={2}>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{ marginTop: "30px", paddingLeft: "10px" }}
      >
        {/* {`Service ${pos + 1}`} */}
      </Typography>
      <Grid item container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            id="serviceOptionsTitle"
            label="Service info"
            variant="standard"
            fullWidth
            name="Title"
            onChange={(e) => handleServiceChange(e, pos)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            id="serviceOptionsTitle"
            label="Service Category"
            variant="standard"
            fullWidth
            name="Title"
            onChange={(e) => handleServiceChange(e, pos)}
          />
        </Grid>
      </Grid>
      {optionRow.map((item, index) => (
        <ServiceOptionsRow
          key={index}
          {...item}
          handleServiceOptons={handleServiceOptons}
          pos={pos}
        />
      ))}
    </Grid>
  );
};

export default ServiceDetailsForm;
