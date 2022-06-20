import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import './OverView.css'
import { Container } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import TotalReports from '../TotalReports/TotalReports';



// metrial ui table 

// metrial ui table 








const OverView = () => {

  const [order,setOrder] = useState([''])
  console.log(order)
  useEffect(()=>{
    fetch('http://localhost:7070/api/orders/allorder')
    .then(res=>res.json())
    .then(data => setOrder(data))
  })


  // table state 

  

    return (
 <div style={{backgroundColor:'#F5F5F5'}}>

      {/* <div className='container b'>
      <div className='row'>
      
        <div className='col-md-3'>
            <div>
              <div className='rapperminicard mb-5 mt-5'>
                  <div className='iconrapper'>
                    <h1> <i class="far fa-user"></i> </h1>
                  </div>
                  <div className='mt-3 ms-3'>
                    <h5>12</h5>
                    <h6 style={{color:'#757575'}}>Users</h6>
                  </div>
              </div>
            </div>
        </div>
        <div className='col-md-3'>
        <div>
              <div  className='rapperminicard mb-5 mt-5'>
                  <div className='iconrapper'>
                    <h1 style={{}}> <i class="fas fa-user-shield"></i> </h1>
                  </div>
                  <div className='mt-3 ms-3'>
                    <h5>12</h5>
                    <h6 style={{color:'#757575'}}>Provider</h6>
                  </div>
              </div>
            </div>
        </div>
        <div className='col-md-3'>
            <div>
            <div className='rapperminicard mb-5 mt-5'>
                  <div className='iconrapper'>
                    <h1 > <i class="fas fa-qrcode"></i> </h1>
                  </div>
                  <div className='mt-3 ms-3'>
                    <h5>12</h5>
                    <h6 style={{color:'#757575'}}>Services</h6>
                  </div>
              </div>
            </div>
        </div>
        <div className='col-md-3'>
          <div>
          <div className='rapperminicard mb-5 mt-5'>
                  <div className='iconrapper'>
                    <h1> <i class="far fa-credit-card"></i> </h1>
                  </div>
                  <div className='mt-3 ms-3'>
                    <h5>12</h5>
                    <h6 style={{color:'#757575'}}>Orders</h6>
                  </div>
              </div>
          </div>
        </div>
     


      </div>
      </div> */}

      {/* total overview  */}
      <Container>

      <TotalReports></TotalReports>
      </Container>
  
      {/* total overview  */}


      {/* table  */}
        <h3 className='m-4 recentbooking'>Recent Booking</h3>
        <Container>

          {/* recent booking  */}

    
       <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" >Name </TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Service</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order?.slice(0,5)?.map((row) => (
            <TableRow
              key='Name'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img style={{width:'50px', height:'50px', borderRadius:'50%', marginRight:'10px'}} src='https://i.postimg.cc/rz2qtMkp/profile.jpg' />
           
                {row?.username}
              </TableCell>
              <TableCell align="left">{new Date(row.createdAt)?.toDateString()}</TableCell>
              <TableCell align="left">{row?.serviceName?.slice(0,30)}</TableCell>
              <TableCell align="right">{row?.status}</TableCell>
              <TableCell align="right">${row?.price}</TableCell>
            </TableRow>  
          ))}
        </TableBody>
      </Table>
    </TableContainer> 


   


            {/* recent booking  */}

            <h3 className='paymenttext' > Payments </h3>
       
     <Box className='boxbottom'>
     <TableContainer   component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date </TableCell>
            <TableCell align="left">Provider</TableCell>
            <TableCell align="left">Service</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order?.slice(0,5)?.map((row) => (
            <TableRow
              key='Name'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                           <TableCell align="left">{new Date(row?.createdAt).toDateString()}</TableCell>
              <TableCell component="th" scope="row">
               
            Jane Kim
                {/* {row?.username} */}
              </TableCell>
 
              <TableCell align="left">{row?.serviceName?.slice(0,30)}</TableCell>
              <TableCell align="center">${row?.price}</TableCell>
              <TableCell align="center">{row?.status}</TableCell>
              
            </TableRow>  
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     </Box>

    </Container>

 </div>
    );
};

export default OverView;