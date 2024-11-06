import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import ProductDetail from "./pages/productDetail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={"/products"} element={<Products />}></Route>
        <Route path={"/detail/:productId"} element={<ProductDetail />}></Route>
      </Routes>

    </>
  );
}

export default App;
