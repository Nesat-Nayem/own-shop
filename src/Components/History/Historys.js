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
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { toast } from "react-toastify";
import { PDFExport } from "@progress/kendo-react-pdf";
import History from "./History";
import Swal from "sweetalert2";
import dateFormat from "../DateFormat/dateFormat";
import Loading from "../Loader/loading";

const Historys = () => {

  const [attendances, setAttendances] = useState([]);
  // console.log(attendances);
  const [inputValue, setInputValue] = useState("");
  const { register, handleSubmit } = useForm();
  const [filterDates, setFilterDates] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [filterData, setFilterData] = useState([]);

  const user = useSelector((state) => state.user.user);
  const [loading,setLoading] = useState(false)
  console.log(loading)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:7070/api/orders/user/${user._id}`)
      .then((res) => res.json())
      .then((data) => setAttendances(data.reverse()));
      setLoading(false)
  }, []);

  useEffect(() => {
    const newFilterDate = attendances.filter(
      (date) => date?.date >= startDate && date?.date <= endDate
    );
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
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
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

    Swal.fire("Your History Downloaded Successfully!");
  };
  // download total report
  return (
    <>
    {
      loading === true ? <Loading></Loading> : 
      <Container>
      {/* Breadcrumbs */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{ mt: 2, color: "var(--p_color)", textAlign: "center" }}
          variant="h4"
        >
          Total History
        </Typography>
      </Box>

      <Box sx={{ mt: 6, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} sx={{ display: "flex" }}>
            <Button
              className="btn_regular"
              onClick={() => handleOnclick()}
              variant="contained"
              sx={{ width: "100%" }}
            >
              <FileDownloadIcon /> History
            </Button>
          </Grid>
        </Grid>
      </Box>

      <PDFExport ref={pdfExportComponent}>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Service Name</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Provider Email</TableCell>
                  <TableCell align="left">Provider Number</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterData.map((attendance) => (
                  <History
                    key={attendance._id}
                    attendance={attendance}
                  ></History>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </PDFExport>
    </Container>
    }
    
    </>
  );
};

export default Historys;
