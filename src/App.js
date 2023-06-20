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
import BreadCrumbs from "./Components/BreadCrumbs";
import LogosSlider from "./Components/LogosSlider";
import WhyUs from "./Components/WhyUs";
import AdminPanel from "./Components/AdminPanel";
import BrasFiltr from "./Components/FiltrComponents/BrasFiltr";
import PantsFiltr from "./Components/FiltrComponents/PantsFiltr";

async function getData(setProducts) {
  const response = await fetch(
    "https://645ccfac250a246ae30ed653.mockapi.io/bilyzna/products/"
  );
  const data = await response.json();
  setProducts([...data]);
}
async function getPijami(setPijami) {
  const response = await fetch("http://localhost:8080/pijami");
  const data = await response.json();
  setPijami([...data]);
}
// function hideSearch(setSearchValue) {
//   document.querySelector(".main-search").classList.remove("main-search-show");
//   setSearchValue("");
// }

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData(setProducts);
  }, []);
  const [pijami, setPijami] = useState([]);
  useEffect(() => {
    getPijami(setPijami);
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [cart, setCart] = useState([]);
  const [prod, setProd] = useState([]);
  const [tovar, setTovar] = useState("Нижня білизна");

  return (
    <BrowserRouter>
      <div className="App">
        {window.location.pathname !== "/admin" && (
          <>
            <Banner></Banner>
            <Header
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            ></Header>
            <BreadCrumbs></BreadCrumbs>
            <Cart cart={cart} setCart={setCart}></Cart>
          </>
        )}
        <Routes>
          <Route path="/admin/*" element={<AdminPanel></AdminPanel>}></Route>
        </Routes>
        <div
          className="changed-components"
          onClick={(e) =>
            document
              .querySelector(".changed-components")
              .addEventListener("click", (e) => {
                if (
                  !document.querySelector(".drop-menu-nav").contains(e.target)
                ) {
                  document
                    .querySelector(".drop-menu-nav")
                    .classList.remove("drop-show");
                }
              })
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slider></Slider>
                  <CardRow></CardRow>
                  <StyleBanner></StyleBanner>
                  <LogosSlider></LogosSlider>
                  <WhyUs></WhyUs>
                </>
              }
            ></Route>
            <Route
              path="/bras/*"
              element={
                <>
                  <ItemsPage
                    products={products}
                    title={"Бюстгальтери"}
                    setProducts={setProducts}
                    cart={cart}
                    setCart={setCart}
                    setProd={setProd}
                    prod={prod}
                    tovar={tovar}
                    setTovar={setTovar}
                    filtr={<BrasFiltr></BrasFiltr>}
                  ></ItemsPage>
                </>
              }
            ></Route>
            <Route
              path="/pants/*"
              element={
                <>
                  <ItemsPage
                    products={products}
                    title={"Трусики"}
                    setProducts={setProducts}
                    cart={cart}
                    setCart={setCart}
                    setProd={setProd}
                    prod={prod}
                    tovar={tovar}
                    setTovar={setTovar}
                    filtr={<PantsFiltr></PantsFiltr>}
                  ></ItemsPage>
                </>
              }
            ></Route>
            <Route
              path="/pijami/*"
              element={
                <>
                  <ItemsPage
                    products={pijami}
                    title={"Жіночі піжами"}
                    setProducts={setPijami}
                    cart={cart}
                    setCart={setCart}
                    setProd={setProd}
                    prod={prod}
                    tovar={tovar}
                    setTovar={setTovar}
                  ></ItemsPage>
                </>
              }
            ></Route>
            <Route
              path={"bras/" + tovar}
              element={
                <>
                  {" "}
                  <ProductPage
                    prod={prod}
                    cart={cart}
                    setCart={setCart}
                  ></ProductPage>
                </>
              }
            ></Route>
            <Route
              path="/order"
              element={
                <>
                  <OrderPage cart={cart} setCart={setCart}></OrderPage>
                </>
              }
            ></Route>
          </Routes>
        </div>
        {window.location.pathname !== "/admin" && (
          <>
            <Newsletter></Newsletter>
            <Footer></Footer>
          </>
        )}
        <ToTop></ToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
