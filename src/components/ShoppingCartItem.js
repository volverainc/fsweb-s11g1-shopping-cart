import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../contexts/CartContext";

const Item = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = () => {
    setCart(cart.filter((item) => item.id !== props.id));
    localStorage.setItem("cart", JSON.stringify(cart.filter((item) => item.id !== props.id)));
  };

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={removeItem}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
