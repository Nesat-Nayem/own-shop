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
import {  useSelector } from "react-redux";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { toast } from "react-toastify";
// import dateFormat from "../../DateFormat/dateFormat";
import { PDFExport } from "@progress/kendo-react-pdf";
// import dateFormat from "../../Share/DateFormat/dateFormat";
import VendorReport from "./VendorReport";
import Swal from "sweetalert2";
import dateFormat from "../DateFormat/dateFormat";

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

const VendorReports = () => {
    const [attendances, setAttendances] = useState([]);
    console.log(attendances)
    const [inputValue, setInputValue] = useState("");
    const { register, handleSubmit } = useForm();
    const [filterDates, setFilterDates] = useState([]);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [filterData, setFilterData] = useState([]);
    const user = useSelector((state) => state.user.user)
console.log(user)
    useEffect(() => {
    
        // fetch("http://localhost:7070/api/orders/allorder")
        fetch(`http://localhost:7070/api/orders/provideremailorder/${user.email}`)
            .then((res) => res.json())
        
            .then((data) => setAttendances(data.reverse()));
            // .then((data) => console.log(data.data));
            // .then((data) => console.log(data));
    }, []);

    useEffect(() => {
        const newFilterDate = attendances.filter((date) => date?.date >= startDate && date?.date <= endDate);
        setFilterDates(newFilterDate);
    }, [attendances, startDate, endDate]);
    console.log(filterDates);

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

    // Breadcrumbs
    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const backgroundColor = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800];
        return {
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            "&:hover, &:focus": {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            "&:active": {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    });

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
            Vendor Total Sels Report
            </Typography>
      
        </Box>

      

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
          <FileDownloadIcon /> Vendor Report
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
                        <StyledTableCell align="left">Service Id</StyledTableCell>
                        <StyledTableCell align="left">Service Name</StyledTableCell>
                        <StyledTableCell align="left">Date</StyledTableCell>
                        <StyledTableCell align="left">User Email</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        {/* <StyledTableCell align="right">Holiday</StyledTableCell>  */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterData.map((attendance) => (
                        <VendorReport key={attendance._id} attendance={attendance}></VendorReport>
                    ))}
                </TableBody>
              
            </Table>
        </TableContainer> 
        </Box>
        </PDFExport>
       
    </Container>
    );
};

export default VendorReports;