import "./App.css";
import React, { useEffect, useState } from "react";
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
import AdminLogin from "./Components/AdminLogin";

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
function hideHeader(e) {
  if (!document.querySelector(".drop-menu-nav").contains(e.target)) {
    document.querySelector(".drop-menu-nav").classList.remove("drop-show");
  }
}
function hideCart() {
  document.querySelector(".changed-components").style.opacity = "1";
  document.querySelector(".changed-components").style.pointerEvents = "auto";
  document.querySelector(".navbar").style.opacity = "1";
  document.querySelector(".navbar").style.pointerEvents = "auto";
  document.querySelector(".newsletter-div").style.opacity = "1";
  document.querySelector(".newsletter-div").style.pointerEvents = "auto";
  document.querySelector("#footer").style.opacity = "1";
  document.querySelector("#footer").style.pointerEvents = "auto";
  document.querySelector(".banner").style.opacity = "1";
  document.querySelector(".banner").style.pointerEvents = "auto";
  document.querySelector(".breadcrumbs").style.opacity = "1";
  document.querySelector(".breadcrumbs").style.pointerEvents = "auto";
  document.querySelector(".links-row").style.opacity = "1";
  document.querySelector(".links-row").style.pointerEvents = "auto";
  document.body.style.overflow = "auto";
  document.querySelector(".cart").classList.remove("show-cart");
}
function App() {
  const [products, setProducts] = useState([]);
  const [logged, setLogged] = useState(false);
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
  const [log] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        {window.location.pathname !== "/admin" &&
          window.location.pathname !== "/admin/bra" &&
          window.location.pathname !== "/admin/pants" &&
          window.location.pathname !== "/login" && (
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
          <Route
            path="/login/"
            element={<AdminLogin log={log}></AdminLogin>}
          ></Route>
          <Route
            path="/admin/*"
            element={<AdminPanel isLogged={log}></AdminPanel>}
          ></Route>
        </Routes>
        <div
          className="changed-components"
          onClick={(e) =>
            document
              .querySelector(".changed-components")
              .addEventListener("click", (e) => {
                hideHeader(e);
                hideCart();
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
                    setProd={setProd}
                    prod={prod}
                    tovar={tovar}
                    setTovar={setTovar}
                    filtr={<BrasFiltr setTovar={setTovar}></BrasFiltr>}
                    base={"bras"}
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
                    setProd={setProd}
                    prod={prod}
                    tovar={tovar}
                    setTovar={setTovar}
                    filtr={<PantsFiltr></PantsFiltr>}
                    base={"pants"}
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
                    setProd={setProd}
                    prod={prod}
                    tovar={tovar}
                    setTovar={setTovar}
                    filtr={<PantsFiltr></PantsFiltr>}
                    base={"pijami"}
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
        {window.location.pathname !== "/admin" &&
          window.location.pathname !== "/admin/bra" &&
          window.location.pathname !== "/admin/pants" &&
          window.location.pathname !== "/login" && (
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
