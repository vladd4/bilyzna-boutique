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
import Login from "./Components/Login";
import Return from "./Components/Return";
import Delivery from "./Components/Delivery";
import Context from "./Hooks/Context";
import ProtectedRoute from "./Components/ProtectedRoute";
import PijamiFiltr from "./Components/FiltrComponents/PijamiFiltr";
import CorrFiltr from "./Components/FiltrComponents/CorrFiltr";
import MpantsFiltr from "./Components/FiltrComponents/MpantsFiltr";
import MpijamiFiltr from "./Components/FiltrComponents/MpijamiFiltr";
import SaleFiltr from "./Components/FiltrComponents/SaleFiltr";

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
  const [token, setToken] = useState("");

  const properties = {
    cart,
    setCart,
    prod,
    setProd,
    tovar,
    setTovar,
  };
  return (
    <Context.Provider value={properties}>
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
                <Cart></Cart>
              </>
            )}
          <Routes>
            <Route
              path="/login/"
              element={<Login setToken={setToken}></Login>}
            ></Route>
            <Route path="/admin/*" element={<AdminPanel></AdminPanel>}></Route>
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
                      filtr={<PijamiFiltr></PijamiFiltr>}
                      base={"pijami"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/robes/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Халати"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<PijamiFiltr></PijamiFiltr>}
                      base={"robes"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/nightwear/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Нічні сорочки"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<PijamiFiltr></PijamiFiltr>}
                      base={"nightwear"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/corrunderwear/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Корегуюча білизна"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<CorrFiltr></CorrFiltr>}
                      base={"corrunderwear"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/manpants/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Чоловічі труси"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<MpantsFiltr></MpantsFiltr>}
                      base={"man pants"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/shirts/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Майки"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<MpantsFiltr></MpantsFiltr>}
                      base={"shirts"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/manpijami/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Піжами"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<MpijamiFiltr></MpijamiFiltr>}
                      base={"man pijami"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/manrobes/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Халати"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<MpijamiFiltr></MpijamiFiltr>}
                      base={"man robes"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/swimwear/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Купальники"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<MpijamiFiltr></MpijamiFiltr>}
                      base={"swimwear"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/manswimwear/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Пляжні шорти"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<MpijamiFiltr></MpijamiFiltr>}
                      base={"man swimwear"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/news/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Новинки"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<SaleFiltr></SaleFiltr>}
                      base={"news"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path="/sale/*"
                element={
                  <>
                    <ItemsPage
                      products={products}
                      title={"Знижки"}
                      setProducts={setProducts}
                      setProd={setProd}
                      prod={prod}
                      filtr={<SaleFiltr></SaleFiltr>}
                      base={"sale"}
                    ></ItemsPage>
                  </>
                }
              ></Route>
              <Route
                path={"bras/" + tovar}
                element={
                  <>
                    {" "}
                    <ProductPage></ProductPage>
                  </>
                }
              ></Route>
              <Route path="/order" element={<OrderPage></OrderPage>}></Route>
              <Route path="/return" element={<Return></Return>}></Route>
              <Route path="/delivery" element={<Delivery></Delivery>}></Route>
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
    </Context.Provider>
  );
}

export default App;
