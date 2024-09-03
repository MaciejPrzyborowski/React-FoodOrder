import { useContext } from "react";
import logoImg from "../assets/logo.jpg";

import Button from "./UI/button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function Header() {
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
