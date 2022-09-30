import {
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
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { toast } from "react-toastify";
import dateFormat from "../../DateFormat/dateFormat";
import { PDFExport } from "@progress/kendo-react-pdf";
import AdminReport from "./AdminReport";
import Swal from "sweetalert2";
import { allData, getAllOrders } from "../../../redux/dataSlice/dataSlice";
import {useDispatch,useSelector} from 'react-redux'

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
  const [inputValue, setInputValue] = useState("");
  const { register, handleSubmit } = useForm();
  const [filterDates, setFilterDates] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [filterData, setFilterData] = useState([]);

  // console.log('filterdata',filterData);
  const {allOrder,getLoad} = useSelector(allData)
  // console.log('redux admin report',getLoad)
  // console.log('redux admin report',allOrder)

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAllOrders())



  }, []);

  useEffect(() => {
    const newFilterDate = allOrder.filter(
      (createdAt) =>
        createdAt?.createdAt >= startDate && createdAt?.createdAt <= endDate
    );
    setFilterDates(newFilterDate);
  }, [allOrder, startDate, endDate]);

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
      const filterID = allOrder.filter((data) => data.ID === inputValue);
      if (filterID.length > 0 || inputValue > 0) {
        setFilterData(filterID);
      } else {
        setFilterData(allOrder);
      }
    }
  }, [inputValue, allOrder, filterDates]);
  const [text, setText] = useState("");

 const [category,setCategory]= useState([])
//  console.log(category)

 const filterServicess = (e) =>{
  setCategory(e.target.value)
 }

 useEffect(()=>{
  fetch(`https://lit-sands-58263.herokuapp.com/api/orders/category/${category}`)
  .then(res=>res.json())
  .then(data=>setFilterData(data))
 },[category])
 

  


  const pdfExportComponent = useRef(null);
  const handleOnclick = () => {
    pdfExportComponent.current.save();

    Swal.fire("Your Report Downloaded Successfully!");
  };
  // download total report
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ mt: 2, color: "var(--p_color)" }} variant="h4">
          Portal Total Sels Detail Report
        </Typography>

        {/* download button  */}

        <Button
          sx={{ padding: "2px 50px !important", height: "50px !important" }}
          className="btn_regular "
          onClick={() => handleOnclick()}
          variant="contained"
        >
          <FileDownloadIcon /> Total Report
        </Button>

        {/* download button  */}
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
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", alignItems: "center" }}
                >
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
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <select
              className="form-select mb-3"
              style={{ background: "#E5E5E5" }}
              // value={category}

              onChange={filterServicess}
            >
              <option value="">All Category</option>
              <option value="Construction">Construction</option>
              <option value="Computer">Computer</option>
              <option value="Intriory">Interior</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Electrical">Electrical</option>
              <option value="carwash">Car Wash</option>
            </select>
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
                  <StyledTableCell align="left">Service Name</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="right">Provider</StyledTableCell>
                  <StyledTableCell align="center">User</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterData.map((attendance) => (
                  <AdminReport
                    key={attendance._id}
                    attendance={attendance}
                  ></AdminReport>
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
