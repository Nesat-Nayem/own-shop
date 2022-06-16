import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
// import './bootstrap.min.css';

const DashboardOverView = () => {

    const [product,setProduct] = useState([])

    const [user,setuser] = useState([])
    console.log(user)

    useEffect(() => {
        // fetch('http://localhost:5000/products')
        fetch('http://localhost:7070/api/products/getProduct')
        .then(res => res.json())
        .then(data => setProduct(data.length))
    }, [product])


    useEffect(() => {
        // fetch('http://localhost:5000/products')
        fetch('http://localhost:7070/api/users/alluser')
        .then(res => res.json())
        .then(data => setuser(data.length))
    }, [user])

    return (
        <div>
             <body class="skin-black">
        {/* <!-- header logo: style can be found in header.less --> */}
        <header class="header">
            <a style={{textDecoration:'none'}} href="../index.html" class="logo">
                {/* <!-- Add the class icon to your logo image or logo icon to add the margining --> */}
                OwnSell
            </a>
            {/* <!-- Header Navbar: style can be found in header.less --> */}
         
        </header>
        <div class="wrapper row-offcanvas row-offcanvas-left">
            {/* <!-- Left side column. contains the logo and sidebar --> */}
            <aside class="left-side sidebar-offcanvas">
                {/* <!-- sidebar: style can be found in sidebar.less --> */}
                <section class="sidebar">
                    {/* <!-- Sidebar user panel --> */}
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="asets/img/avatar3.png" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Hello, Jane</p>

                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    {/* <!-- search form --> */}
                    <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search..."/>
                            <span class="input-group-btn">
                                <button type='submit' name='seach' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </form>
                    {/* <!-- /.search form --> */}
                    {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
                    <ul class="sidebar-menu">
                        <li>
                            <Link to="/overview/adminroute">
                                <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li class="active">
                            <a href="/dashbordFastPage">
                                <i class="fa fa-th"></i> <span>Widgets</span> <small class="badge pull-right bg-green">new</small>
                            </a>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-bar-chart-o"></i>
                                <span>Charts</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="charts/morris.html"><i class="fa fa-angle-double-right"></i> Morris</a></li>
                                <li><a href="charts/flot.html"><i class="fa fa-angle-double-right"></i> Flot</a></li>
                                <li><a href="charts/inline.html"><i class="fa fa-angle-double-right"></i> Inline charts</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-laptop"></i>
                                <span>UI Elements</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="UI/general.html"><i class="fa fa-angle-double-right"></i> General</a></li>
                                <li><a href="UI/icons.html"><i class="fa fa-angle-double-right"></i> Icons</a></li>
                                <li><a href="UI/buttons.html"><i class="fa fa-angle-double-right"></i> Buttons</a></li>
                                <li><a href="UI/sliders.html"><i class="fa fa-angle-double-right"></i> Sliders</a></li>
                                <li><a href="UI/timeline.html"><i class="fa fa-angle-double-right"></i> Timeline</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-edit"></i> <span>Forms</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="forms/general.html"><i class="fa fa-angle-double-right"></i> General Elements</a></li>
                                <li><a href="forms/advanced.html"><i class="fa fa-angle-double-right"></i> Advanced Elements</a></li>
                                <li><a href="forms/editors.html"><i class="fa fa-angle-double-right"></i> Editors</a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-table"></i> <span>Tables</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="tables/simple.html"><i class="fa fa-angle-double-right"></i> Simple tables</a></li>
                                <li><a href="tables/data.html"><i class="fa fa-angle-double-right"></i> Data tables</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="calendar.html">
                                <i class="fa fa-calendar"></i> <span>Calendar</span>
                                <small class="badge pull-right bg-red">3</small>
                            </a>
                        </li>
                        <li>
                            <a href="mailbox.html">
                                <i class="fa fa-envelope"></i> <span>Mailbox</span>
                                <small class="badge pull-right bg-yellow">12</small>
                            </a>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-folder"></i> <span>Examples</span>
                                <i class="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="examples/invoice.html"><i class="fa fa-angle-double-right"></i> Invoice</a></li>
                                <li><a href="examples/login.html"><i class="fa fa-angle-double-right"></i> Login</a></li>
                                <li><a href="examples/register.html"><i class="fa fa-angle-double-right"></i> Register</a></li>
                                <li><a href="examples/lockscreen.html"><i class="fa fa-angle-double-right"></i> Lockscreen</a></li>
                                <li><a href="examples/404.html"><i class="fa fa-angle-double-right"></i> 404 Error</a></li>
                                <li><a href="examples/500.html"><i class="fa fa-angle-double-right"></i> 500 Error</a></li>
                                <li><a href="examples/blank.html"><i class="fa fa-angle-double-right"></i> Blank Page</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                {/* <!-- /.sidebar --> */}
            </aside>

            {/* <!-- Right side column. Contains the navbar and content of the page --> */}
           
            {/* <!-- /.right-side --> */}
            <aside class="right-side">
                {/* <!-- Content Header (Page header) --> */}
                <section class="content-header">
                    <h1>
                        Widgets
                        <small>Preview page</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                        <li class="active">Widgets</li>
                    </ol>
                </section>

                {/* <!-- Main content --> */}
                <section class="content">
                    <h4 class="page-header">
                        AdminLTE Small Boxes
                        <small>Small boxes are used for viewing statistics. To create a small box use the class <code>.small-box</code> and mix & match using the <code>bg-*</code> classes.</small>
                    </h4>
                    {/* <!-- Small boxes (Stat box) --> */}
                    <div class="row">
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-aqua">
                                <div class="inner">
                                    <h3>
                                        150
                                    </h3>
                                    <p>
                                        New Orders
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-bag"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-green">
                                <div class="inner">
                                    <h3>
                                        53<sup style={{fontSize: '20px'}}>%</sup>
                                    </h3>
                                    <p>
                                        Bounce Rate
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-stats-bars"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-yellow">
                                <div class="inner">
                                    <h3>
                                  {  user}
                                    </h3>
                                    <p>
                                        User Registrations
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-person-add"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-red">
                                <div class="inner">
                                    <h3>
                                        65
                                    </h3>
                                    <p>
                                        Unique Visitors
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-pie-graph"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                    </div>
                    {/* <!-- /.row --> */}

                    {/* <!-- Small boxes (Stat box) --> */}
                    <div class="row">
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-blue">
                                <div class="inner">
                                    <h3>
                                        230
                                    </h3>
                                    <p>
                                        Sales
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-ios7-cart-outline"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-purple">
                                <div class="inner">
                                    <h3>
                                        80<sup style={{fontSize: '20px'}}>%</sup>
                                    </h3>
                                    <p>
                                        Conversion Rate
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-ios7-briefcase-outline"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-teal">
                                <div class="inner">
                                    <h3>
                                        14
                                    </h3>
                                    <p>
                                        Notofications
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-ios7-alarm-outline"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* !-- ./col --> */}
                        <div class="col-lg-3 col-xs-6">
                            {/* <!-- small box --> */}
                            <div class="small-box bg-maroon">
                                <div class="inner">
                                    <h3>
                                       {product}
                                    </h3>
                                    <p>
                                        Products
                                    </p>
                                </div>
                                <div class="icon">
                                    <i class="ion ion-ios7-pricetag-outline"></i>
                                </div>
                                <a href="#" class="small-box-footer">
                                    More info <i class="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* <!-- ./col --> */}
                    </div>
                    {/* !-- /.row --> */}

                    {/* <!-- Widgets as boxes --> */}
                    <h4 class="page-header">
                        AdminLTE Boxes
                        <small>We use the base class <code>.box</code> to create widgets simply.</small>
                    </h4>
             
         

                </section>
                {/* <!-- /.content --> */}
            </aside>
        </div>
        {/* <!-- ./wrapper --> */}




    </body>
        </div>
    );
};

export default DashboardOverView;