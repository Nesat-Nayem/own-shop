import HomeIcon from "@mui/icons-material/Home";
import {
    Breadcrumbs,
    // Breadcrumbs,
    Button,
    Container,
    Grid,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { emphasize, styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { toast } from "react-toastify";
import dateFormat from "../../DateFormat/dateFormat";
import { PDFExport } from "@progress/kendo-react-pdf";
// import dateFormat from "../../Share/DateFormat/dateFormat";
import AdminReport from "./AdminReport";
import Swal from "sweetalert2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#A3D2ED",
        color: theme.palette.common.black,
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
    },
}));

const AdminReports = () => {
    const [attendances, setAttendances] = useState([]);
    console.log(attendances)
    const [inputValue, setInputValue] = useState("");
    const { register, handleSubmit } = useForm();
    const [filterDates, setFilterDates] = useState([]);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [filterData, setFilterData] = useState([]);
    console.log(filterData)

    useEffect(() => {
        // fetch("https://ancient-thicket-61342.herokuapp.com/attendance")
        fetch("http://localhost:7070/api/orders/allorder")
            .then((res) => res.json())
            // .then((data) => setAttendances(data.data.reverse()));
            .then((data) => setAttendances(data.reverse()));
            // .then((data) => console.log(data.data));
            // .then((data) => console.log(data));
    }, []);

    useEffect(() => {
        // const newFilterDate = attendances.filter((date) => date?.date >= startDate && date?.date <= endDate);
        const newFilterDate = attendances.filter((createdAt) => createdAt?.createdAt >= startDate && createdAt?.createdAt <= endDate);
        setFilterDates(newFilterDate);
    }, [attendances, startDate, endDate]);

    // console.log(filterDates);

    const onSubmit = (data, e) => {
        const newStartDate = dateFormat(new Date(data.startDate), "yyyy-MM-dd");
        setStartDate(newStartDate);
        const newEndDate = dateFormat(new Date(data.endDate), "yyyy-MM-dd");
        setEndDate(newEndDate);

        toast.success("Filtering Attendance", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 4000,
        });
    };
    const handleOnBlur = (e) => {
        const number = e.target.value;
        setInputValue(number);
    };


    // search vendor get info 

    const handleOnChange = data =>{
        console.log(data.target.value)
    }
    
        // click to search
        const handleOnSearch = (e) => {
       
            // const filterID = employeesId.filter((data) => (data.ID) === inputValue);
            // if (filterID.length > 0) {
            //     setFilterData(filterID);
            // } else {
            //     setFilterData(employeesId);
            // }
        };




    // filter employees ID
    useEffect(() => {
        if (filterDates.length > 0) {
            const filterID = filterDates.filter((data) => data.ID === inputValue);
            if (filterID.length > 0 || inputValue > 0) {
                setFilterData(filterID);
            } else {
                setFilterData(filterDates);
            }
        } else {
            const filterID = attendances.filter((data) => data.ID === inputValue);
            if (filterID.length > 0 || inputValue > 0) {
                setFilterData(filterID);
            } else {
                setFilterData(attendances);
            }
        }
    }, [inputValue, attendances, filterDates]);

 

    // download total report 
      //download  in pdf format

  const pdfExportComponent = useRef(null);
  const handleOnclick = () => {
    pdfExportComponent.current.save();

    Swal.fire("Your Report Downloaded Successfully!");
  };
    // download total report 
    return (
        <Container>
            {/* Breadcrumbs */}
            <Box sx={{ mb: 4 }}>
                <Typography sx={{ mt: 2, color: "var(--p_color)" }} variant="h4">
                  Admin Report
                </Typography>
                <Typography sx={{ mt: 2, color: "var(--p_color)", textAlign:'center' }} variant="h4">
                 Vendor Information
                </Typography>
          
            </Box>


{/* Admin search  provider info */}
<Box
                sx={{
                    textAlign: "center",
                    width: { xs: "80%", sm: "90%", md: "50%" },
                    margin: "0 auto",
                    border:'1.4px solid Black',
                    borderRadius:'5px',
                    position: "relative",
                    mb: 6,
                }}
                className="id_search"
            >
                <TextField
                    placeholder="Search Vendor Name"
                    variant="outlined"
                    
                    onChange={handleOnChange}
                    sx={{ width: "100%",  }}
                />

                <Button
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "-45px",
                   
                        transform: "translate(-50%, -50%)",
                    }}
                    className="btn_regular"
                    onClick={handleOnSearch}
                >
                    Search
                </Button>
            </Box>


            <Box sx={{ mb: 4 }}>
                <Typography sx={{ mt: 2, color: "var(--p_color)" }} variant="h4">
                 Portal Total Sels Detail Report
                </Typography>
         
          
            </Box>
          
{/* Admin search  provider info */}
            <Box sx={{ mt: 6, mb: 3 }}>
        {/* searchbar */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    sx={{ width: "100%" }}
                    {...register("startDate")}
                    id="outlined-basic"
                    type="date"
                    variant="outlined"
                    label="Start Date *"
                    focused
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    sx={{ width: "100%" }}
                    {...register("endDate")}
                    id="outlined-basic"
                    type="date"
                    variant="outlined"
                    label="End Day *"
                    focused
                  />
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    sx={{
                      background: "var(--p_color) !important",
                      color: "#fff !important",
                      width: "50%",
                    }}
                    className="btn_regular"
                    type="Search"
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>


          {/* Download Salary Sheet */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              className="btn_regular"
              onClick={() => handleOnclick()}
              variant="contained"
              sx={{ width: '100%' }}
            >
              <FileDownloadIcon /> Total Report
            </Button>
          </Grid>
        </Grid>
      </Box>


            {/* filter date and downlod selery sheed  */}
            <PDFExport ref={pdfExportComponent}>
            <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
              
                    <TableHead>
                        <TableRow>
                            {/* <StyledTableCell>ID</StyledTableCell> */}
                            <StyledTableCell align="left">Service Name</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="right">Provider</StyledTableCell>
                            <StyledTableCell align="center">User</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            {/* <StyledTableCell align="right">Holiday</StyledTableCell>  */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterData.map((attendance) => (
                            <AdminReport key={attendance._id} attendance={attendance}></AdminReport>
                        ))}
                    </TableBody>
                  
                </Table>
            </TableContainer> 
            </Box>
            </PDFExport>
           
        </Container>
    );
};

export default AdminReports;