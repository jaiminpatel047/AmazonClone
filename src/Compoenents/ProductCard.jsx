import React from "react";

export const ProductCard = (props) => {
  const { title, img, offer } = props;
  return (
    <>
      <div id="prodcut-card">
        <div>
          <h1 className="product-title">{title}</h1>
        </div>
        <div className="product-informationFirst">
          <img className="image" src={img} alt="" />
        </div>
        <div>
          <span className="product-offer">{offer}</span>
        </div>
      </div>
    </>
  );
};

export const ProductCard2 = (props) => {
  const { title, Detail } = props;
  return (
    <>
      <div id="prodcut-card">
        <div>
          <h1 className="product-title">{title}</h1>
        </div>
        <div className="product-information">
        {
          Detail.map((item) => (
            <div className="product-img-container" key={item.id}>
              <img  className="image" src={item.offerImage} />
              <p className="image-description">{item.offer}</p>
            </div>
          ))
        }
        </div>
        <div>
          <span className="product-offer">See all Offers</span>
        </div>
      </div>
    </>
  );
};
