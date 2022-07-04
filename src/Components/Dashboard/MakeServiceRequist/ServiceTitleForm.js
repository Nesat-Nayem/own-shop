import React from "react";
import { TextField, Grid } from "@mui/material";

const ServiceTitleForm = ({ handleChange }) => {
  return (
    <Grid item container spacing={3}>
      <Grid item md={6} sm={12} xs={12}>
        <TextField
          id="serviceName"
          label="Service Title"
          variant="standard"
          fullWidth
          name="serviceName"
          onChange={handleChange}
        />
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <TextField
          id="serviceImage"
          label="Service Image"
          variant="standard"
          fullWidth
          type="file"
          name="serviceImage"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ServiceTitleForm;
