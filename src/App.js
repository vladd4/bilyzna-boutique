import "./App.css";
import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import CardRow from "./Components/CardRow";
import ItemsPage from "./Components/ItemsPage";
import StyleBanner from "./Components/StyleBanner";
import Slider from "./Components/Slider";
import ToTop from "./Components/ToTop";
import ProductPage from "./Components/ProductPage";
import Cart from "./Components/Cart";
import OrderPage from "./Components/OrderPage";
import LikePage from "./Components/LikePage";
import BreadCrumbs from "./Components/BreadCrumbs";
import LogosSlider from "./Components/LogosSlider";

async function getData(setProducts) {
  const response = await fetch(
    "https://645ccfac250a246ae30ed653.mockapi.io/bilyzna/products/"
  );
  const data = await response.json();
  setProducts([...data]);
}

function hideSearch(setSearchValue) {
  document.querySelector(".main-search").classList.remove("main-search-show");
  setSearchValue("");
}

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData(setProducts);
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [cart, setCart] = useState([]);
  const [prod, setProd] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Banner></Banner>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></Header>
        <BreadCrumbs></BreadCrumbs>
        <Cart cart={cart}></Cart>
        <div
          className="changed-components"
          onClick={(e) => hideSearch(setSearchValue)}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider></Slider> <CardRow></CardRow>
                  <StyleBanner></StyleBanner>
                  <LogosSlider></LogosSlider>
                </>
              }
            ></Route>
            <Route
              path="/bilyzna/*"
              element={
                <>
                  <ItemsPage
                    products={products}
                    title={"Жіноча білизна"}
                    setProducts={setProducts}
                    cart={cart}
                    setCart={setCart}
                    setProd={setProd}
                    prod={prod}
                  ></ItemsPage>
                </>
              }
            ></Route>
            <Route
              path="bilyzna/dress"
              element={
                <ProductPage
                  prod={prod}
                  cart={cart}
                  setCart={setCart}
                ></ProductPage>
              }
            ></Route>
            <Route
              path="/order"
              element={<OrderPage cart={cart}></OrderPage>}
            ></Route>
            <Route
              path="/like"
              element={<LikePage products={products}></LikePage>}
            ></Route>
          </Routes>
        </div>
        <Newsletter></Newsletter>
        <ToTop></ToTop>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
