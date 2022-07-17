import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const History = ({ attendance }) => {
  const {
    ID,
    serviceName,
    price,
    providerNumber,
    createdAt,
    providerEmail,
    holiday,
  } = attendance;
  return (
    <>
      <StyledTableRow>
        <StyledTableCell align="left">{serviceName}</StyledTableCell>
        <StyledTableCell align="left">
          {new Date(createdAt).toDateString()}
        </StyledTableCell>
        <StyledTableCell align="left">{providerEmail}</StyledTableCell>
        <StyledTableCell align="left">{providerNumber}</StyledTableCell>
        <StyledTableCell align="center">$ {price}</StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default History;
