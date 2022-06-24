import { Container } from '@mui/material';
import React from 'react';
import ProviderTotalReport from '../AddAService/ProviderTotalReport/ProviderTotalReport';
import ProviderChart from '../ProviderChart/ProviderChart';

const ProviderOverview = () => {
    return (
        <div style={{backgroundColor:'#E5E5E5',paddingBottom:'20px', marginTop:'-50px'}}>
        {/* <Container> */}
        <div className='container ps-3 pe-1 mt-3'>
        <ProviderTotalReport></ProviderTotalReport>
        </div>

        <div className='container px-4'>
        <ProviderChart></ProviderChart>

        </div>
       
         
        {/* </Container> */}
        </div>
    );
};

export default ProviderOverview;