import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Loading = () => {

    return (

        <Box sx={{ width: '100%', height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Box>
            <Typography style={{ textAlign: "center", marginTop: "100px" }} variant='h4'>Please Wait</Typography>
                <img width="300" src="https://cdn.dribbble.com/users/3148081/screenshots/6176842/rocket.gif" alt="loadergif" />
               
               
            </Box>


        </Box>

    );
};

export default Loading;