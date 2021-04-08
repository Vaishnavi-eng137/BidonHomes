import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
  const { product } = props;
  return (
    <div className="box">
      <div style={{ display: "flex", justifyContent: "space-around", height:"100%",width:"100%"}}>
        <div className="cards_product">
          <img
            className="cardimage"
            src={product.image}
            alt={product.name}
          ></img>
          <h5>{product.name}</h5>
          <small>{product.description}</small>
          <h6>
            Price: <FontAwesomeIcon icon={faRupeeSign} />
            {product.price}
          </h6>
          <p><small>Quantity: {product.quantity}</small></p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
