import {ProductCard, ProductCard2} from "./ProductCard";
import { AmazonPay, Upcominglaunches, StylesForMen } from '../Details/OfferDetail'
import ProductSlider from "./ProductSlider";
import { ProductDetail } from '../Details/ProductDetail'
import PrimeSlider from "./PrimeSlider";

const MainSection = () => {
  return (
    <>
      <div id="container">
        <PrimeSlider/>
        <div className="product-gallery">
        <ProductCard
          title="Up to 70% off | Clearance store"
          img="../image/Productimage/b1.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={Upcominglaunches}  title="Latest and upcoming launches" />
        <ProductCard
          title="Amazon pay Book Travel Tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={AmazonPay}  title="Amazon pay Book Travel Tickets" />
        </div>
        <div className="product-gallery">
        <ProductCard
          title="Bluetooth Calling Smartwatch starts at ₹1,999"
          img="../image/Productimage/b2.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={StylesForMen}  title="Up to 60% off | Styles for men" />
        <ProductCard
          title="Amazon pay Book Travel Tickets"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={AmazonPay}  title="Amazon pay Book Travel Tickets" />
        </div>

        <ProductSlider />
      </div>
    </>
  );
};

export default MainSection;
