import {
  Box,
  Container,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import styles from "./AddCategory.module.css";

import LayersIcon from "@mui/icons-material/Layers";
import axios from "axios";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Table from "@mui/material/Table";
import cogoToast from "cogo-toast";
import Swal from "sweetalert2";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [photoURL, setPhotoURL] = useState("");

  // category submit:
  const onSubmit = (data) => {
    // e.preventDefault()
    const userinfo = {
      name: data.name,
      img: photoURL,
    };
    console.log(userinfo);

    axios
      .post("http://localhost:7070/api/category/create", userinfo)
      .then(function (response) {
        console.log("success", response);

        Swal.fire("Congreats!", "Add New Category!", "success");
      })
      .catch(function (error) {
        console.log(error);
      });

    reset();
  };
  // category submit:
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


//   fetch all category 

  const [newCategory, setnewCategory] = useState([''])
  console.log(newCategory)
  useEffect(()=>{
    fetch('http://localhost:7070/api/category/getcategories')
    .then(res => res.json())
    .then(data => setnewCategory(data.categoryList))
  })
//   fetch all category 


  // metrial ui data table
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }

  // metrial ui data table

  // image upload handler
  const imageUploadHandler = (e) => {
    const imageData = new FormData();
    imageData.set("key", "fe834545cf9ccab761e32c03f567e890");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setPhotoURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container sx={{ width: "100%", mb: 5, marginTop: "40px" }}>
      <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
        <Typography>
          <LayersIcon className={`${styles.assignmentIcon}`} />{" "}
        </Typography>
        <Typography>
          <span style={{ fontSize: "26px" }}>Category</span> <br />{" "}
          <span style={{ color: "#969494" }}>All Category</span>
        </Typography>
      </Box>

      <Box className={`${styles.tableContainer}`}>
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
          Add New Category
        </Typography>
        <hr />
        <div className="mt-2">
          <div className="form-container">
            <div>
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-3 mb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Category Name
                          <sup className="text-danger fw-bold fs-6">*</sup>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Category"
                          style={{ background: "#E5E5E5" }}
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span className="text-danger">
                            Please enter category name.
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="p-3 border bg-light">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          style={{ fontWeight: "bold" }}
                        >
                          Category Img
                        </label>

                        <input
                          style={{ border: "1px solid black" }}
                          className=""
                          placeholder="photoURL"
                          id="photoURL"
                          type="file"
                          {...register("photoURL", { required: true })}
                          onBlur={imageUploadHandler}
                        />
                        {/* errors will return when field validation fails  */}
                        {errors.photoURL && (
                          <span className="">category image is required</span>
                        )}
                  
                      </div>
                    </div>
                  </div>
                </div>
                {/* button  */}
                <div className="row gx-3 mb-3">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                    <div className="p-3">
                      <div>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Is Fetured
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                    <div className="p-3">
                      <div>
                        <Box sx={{ textAlign: "center" }}>
                          <input
                            type="reset"
                            className={`${"btn"} ${styles.resetBtn}`}
                            style={{ background: "#251D58", color: "#fff" }}
                            value="Reset"
                          />
                          <input
                            type="submit"
                            className={`${"btn"} ${styles.saveBtn}`}
                            style={{ background: "#251D58", color: "#fff" }}
                            value="Save"
                          />
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Box>

      {/* manage category form  */}
      <h3 className="my-5">Manage Category</h3>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Fetured</TableCell>
            <TableCell align="right">Action</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {newCategory?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <img style={{width:'50px', height:'50px', marginRight:'10px'}} src={row?.img} />
                {row.name}
              </TableCell>
              <TableCell align="center">{new Date(row?.createdAt).toDateString()}</TableCell>
              <TableCell align="center">On</TableCell>
              <TableCell align="right">Edit</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </Container>
  );
};

export default AddCategory;
