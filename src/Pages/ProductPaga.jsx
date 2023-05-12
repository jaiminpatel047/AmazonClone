import React, { useState, useEffect, useContext } from "react";
import "./ProductPaga.css";
import StarIcon from '@mui/icons-material/Star';
import { ProductDetail, WatchDetail, LaptopDetail, headphonesDetail } from "../Details/ProductDetail";
import { shippingDetail, ColorDetail } from '../Details/ProductPageDetail'
import { Link, useParams } from "react-router-dom";
import CartContext from "../ContextApi/CartContext";


const ProductPaga = () => {

 const { productList, addtoCart} = useContext(CartContext);


 const { id } = useParams();
 const [product, setProduct] = useState([])

 useEffect(()=> {
    let item = [...ProductDetail, ...WatchDetail, ...LaptopDetail, ...headphonesDetail]
    let productItem = item.filter(item => {
      if(item.id == id)
      return item
    })

    // console.log(productItem);
    setProduct(productItem[0])
 },[])

  return (
    <div style={{ backgroundColor: "white" }}>
      <main id="container">
        <div className="pagination top-bottom-padding">
          <p>Sponsored Electronics › Wearable Technology › Smart Watches</p>
        </div>
        <div className="ProductPaga-container top-bottom-padding left-right-padding">
           {/* ---------- */}
          <div className="product-showcase" style={{ padding: "1rem" }}>
          <SmallProduct Product={ColorDetail} />
          </div>
           {/* ---------- */}
          <div className="product-img-video">
            <img
              src={`../image/ProductImage/${product.image}`}
              alt=""
            />
          </div>
          {/* ---------- */}
          <div className="product-detail" style={{ padding: "1rem" }}>
            <div className="product-detail-name">
              <p className="bold"> 
                {product.name}
              </p>
              <span className="product-link">Visit the Noise Store</span>
              <div className="flexBox" style={{ justifyContent: "start" }}>
                <span>
                 <StarIcon className="start"/>
                 <StarIcon className="start"/>
                 <StarIcon className="start"/>
                 <StarIcon />
                 <StarIcon />
                </span>
                <div className="product-link" style={{ padding: "1rem" }}>
                   {product.rating} ratings
                </div>
                <div className="saprete"></div>
                <div className="product-link" style={{ padding: "1rem" }}>
                   587 answered questions
                </div>
              </div>
            </div>
            <div className="product-detail-name top-bottom-padding">
                <p className="dealBadgeSupportingText">Ends in 03h 28m 15s</p>
            <p className="product-price top-bottom-padding">
              <sup>₹</sup>{product.price}<sup>00</sup>
            </p>
                <div className="top-bottom-padding">
                   Inclusive of all taxes
                </div>
                <div>
                 <span className="bold">EMI</span> starts at ₹{product.emi}. No Cost EMI available <span className="product-link">EMI options</span>
                </div>
              
            </div>
            <div className="product-detail-name top-bottom-padding">
              <div className="flexBox"> 
              <EmiSection />
              <EmiSection />
              <EmiSection />
              <EmiSection />
              </div>
            </div>
            <div className="product-detail-name top-bottom-padding">
              <div className="flexBox"> 
                 <ShippingIcon Product={shippingDetail}/>
              </div>
            </div>
            <ColorSelector Product={ColorDetail} />
            <div className="product-detail-name top-bottom-padding"> 
             <h3 className="top-bottom-padding">About this item</h3>
                 <ul>
                     <li>{product.about}</li>
                 </ul>
            </div>
          </div>
          {/* ---------- */}
          <div className="product-buying-detail" style={{ padding: "1rem" }}>
            <p className="product-price">
              <sup>₹</sup>{product.price}<sup>00</sup>
            </p>
            <p className="bold top-bottom-padding">
             <span className="product-link">FREE delivery</span> {product.delivery} <span className="product-link">Details</span> 
            </p>
            <p className="bold top-bottom-padding">
            Or fastest delivery Tomorrow, May 2. Order within 8 hrs 17 mins. <span className="product-link">Details</span>
            </p>
            <span className="product-stock">{product.status}</span>
            <Link to='/CartPage'><CartButton name="Add to Cart" color={""} onClick={() => addtoCart(product.id, product.name, product.price, product.status, product.image)}/></Link>
            <CartButton name="Buy Now" color={"#FFA41C"} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPaga;

export const CartButton = ({ name, color, onClick }) => {
  return (
    <button
      className="cartBtn"
      style={{ backgroundColor: `${color || "#FFD814"}` }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export const EmiSection = () => {
    return(
           <div className="emi-section">
                <p className="bold">
                No Cost EMI 
                </p>
                <p>
                Upto ₹85.51 EMI interest savings on Amazon Pay ICICI…
                </p>
                <span className="product-link">2 offers</span>
            </div>
    )
}

export const ShippingIcon = ({Product}) => {
    return(
        <>
           {
         Product.map((item)=>(
                <div className="shipping-Icon" key={item.id}>
                <img src={`../image/ProductImage/${item.image}.png`} alt="" />
                <p className="product-link">{item.name}</p>
                </div>
            ))
        }
        </>
    )
}

export const ColorSelector = ({Product}) => {

  const [color, setColor] = useState('yello')
  function changeColor(item){
      setColor(item.color)
      console.log(item.color);
  }
    return(
        <div className="product-detail-name top-bottom-padding">
        <p>Colour: <span className="bold">{color}</span></p>
        <div className="flexBox top-bottom-padding" style={{justifyContent: 'start'}}> 
        {
            Product.map((item)=>(
                   <div className="color-selector" key={item.id}>
                   <img onClick={()=> changeColor(item)} src={`../image/ProductImage/${item.image}.jpg`} alt="" />
                   <p>₹ {item.price}</p>
                   </div>
               ))
           }
        </div>
        </div>   
    )
} 

export const SmallProduct = ({Product}) => {
    return(
        <>
        {
            Product.map((item)=>(
                   <div className="small-product" key={item.id}>
                   <img src={`../image/ProductImage/${item.image}.jpg`} alt="" />
                   </div>
               ))
           }
        </>
    )
} 






