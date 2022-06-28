// import { Box, Container } from '@mui/system';
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
import Table from "@mui/material/Table";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const SubCategory = ({catego}) => {
  // console.log(props?.catego)
// const {catego} = props;
// console.log(catego)
// console.log(catego?.children)
const {categories} = useAuth()


  return (
    <Container sx={{  }}>
                       
{/* <TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
   <TableBody sx={{padding:'0px'}}> 
                

               {catego?.children?.map((row) => (




             
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                      src={row?.img}
                    />
                  {row?.name}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    {row?.parentName}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(row?.createdAt).toDateString()}
                  </TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
             


              ))}
            

             
          </TableBody>

                {/*    </Table>
        </TableContainer>   */}

    </Container>
  );
};

export default SubCategory;
