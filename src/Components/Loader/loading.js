import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Loading = () => {

    return (

        <Box sx={{ width: '100%', height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Box>
            <Typography style={{ textAlign: "center",  }} variant='h5'>Loading ....</Typography>
            <Typography style={{ textAlign: "center", marginTop: "10px" }} variant='h6'>Please Wait</Typography>
           
            </Box>


        </Box>

    );
};

export default Loading;