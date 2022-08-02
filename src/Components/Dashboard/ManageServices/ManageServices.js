import React, { useEffect, useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";


const ManageServices = () => {

    const [product,setProduct] = useState([''])
    // console.log(product)
    useEffect(()=>{
        fetch('https://lit-sands-58263.herokuapp.com/api/products/getProduct')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })

  return (
    <div>
    </div>
  );
};

export default ManageServices;
