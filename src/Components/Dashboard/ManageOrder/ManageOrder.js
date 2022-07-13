import React, { useState, useEffect } from 'react';
import OrdersTable from './OrdersTable'
import { CircularProgress, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders,allData } from '../../../redux/dataSlice/dataSlice';
const ManageOrder = () => {
    const dispatch = useDispatch()
   const {allOrder,getLoad} = useSelector(allData)

   console.log('from redux',allOrder)

  
  useEffect(()=>{

    dispatch(getAllOrders())
  },[])


    return (
        <>
        {
            getLoad ? <Stack alignItems='center'><CircularProgress></CircularProgress></Stack> : <OrdersTable allOrder={allOrder} all></OrdersTable>
        }
    </>
    );
};

export default ManageOrder;