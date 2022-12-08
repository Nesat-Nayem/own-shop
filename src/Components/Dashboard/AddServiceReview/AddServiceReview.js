import axios from "axios";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddServiceReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setreview] = useState([]);
  console.log(review._id);
  useEffect(() => {
    fetch(`https://energetic-pear-threads.cyclic.app/api/products/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setreview(data));
  }, []);
  console.log(id);
  const [value, setValue] = React.useState(0);
  const [alert, setAlert] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  // input style
  const inputStyle = {
    width: "100%",
    mb: 3,
  };

  // add review to user

  const onSubmit = (data) => {
    const reviewdata = {
      username: data.user,
      rating: value,
      productId: review._id,
      review: data.review,
    };

    axios
      .post("https://energetic-pear-threads.cyclic.app/api/postreview", reviewdata)

      .then(function (response) {
        Swal.fire("Submited!", "Recorded your review!", "success");
        navigate("/dashboard/myorder");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(reviewdata);
  };

  return (
    <>
      <Paper elevation={2} sx={{ px: 3, pt: 3, width: "47%" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 2, fontSize: 21 }}
        >
          Write a review for{" "}
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexWrap: "wrap", columnGap: 20 }}
        >
          <Box sx={{ width: { xs: "100%", lg: "48%" } }}>
            <TextField
              {...register("user", { required: true })}
              sx={inputStyle}
              id="outlined-basic"
              label="Your Name *"
              variant="outlined"
            />

            <Box
              sx={{
                mb: 2,
                border: "1px solid #c4c4c4",
                p: 0.8,
                borderRadius: 1,
                pl: 1.5,
              }}
            >
              <label style={{ color: "#666666", display: "bolck" }}>
                Rating *
              </label>{" "}
              <br />
              <Rating
                sx={{ mt: 0.5 }}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>

            {alert && (
              <Alert severity="success" sx={{ fontStyle: "italic" }}>
                Thanks for your review
              </Alert>
            )}
          </Box>

          <Box sx={{ width: { xs: "100%", lg: "48%" } }}>
            <TextField
              {...register("review", { required: true })}
              sx={inputStyle}
              multiline
              rows={5}
              id="outlined-basic"
              label="Your Message *"
              variant="outlined"
            />

            <Button
              type="submit"
              sx={{ width: "100%", borderRadius: 0, mb: 2 }}
              variant="outlined"
            >
              SUBMIT{" "}
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default AddServiceReview;
