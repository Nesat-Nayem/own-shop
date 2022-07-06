import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrdersTable from './OrdersTable'
import { CircularProgress, Stack } from '@mui/material';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        axios.get('https://dry-sea-00611.herokuapp.com/orders/all/pending')
            .then(res => setAllOrders(res.data))
            .finally(() => setLoading(false));
    }, []);
    return (
        <>
        {
            loading ? <Stack alignItems='center'><CircularProgress></CircularProgress></Stack> : <OrdersTable allOrders={allOrders} all></OrdersTable>
        }
    </>
    );
};

export default ManageOrder;