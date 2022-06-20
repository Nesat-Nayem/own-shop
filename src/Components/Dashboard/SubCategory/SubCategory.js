// import { Box, Container } from '@mui/system';
import { Box, Container, Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import React, { useState } from 'react';
// import Table from "@mui/material/Table";
import { useForm } from "react-hook-form";
import styles from './SubCategory.module.css';
import AssignmentIcon from "@mui/icons-material/Assignment";
import axios from "axios";
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// metrial ui daa 

const columns = [
    { id: 'name', label: 'Sub Category', minWidth: 170 },
    { id: 'code', label: 'Category', minWidth: 100 },
    {
      id: 'population',
      label: 'Date',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Action',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },

  ];
  
  function createData(name, code, population, size) {
   
    return { name, code, population, size, };
  }
  
  const rows = [
    createData('Hole painting', 'pentaing', 12/12/22, 'edit'),
    createData('Hole painting', 'pentaing', 12/12/22, 'edit'),
    
   
  ];
// metrial ui daa 

const SubCategory = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [photoURL, setPhotoURL] = useState("");


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value );
      };
    // metrial ui data table 
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
      
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
        <Container sx={{ width: "100%", mb: 5 }}>
        <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
            <Typography>
                <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
            </Typography>
            <Typography>
                <span style={{ fontSize: "26px",  }}>Sub Category</span>{" "}
                <br /> <span style={{ color: "#969494" }}>Sub Categories</span>
            </Typography>
        </Box>


        <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Add Sub Category
                </Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                            <form onSubmit={console.log('hi')}>
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
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

                                    
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Category Img
                                                </label>

                                                <input style={{border:'none'}}
                                                    className=""
                                                    placeholder="photoURL"
                                                    id="photoURL"
                                                    type="file"
                                                    {...register("photoURL", { required: true })}
                                                    onBlur={imageUploadHandler}
                                                    />
                                                    {/* errors will return when field validation fails  */}
                                                    {errors.photoURL && (
                                                    <span className="">
                                                        License is required
                                                    </span>
                                                    )}
                                                {/* <textarea
                                                    className="form-control"
                                                    rows="1"
                                                    placeholder="Details"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("details", { required: false })}
                                                ></textarea> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        {/* button  */}
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                                        <div className="p-3">
                                            <div>
                                            <InputLabel id="demo-simple-select-label">IsFetured</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                label="IsFetured"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Yes</MenuItem>
                                                <MenuItem value={20}>No</MenuItem>
                                               
                                            </Select>
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
            <h3 className="my-5">Manage Sub Category</h3>

           <Box>
           <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
           </Box>

        </Container>
    );
};

export default SubCategory;