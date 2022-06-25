import { CardActionArea, Typography, CardMedia, CardContent, Grid, Card, Avatar, Chip, Button, IconButton, Stack, Tooltip, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import MessageIcon from '@mui/icons-material/Message';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { allData, parentServiceId, reviewServiceIndex } from '../../../../redux/dataSlice/dataSlice';

const MyOrdersCard = ({ service, notShow, index }) => {

    // const [getProvider, setGetProvider] = useState({});
    const [loading, setLoading] = useState(true);
    // const { user, singleServiceDetails, id } = useSelector(allData);
    const navigate = useNavigate();
    // const dispatch = useDispatch();


    // const handleRouteChange = (selectServiceId, index, service) => {
    //     navigate(`/dashboard/review/${selectServiceId}`);
    //     dispatch(reviewServiceIndex(parseInt(index) + 1));
    //     const data = { selectServiceId, email: user.email, providerEmail: service.providerEmail };
    //     dispatch(parentServiceId(data));
    // };


    // useEffect(() => {
    //     setLoading(true)
    //     axios.get(`https://dry-sea-00611.herokuapp.com/provider/${service.providerEmail}`)
    //         .then(res => {
    //             setGetProvider(res.data);
    //             setLoading(false);
    //         })
    // }, [])
    return (

        <Card sx={{ mb: 4, height: notShow ? 'initial' : '100%' }}>

            <CardMedia
                component="img"
                height="140"
                image={service?.serviceImg}
                alt="green iguana"
            />

            <CardContent>

                <Typography sx={{ fontSize: 22 }} gutterBottom variant="h5" component="div">
                    {service?.serviceName}
                </Typography>

                {/* <Typography sx={{ fontSize: 15, fontWeight: 'bold', mb: 1 }} variant="h6">Status: {service.status}</Typography> */}

                <Box sx={{}}>

                    <Typography sx={{ fontSize: 15, fontWeight: 'bold', mb: 1,marginTop:'20px' }} variant="h6"> Status: {service?.status}</Typography>

                    <Typography sx={{ fontSize: 15, fontWeight: 'bold', }} variant="h6">Price: ${service?.price} </Typography>

                </Box>

                <Typography sx={{ fontSize: 15, fontWeight: 'bold', marginTop:'30px' }} variant="h6">Service provider -</Typography>


               {/* { */}
                    {/* // loading ? <Skeleton animation="wave" sx={{ height: 70 }} /> :  */}
                    {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mt: 1, border: '1px solid #d0d0d0', borderRadius: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mt: 1, border: '1px solid #d0d0d0', borderRadius: 6 }}> */}
                        {/* <Stack direction='row' alignItems='center'> */}
                            {/* <Avatar alt="Remy Sharp" src='https://i.postimg.cc/PrNrH6Wt/ppimg23.png' /> */}
                            {/* <Stack sx={{ ml: 1 }}> */}
                                {/* <Typography sx={{ fontSize: 15 }} variant="h6">{service?.providerName}</Typography>
                                <Typography sx={{ fontSize: 13 }} variant="h6">{service?.providerEmail}</Typography> */}
                            {/* </Stack> */}
                        {/* </Stack> */}
                        {/* {
                            !notShow && service?.provider?.email !== service.email && <Tooltip title='Chat with this provider'><IconButton sx={{ mr: 2 }} component={NavLink} to={`/dashboard/ordersChat/${service._id}`} ><MessageIcon sx={{ color: '#ff5e14' }}></MessageIcon></IconButton></Tooltip>
                        } */}

                    {/* </Box>
                    </Box> */}
                {/* // }  */}

                {/* <Typography sx={{ fontSize: 15, fontWeight: 'bold', mt: 1 }} variant="h6">Order info -</Typography> */}
               

                <Box>
                <Avatar sx={{margin:'10px 30px',}} alt="Remy Sharp" src='https://i.postimg.cc/PrNrH6Wt/ppimg23.png' />
                    <Typography sx={{ fontSize: 15,  }} variant="h6">Name:- {service?.providerName}</Typography>

                    <Typography sx={{ fontSize: 15 }} variant="h6">Email:- {service?.providerEmail}</Typography>

                    <Typography sx={{ fontSize: 15 }} variant="h6">Phone:- {service?.providerNumber}</Typography>
                </Box>

                {/* <Button to={`/dashboard/review/${service.selectServiceId}`} onClick={() => handleRouteChange(service.selectServiceId, index, service)} style={{ marginTop: 10, display: 'block', letterSpacing: 2, textAlign: 'center' }} variant="outlined" color='warning'>WRITE A REVIEW?</Button> */}
                <Button to={`/dashboard/review/${service.selectServiceId}`}  style={{ marginTop: 10, display: 'block', letterSpacing: 2, textAlign: 'center' }} variant="outlined" color='warning'>WRITE A REVIEW?</Button>

            </CardContent>
        </Card>
    );
};

export default MyOrdersCard;