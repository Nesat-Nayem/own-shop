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
import PendingproviderStatusModal from './PendingproviderStatusModal';
import Swal from 'sweetalert2';



const PendingProviders = () => {



const [provider,setProvider] = useState([''])
// console.log(provider)
useEffect(()=>{
    fetch('http://localhost:7070/api/getprovider')
    .then(res=>res.json())
    .then(data=>setProvider(data))
    // .then(data=>console.log(data.length))


})

const [modalIsOpen, setIsOpen] = useState(false);
const [blogId, setBlogId] = useState(null);

  // modal functions

  function openModal(id) {
    setIsOpen(true);
    setBlogId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }



//   delete provider 

const handleDeleteCustomer = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7070/api/deleteProvider/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data._id) {
                Swal.fire("Deleted!", "Customer has been deleted.", "success");
                // alert("Deleted Successfully");
                // const remaining = jobs.filter((ema) => ema._id !== id);
                // setJobs(remaining);
              }
            });
        // dispatch(deleteCustomerToDB(id));
        // Swal.fire("Deleted!", "Customer has been deleted.", "success");
        // Set reload
        // setReload(!reload);
      }
    });
  };



    return (

        <>
 
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
                                <TableCell>update</TableCell>
                                <TableCell>Action</TableCell>
                              
                            </TableRow>
                        </TableHead>
                        <TableBody>

                

                          {
                            provider.map((provider)=>(

                                <TableRow
                             
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                <img style={{width:'50px', height:'50px', borderRadius:'50%', marginRight:'10px'}} src={provider?.photoURL} />
                                    {/* David Jon */}
                                    {provider?.username}
                                    {/* <Avatar sx={{ borderRadius: 0 }} src={provider?.Img} alt="serviceImage" /> */}
                                </TableCell>
                                <TableCell >
                                    {/* {provider?.Name} */}

                                    {/* +178767676767 */}
                                    {provider?.phone}

                                    </TableCell>
                                <TableCell >
                                {provider?.email}
                                    {/* davidlian@gmail.com */}
                                    {/* <Avatar src={provider?.data?.travelImg} alt="providerImage" /> */}
                                </TableCell>
                                <TableCell >
                                    {/* {provider?.data?.providerName} */}
                                    {/* 02/02/22 */}
                                    {new Date(provider.createdAt)?.toDateString()}
                                    </TableCell>
                                <TableCell  >
                                    {/* {provider?.data?.number} */}
                                    {/* pending */}
                                    {provider?.access}
                                    </TableCell>
                                <TableCell >
                                    {/* {provider?.data?.email} */}
                                    <Button      onClick={() => openModal(provider?._id)} >updated</Button>

                                    <PendingproviderStatusModal
                            modalIsOpen={modalIsOpen}
                            closeModal={closeModal}
                            jobTitle={provider?.username}
                            id={blogId}
                          />
                                    </TableCell>
                                    <TableCell >
                                    {/* {provider?.data?.number} */}
                                    {/* pending */}
                                    {/* {provider?.access} */}
                                    <Button onClick={() => handleDeleteCustomer(provider?._id)} >Delete</Button>
                                    </TableCell>
                              
                            </TableRow>


                            ))}
  

                  

                    
                        </TableBody>
                        
                    </Table>
                </TableContainer>
   
        </>
    );
};

export default PendingProviders;