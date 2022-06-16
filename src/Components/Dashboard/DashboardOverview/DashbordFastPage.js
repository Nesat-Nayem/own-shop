// // import React from 'react';
// import React, { useEffect, useState } from 'react';
// const DashbordFastPage = () => {
//     const [product,setProduct] = useState([])

//     const [user,setuser] = useState([])
//     console.log(user)

//     useEffect(() => {
//         // fetch('http://localhost:5000/products')
//         fetch('http://localhost:7070/api/products/getProduct')
//         .then(res => res.json())
//         .then(data => setProduct(data.length))
//     }, [product])


//     useEffect(() => {
//         // fetch('http://localhost:5000/products')
//         fetch('http://localhost:7070/api/users/alluser')
//         .then(res => res.json())
//         .then(data => setuser(data.length))
//     }, [user])

//     return (
//         <div>
//              <aside class="right-side">
//                 {/* <!-- Content Header (Page header) --> */}
//                 <section class="content-header">
//                     <h1>
//                         Widgets
//                         <small>Preview page</small>
//                     </h1>
//                     <ol class="breadcrumb">
//                         <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
//                         <li class="active">Widgets</li>
//                     </ol>
//                 </section>

//                 {/* <!-- Main content --> */}
//                 <section class="content">
//                     <h4 class="page-header">
//                         AdminLTE Small Boxes
//                         <small>Small boxes are used for viewing statistics. To create a small box use the class <code>.small-box</code> and mix & match using the <code>bg-*</code> classes.</small>
//                     </h4>
//                     {/* <!-- Small boxes (Stat box) --> */}
//                     <div class="row">
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-aqua">
//                                 <div class="inner">
//                                     <h3>
//                                         150
//                                     </h3>
//                                     <p>
//                                         New Orders
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-bag"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* <!-- ./col --> */}
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-green">
//                                 <div class="inner">
//                                     <h3>
//                                         53<sup style={{fontSize: '20px'}}>%</sup>
//                                     </h3>
//                                     <p>
//                                         Bounce Rate
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-stats-bars"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* <!-- ./col --> */}
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-yellow">
//                                 <div class="inner">
//                                     <h3>
//                                   {  user}
//                                     </h3>
//                                     <p>
//                                         User Registrations
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-person-add"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* <!-- ./col --> */}
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-red">
//                                 <div class="inner">
//                                     <h3>
//                                         65
//                                     </h3>
//                                     <p>
//                                         Unique Visitors
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-pie-graph"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* <!-- ./col --> */}
//                     </div>
//                     {/* <!-- /.row --> */}

//                     {/* <!-- Small boxes (Stat box) --> */}
//                     <div class="row">
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-blue">
//                                 <div class="inner">
//                                     <h3>
//                                         230
//                                     </h3>
//                                     <p>
//                                         Sales
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-ios7-cart-outline"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* <!-- ./col --> */}
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-purple">
//                                 <div class="inner">
//                                     <h3>
//                                         80<sup style={{fontSize: '20px'}}>%</sup>
//                                     </h3>
//                                     <p>
//                                         Conversion Rate
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-ios7-briefcase-outline"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* <!-- ./col --> */}
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-teal">
//                                 <div class="inner">
//                                     <h3>
//                                         14
//                                     </h3>
//                                     <p>
//                                         Notofications
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-ios7-alarm-outline"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* !-- ./col --> */}
//                         <div class="col-lg-3 col-xs-6">
//                             {/* <!-- small box --> */}
//                             <div class="small-box bg-maroon">
//                                 <div class="inner">
//                                     <h3>
//                                        {product}
//                                     </h3>
//                                     <p>
//                                         Products
//                                     </p>
//                                 </div>
//                                 <div class="icon">
//                                     <i class="ion ion-ios7-pricetag-outline"></i>
//                                 </div>
//                                 <a href="#" class="small-box-footer">
//                                     More info <i class="fa fa-arrow-circle-right"></i>
//                                 </a>
//                             </div>
//                         </div>
//                         {/* <!-- ./col --> */}
//                     </div>
//                     {/* !-- /.row --> */}

//                     {/* <!-- Widgets as boxes --> */}
//                     <h4 class="page-header">
//                         AdminLTE Boxes
//                         <small>We use the base class <code>.box</code> to create widgets simply.</small>
//                     </h4>
             
         

//                 </section>
//                 {/* <!-- /.content --> */}
//             </aside>
//         </div>
//     );
// };

// export default DashbordFastPage;