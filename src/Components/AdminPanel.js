import "../admin.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminPanelView from "../Components/AdminPanelView";
import { useNavigate } from "react-router-dom";

const AdminPanel = ({ isLogged }) => {
  const [bilyzna, setBilyzna] = useState([]);
  const [pants, setPants] = useState([]);
  const navigate = useNavigate();
  if (isLogged) {
    return (
      <>
        <h1 align="center">Admin Panel Bilyzna Boutique</h1>
        <nav class="items-nav">
          <Link to="bra" class="items-nav-h">
            Жіноча білизна
          </Link>
          <Link to="pants" class="items-nav-h">
            Труси
          </Link>
          <Link class="items-nav-h">Носки</Link>
        </nav>
        <Routes>
          <Route
            path="/bra/*"
            element={
              <AdminPanelView
                tovar={bilyzna}
                setTovar={setBilyzna}
              ></AdminPanelView>
            }
          />
          <Route
            path="/pants"
            element={
              <AdminPanelView
                tovar={pants}
                setTovar={setPants}
              ></AdminPanelView>
            }
          />
        </Routes>
      </>
    );
  } else navigate("/login");
};

export default AdminPanel;
