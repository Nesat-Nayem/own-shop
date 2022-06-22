import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Avatar, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';



const PendingProviders = () => {

    const user = useSelector((state)=> state.user.user)
    console.log(user)

// const [provider,setProvider] = useState([''])
// // console.log(provider?.username)
// useEffect(()=>{
//     fetch('http://localhost:7070/api/users/alluser')
//     .then(res=>res.json())
//     .then(data=>setProvider(data))
//     // .then(data=>console.log(data.length))


// })
    return (

        <>
            {/* {
                pendingProviders.length === 0 && <Typography variant='h6'>No pending providers</Typography>
            } */}
            {/* {
                // provider.role !== 0 && */}


                
            {/* {  provider?.role === vendor &&  */}
                <TableContainer component={Paper}> 

                    <Table sx={{ width: '100%' }} aria-label="simple table">
                        <TableHead sx={{ boxShadow: 2 }}>
                            <TableRow>
                                <TableCell>
                                    
                                    Provider Name</TableCell>
                                <TableCell>Contract No</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Reg Date</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                              
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* {provider.map((provider) => { 

                            console.log(provider.role)

                          {  provider?.role === 'vendor' ? <> */}
                           <TableRow
                                    // key={provider?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                    <img style={{width:'50px', height:'50px', borderRadius:'50%', marginRight:'10px'}} src='https://i.postimg.cc/rz2qtMkp/profile.jpg' />
                                        {/* David Jon */}
                                        {/* {provider?.Name} */}
                                        {/* <Avatar sx={{ borderRadius: 0 }} src={provider?.Img} alt="serviceImage" /> */}
                                    </TableCell>
                                    <TableCell >
                                        {/* {provider?.Name} */}

                                        +178767676767

                                        </TableCell>
                                    <TableCell >
                                        davidlian@gmail.com
                                        {/* <Avatar src={provider?.data?.travelImg} alt="providerImage" /> */}
                                    </TableCell>
                                    <TableCell >
                                        {/* {provider?.data?.providerName} */}
                                        02/02/22
                                        </TableCell>
                                    <TableCell >
                                        {/* {provider?.data?.number} */}
                                        pending
                                        </TableCell>
                                    <TableCell >
                                        {/* {provider?.data?.email} */}
                                        <Button>action</Button>
                                        </TableCell>
                                  
                                </TableRow>
                          {/* </> :<> */}
                          {/* <h1>no provider right now</h1>
                          </> */}

                               
                          {/* }


                            })} */}
                        </TableBody>
                        
                    </Table>
                </TableContainer>
         {/* }  */}
        </>
    );
};

export default PendingProviders;