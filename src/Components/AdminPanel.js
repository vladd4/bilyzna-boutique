import "../admin.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminPanelView from "../Components/AdminPanelView";

const AdminPanel = () => {
  const [bilyzna, setBilyzna] = useState([]);
  const [pijams, setPijams] = useState([]);
  return (
    <>
      <h1 align="center">Admin Panel Bilyzna Boutique</h1>
      <nav class="items-nav">
        <Link to="bra" class="items-nav-h">
          Жіноча білизна
        </Link>
        <Link to="pijama" class="items-nav-h">
          Піжами
        </Link>
        <a class="items-nav-h">Носки</a>
      </nav>
      <Routes>
        <Route
          path="/bra"
          element={
            <AdminPanelView
              tovar={bilyzna}
              setTovar={setBilyzna}
            ></AdminPanelView>
          }
        />
        <Route
          path="/pijama"
          element={
            <AdminPanelView
              tovar={pijams}
              setTovar={setPijams}
            ></AdminPanelView>
          }
        />
      </Routes>
    </>
  );
};

export default AdminPanel;
