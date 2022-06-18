import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './OverView.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee,faBagShopping } from '@fortawesome/free-solid-svg-icons'
// import { FaBeer } from 'react-icons/fa';



function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];






const OverView = () => {
    return (
 <div style={{backgroundColor:'#F5F5F5'}}>

      <div className='container b'>
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
      </div>

      {/* table  */}
        <h3 className='m-4'>Recent Booking</h3>
      <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img style={{width:'50px', height:'50px', borderRadius:'50%', marginRight:'10px'}} src='https://i.ibb.co/1qdnh78/img-1.jpg' />
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

 </div>
    );
};

export default OverView;