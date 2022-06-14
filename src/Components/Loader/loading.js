import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Loading = () => {

    return (

        <Box sx={{ width: '100%', height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <img width="300" src="https://ibb.co/1G3Ytvm" alt="loadergif" />
                <Typography style={{ textAlign: "center", marginBottom: "10px" }} variant='h4'>Please Wait</Typography>
               
            </Box>


        </Box>

    );
};

export default Loading;