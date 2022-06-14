import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
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
// import Login from "./Components/Loginuser/Loginuser";
// import StyleLogin from "./Components/styleLogin/StyleLogin";

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        {/* <Header></Header> */}
        {/* <Navigation></Navigation> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/register" element={<NewRegister />}></Route>
          <Route path="/vendor" element={<Vendor />}></Route>
          <Route path="/products/:category" element={<FilterProduct />}></Route>
          <Route path="/products/:category/:productId" element={<ViewProducts />}></Route>
          {/* <Route path="/checkout_sessions" element={<Sheckout_Sessions />}></Route> */}
          <Route path="/searchresult" element={<SearchResult />}></Route>

          <Route element={<ProtectedRoutes />}>
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/products/checkout/:productId" element={<CheckoutLayout />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/overview" element={<OverView />}></Route>
        </Route>


        <Route path="/contract" element={<ContactUs />}></Route>
        {/* <Route path="loginform" element={<StyleLogin/>}></Route> */}

      

         
          <Route path="/singin" element={<SignInForm />}></Route>
          <Route path="/singup" element={<SignupForm />}></Route>
          {/* <Route path="/logo" element={<Logo />}></Route> */}


        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
