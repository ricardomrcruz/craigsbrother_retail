"use client";

import { useRouter } from "next/router";
import { createContext, useEffect, useContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();

  const [isItemAdded, setrIsItemAdded] = useState(false);

  const getCart = () => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart") || []);
    }
    return cart;
  };

  const addToCart = (product) => {
    let cart = [];
    if (typeof localStorage !== "undefined") {
      cart = JSON.parse(localStorage.getItem("cart") || []);
    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    isItemAddedToCart(product);
    router.refresh();
  };
};
