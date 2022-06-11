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
import Checkout from "./Components/Checkout/Checkout";
import SignInForm from "./Components/Authentication/SignInForm";
import SignupForm from "./Components/Authentication/SingUpForm.js";

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:category" element={<FilterProduct />}></Route>
          <Route path="/products/:category/:productId" element={<ViewProducts />}></Route>
          {/* <Route path="/checkout_sessions" element={<Sheckout_Sessions />}></Route> */}
          <Route path="/searchresult" element={<SearchResult />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/singin" element={<SignInForm />}></Route>
          <Route path="/singup" element={<SignupForm />}></Route>


        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
