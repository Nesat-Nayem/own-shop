import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import Products from "./Components/Products/Products";
import ViewProducts from "./Components/ViewProducts/ViewProducts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:category" element={<FilterProduct />}></Route>
          <Route path="/products/:category/:productId" element={<ViewProducts />}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
