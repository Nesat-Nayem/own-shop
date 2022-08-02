import { TableCell, FormControl, MenuItem, TextField, TableRow, Button, } from '@mui/material';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

let approvestyle = {
  // backgroundColor: 'green',
  color: "green",
  fontWeight: "bold",
};
let pendingstyle = {
  // backgroundColor: 'green',
  color: "#D9512C",
  fontWeight: "bold",
};

const OrdersTableRow = ({ data }) => {
    console.log(data._id)
    const [isUpdated, setIsUpdated] = useState(null);
    console.log(isUpdated)
    const [isDeleted, setIsDeleted] = useState(null);
  

  const handleUpdateStatus = (id) => {
    const statusUpdate ={
      status: 'approve'
}
    // console.log(id)
    fetch(`https://lit-sands-58263.herokuapp.com/api/orders/status/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
         
        },
        body: JSON.stringify(statusUpdate),
      })
      // .then()

      .then(res => res.json())
      .then(data => {
        if (data) {
                      Swal.fire(
                        "Updated!",
                        "Order status updated successfully.",
                        "success"
                      );
                  
                    } else {
                      cogoToast.error("something went wrong");
                
                    }
      
      })
  }

  

    return (
        <TableRow
            key={data._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {data?.serviceName}
            </TableCell>
            <TableCell >{data.providerName}</TableCell>
            <TableCell >{data.username}</TableCell>
            <TableCell >{data.price}</TableCell>
            <TableCell
                style={
                  data.status === "approve" ? approvestyle : pendingstyle
                } 
            > {data.status} </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleUpdateStatus(data?._id)}
                      variant="outlined" color="error"> {(data?.status === 'approve' ? 'Approved ' : 'approve')}
                    </Button>
                  </TableCell>
        </TableRow>
    );
};

export default OrdersTableRow;