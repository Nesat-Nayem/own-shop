import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import Products from "./Components/Products/Products";
import ViewProducts from "./Components/ViewProducts/ViewProducts";
import SearchResult from "./Components/SearchResult/SearchResult";
import AuthProvider from "./context/AuthProvider";
import SignInForm from "./Components/Authentication/SignInForm";
import SignupForm from "./Components/Authentication/SingUpForm.js";
import CheckoutLayout from "./Components/Checkout/CheckoutLayout";
import ProtectedRoutes from "./Components/ProtectedRoute/ProtectedRoutes";
import NewRegister from "./Components/Authentication/NewRegister";
import Vendor from "./Components/Authentication/Vendor/Vendor";
import Dashboard from "./Components/Dashboard/Dashboard";
import OverView from "./Components/Dashboard/OverView/OverView";
import ContactUs from "./Components/ContractUs/ContactUs"
import PendingProviders from "./Components/Dashboard/PendingProviders/PendingProviders";
import MyOrder from "./Components/Dashboard/MyOrder/MyOrder";
import AddCategory from "./Components/Dashboard/Category/AddCategory";
import SubCategory from "./Components/Dashboard/SubCategory/SubCategory";
import ProviderOverview from "./Components/Dashboard/ProviderOverview/ProviderOverview";
import AddAService from "./Components/Dashboard/AddAService/AddAService";
import { useSelector } from "react-redux";
import ManageServices from "./Components/Dashboard/ManageServices/ManageServices";
import AddServiceReview from "./Components/Dashboard/AddServiceReview/AddServiceReview";


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
          <Route element={<ProtectedRoutes />} >
        <Route path="/products/checkout/:productId" element={<CheckoutLayout />}></Route>
        
      {/* dashborad route must be dashboard route  */}
        <Route path="/dashboard" element={<Dashboard />}>
       <Route path="/dashboard/overview" element={<OverView />}></Route> 
       <Route path="/dashboard/addcategory" element={<AddCategory />}></Route> 
       <Route path="/dashboard/subcategory" element={<SubCategory />}></Route> 

        <Route path="/dashboard/review/:id" element={<AddServiceReview />}></Route>
        <Route path="/dashboard/pendingProvider" element={<PendingProviders />}></Route>
        <Route path="/dashboard/provideroverview" element={<ProviderOverview />}></Route>
        <Route path="/dashboard/addservice" element={<AddAService />}></Route>
        <Route path="/dashboard/manageservices" element={<ManageServices />}></Route>
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
         
          <Route path="/singin" element={<SignInForm />}></Route>
          <Route path="/singup" element={<SignupForm />}></Route>

        </ Routes >
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
