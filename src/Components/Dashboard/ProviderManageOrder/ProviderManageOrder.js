import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import OrdersTable from '../ManageOrder/OrdersTable';

const ProviderManageOrder = () => {
    const [allOrder, setAllOrders] = useState([]);
    console.log('providerManageOrder',allOrder)
    const user = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(true);
    console.log(loading)
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:7070/api/orders/provideremailorder/${user.email}`)
            .then(res => setAllOrders(res.data))

            .finally(() => setLoading(false));
    }, []);

    return (
             <>
        {
            loading ? <Stack alignItems='center'><CircularProgress></CircularProgress></Stack> : <OrdersTable allOrder={allOrder} ></OrdersTable>
        }
    </>
    );
};

export default ProviderManageOrder;