import "./CartPage.css";
import { CartButton } from "./ProductPaga";
import { useContext, useEffect, useState } from "react";
import CartContext from "../ContextApi/CartContext";

const CartPage = () => {
  const { productList } = useContext(CartContext);

  function getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productList.length; i++) {
      totalPrice += parseInt(productList[i].price);
    }
    return totalPrice;
  }

  return (
    <div id="container">
      <div className="product-cart-section">
        <div className="product-list">
          <h2>{ productList.length > 0 ? ('Shopping Cart') : ('Your Amazon Cart is empty.') }</h2>
          <div className="divider"></div>
          {productList.map((product) => (
            <Cart
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              status={product.status}
            />
          ))}
          <div className="divider"></div>
          <p className="cart-total">
            Subtotal ({productList.length} items):$ <b>{getTotalPrice()}</b>
          </p>
        </div>
        <div className="product-cart">
          <span>
            <span className="green">
              Your order is eligible for FREE Delivery.
            </span>{" "}
            Select this option at checkout. Details
          </span>
          <p className="cart-total">
            Subtotal ({productList.length} items):$ <b>{getTotalPrice()}</b>
          </p>
          <CartButton name="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

const Cart = (props) => {
  const { id, name, price, status, image } = props;
  const { removeCart, handleQytChange } = useContext(CartContext);

  return (
    <div className="cart" key={id}>
      <div className="cart-img">
        <img src={`../image/ProductImage/${image}`} alt="" />
      </div>
      <div style={{ flexGrow: "1" }}>
        <div className="cart-detail">
          <p className="cart-title">{name}</p>
          <span className="cart-stock">in {status}</span>
          <span className="cart-shipping">Eligible for FREE Shipping</span>
          <span>
            <b>Colour</b> : Midnight Blue
          </span>
          <span>
            <b>Size:</b> 4GB + 64GB
          </span>
          <div className="cart-quntity">
            <span className="cart-Qts">
              <select className="Qts" onChange={handleQytChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">+10</option>
              </select>
            </span>
            <span className="cart-Qts" onClick={() => removeCart(id)}>
              Delete
            </span>
            <span className="cart-Qts">Save for later</span>
            <span className="cart-Qts">See more like this</span>
            <span className="cart-Qts">Share</span>
          </div>
        </div>
      </div>
      <div className="cart-price">
        <span>$ {price}</span>
      </div>
    </div>
  );
};
