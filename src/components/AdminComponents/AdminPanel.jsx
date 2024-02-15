"use client";

import "../../styles/admin.css";
import { useState, useEffect, useCallback } from "react";
import AdminPanelView from "./AdminPanelView";
import AdminSideBar from "./AdminSideBar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const admin = useSelector((state) => state.admin);
  const router = useRouter();

  const checkUserToken = useCallback(() => {
    const userToken = sessionStorage.getItem("auth_token");
    if (!userToken || userToken === "undefined") {
      setIsLogged(false);
      router.push("/login");
    } else {
      setIsLogged(true);
    }
  }, []);
  useEffect(() => {
    checkUserToken();
  }, [checkUserToken]);

  if (isLogged) {
    return (
      <section className="admin-main">
        <AdminSideBar />
        <article className="admin-content">
          <AdminPanelView
            tovar={products}
            setTovar={setProducts}
            title={admin.title}
            type={admin.type}
          />
        </article>
      </section>
    );
  } else return null;
};

export default AdminPanel;
