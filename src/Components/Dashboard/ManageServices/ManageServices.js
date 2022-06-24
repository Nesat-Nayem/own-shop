import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const ManageServices = () => {

    const [product,setProduct] = useState('')
    // console.log(product)
    useEffect(()=>{
        fetch('http://localhost:7070/api/products/getProduct')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })

  return (
    <div>
      <div className="container">
        <div className="row">
           {/* {
            product?.map((pro)=>(

                <div className="col-md-3">

                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{pro.name}</h5>
                    <p class="card-text"> below as</p>
                  </div>
                </div>
                </div>
            ))
           } */}
       

         
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
