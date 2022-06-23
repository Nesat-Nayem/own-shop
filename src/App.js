import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import Products from "./Components/Products/Products";
import ViewProducts from "./Components/ViewProducts/ViewProducts";
import SearchResult from "./Components/SearchResult/SearchResult";
import AuthProvider from "./context/AuthProvider";
// import Checkout from "./Components/Checkout/Checkout";
import SignInForm from "./Components/Authentication/SignInForm";
import SignupForm from "./Components/Authentication/SingUpForm.js";
import CheckoutLayout from "./Components/Checkout/CheckoutLayout";
import ProtectedRoutes from "./Components/ProtectedRoute/ProtectedRoutes";
import Navigation from "./Components/Navigation/Navigation";
import NewRegister from "./Components/Authentication/NewRegister";
import Vendor from "./Components/Authentication/Vendor/Vendor";
import Dashboard from "./Components/Dashboard/Dashboard";
import OverView from "./Components/Dashboard/OverView/OverView";
import Logo from "./Components/Logo/Logo";
import ContactUs from "./Components/ContractUs/ContactUs"
import PendingProviders from "./Components/Dashboard/PendingProviders/PendingProviders";
import AddServiceRequest from "./Components/Dashboard/MakeServiceRequist/AddServiceRequest";
import MyOrder from "./Components/Dashboard/MyOrder/MyOrder";
import AddCategory from "./Components/Dashboard/Category/AddCategory";
import SubCategory from "./Components/Dashboard/SubCategory/SubCategory";
import ProviderOverview from "./Components/Dashboard/ProviderOverview/ProviderOverview";
import { useState } from "react";
import { useSelector } from "react-redux";
// import Category from "./Components/Dashboard/Category/Category";
// import DashboardOverView from "./Components/Dashboard/DashboardOverview/DashboardOverView";
// import Dashboardadminroute from "./Components/Dashboard/Dashboardadminroute/Dashboardadminroute";
// import Dashboardoverviewtow from "./Components/Dashboard/Dashboardoverviewtow/Dashboardoverviewtow";
// import DashbordFastPage from "./Components/Dashboard/DashboardOverview/DashbordFastPage";
// import Login from "./Components/Loginuser/Loginuser";
// import StyleLogin from "./Components/styleLogin/StyleLogin";


function App() {
  const user = useSelector((state) => state.user.user);
 

  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Routes>

       
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/register" element={<NewRegister />}></Route>
          <Route path="/vendor" element={<Vendor />}></Route>
          <Route path="/products/:category" element={<FilterProduct />}></Route>
          <Route path="/products/:category/:productId" element={<ViewProducts />}></Route>
         
          <Route path="/searchresult" element={<SearchResult />}></Route>

        {/* provite or protected route  */}
          <Route element={<ProtectedRoutes />} >
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/products/checkout/:productId" element={<CheckoutLayout />}></Route>
        

        {/* {
            loading ? <Route path="/dashboard" element={<Loading />} /> : user.role === 'admin' ? <Route path="/dashboard" element={<PrivateUserRoute><Overview /></PrivateUserRoute>}/> : user.role === 'provider' ? <Route path="/dashboard" element={<PrivateUserRoute><ProviderOverview /></PrivateUserRoute>} /> : <Route path="/dashboard" element={<PrivateUserRoute><MyOrder /></PrivateUserRoute>} />
          } */}
        {/* {
           user?.role === 'admin' ? <Route path="/dashboard" element={<ProtectedRoutes><OverView /></ProtectedRoutes>}/> : user?.role === 'vendor' ? <Route path="/dashboard" element={<ProtectedRoutes><ProviderOverview /></ProtectedRoutes>} /> : <Route path="/dashboard" element={<ProtectedRoutes><MyOrder /></ProtectedRoutes>} />
          } */}

      {/* dashborad route must be dashboard route  */}
        <Route path="/dashboard" element={<Dashboard />}>
       <Route path="/dashboard/overview" element={<OverView />}></Route> 
       <Route path="/dashboard/addcategory" element={<AddCategory />}></Route> 
       <Route path="/dashboard/subcategory" element={<SubCategory />}></Route> 

        <Route path="/dashboard/pendingProvider" element={<PendingProviders />}></Route>
        <Route path="/dashboard/servicerequist" element={<AddServiceRequest />}></Route>
        <Route path="/dashboard/provideroverview" element={<ProviderOverview />}></Route>
        <Route path="/dashboard/myorder" element={<MyOrder />}></Route>
        {/* dashbord  */}
         </Route> 
          {/* dashbord  */}
    {/* provate tourte */}
         </Route>
 {/* provate tourte */}

          {/* dashborad route must be dashboard route  */}
       
           {/* provite or protected route  */}


        <Route path="/contract" element={<ContactUs />}></Route>


        {/* <Route path="/overview" element={<DashboardOverView />}>      
        <Route path="/overview/adminroute" element={<Dashboardadminroute />}></Route> 
        <Route path='/overview/dashbordFastPage' element={<DashbordFastPage />}></Route> 
        </Route> */}

   

         
          <Route path="/singin" element={<SignInForm />}></Route>
          <Route path="/singup" element={<SignupForm />}></Route>
          {/* <Route path="/Dashboardoverviewtow" element={<Dashboardoverviewtow />}></Route> */}
       


        </ Routes >
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
