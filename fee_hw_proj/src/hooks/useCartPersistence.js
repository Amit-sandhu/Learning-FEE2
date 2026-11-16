import { useEffect } from "react";
import { useSelector } from "react-redux";

// Save cart changes so a refresh does not empty it.
export function useCartPersistence() {
  const cartItems = useSelector(function (state) {
    return state.cart.items;
  });

  useEffect(function () {
    try {
      localStorage.setItem("market-bloom-cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Could not save the cart.", error);
    }
  }, [cartItems]);
}