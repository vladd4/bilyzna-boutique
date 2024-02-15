"use client";

import Context from "./Context";
import { useState } from "react";
import { getData } from "@/utils/fetchBase_helper";

export function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([...products]);
  const [cart, setCart] = useState([]);
  const [prod, setProd] = useState([]);
  const [tovar, setTovar] = useState("");
  const [baseLink, setBaseLink] = useState("bra/");
  const [filtred, setFiltred] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterFlag, setFilterFlag] = useState(false);
  const properties = {
    cart,
    setCart,
    prod,
    setProd,
    tovar,
    setTovar,
    setBaseLink,
    products,
    setProducts,
    currentProducts,
    setCurrentProducts,
    filtred,
    getData,
    setFiltred,
    isLoading,
    setIsLoading,
    filterFlag,
    setFilterFlag,
  };
  return <Context.Provider value={properties}>{children}</Context.Provider>;
}
