import { useReducer, useState } from "react";
import CartContext from "./CartContext";

// const inialState = {
//     cart : [],
//     total_item: '',
//     total_amount: '',
//     shipping_fee :50
// };

const Context = (props) => {
  // const [ state, dispatch] = useReducer(reducer, inialState)

  // const addToCart = ({id, name, price}) => {
  //     dispatch({type : 'ADD_TO_CART', payload: {id, name, price} })
  // }

  const [open, setOpen] = useState(false);
  const openButton = () => setOpen(true);
  const closeButton = () => setOpen(false);

  const [productList, setProductList] = useState([]);

  console.log(productList)

  function addtoCart(id, name, price, status, image) {
    const newItem = { id, name, price, status, image };
    setProductList((prevState) => [...prevState, newItem]);
  }

  function removeCart(id) {
    setProductList((prevState) => prevState.filter((item) => item.id !== id));
  }

  const [qyt, setQyt] = useState();
  const handleQytChange = (event) => {
    setQyt(event.target.value);
  };


  return (
    <CartContext.Provider
      value={{ open, openButton, closeButton, productList, addtoCart, removeCart}} >
      {props.children}
    </CartContext.Provider>
  );
};

export default Context;
