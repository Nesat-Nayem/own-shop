import { Avatar, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Rate from "@mui/material/Rating";
import { Box } from "@mui/system";

const Review = (props) => {
  const { productId, username, review, date, rating } = props.review;
  // console.log(productId);

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
        <Avatar>{username.slice(0, 1)}</Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 15 }}>
            {username}
          </Typography>

          <Rate
            name="read-only"
            sx={{ fontSize: 16, mt: 1 }}
            value={rating}
            readOnly
          />

          <Typography variant="body" sx={{ display: "block" }}>
            {review}
          </Typography>
          <Typography
            variant="body"
            sx={{ display: "block", fontWeight: 500, color: "#8F8F8F", my: 1 }}
          >
            <b style={{ color: "black" }}>{new Date(date)?.toDateString()}</b>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Review;
