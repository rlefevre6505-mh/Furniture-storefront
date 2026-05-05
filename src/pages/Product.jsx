import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
// import { useState } from "react";
import { getProductById } from "../../data/data";
import "./Product.css";
import { useCart } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantity = productInCart ? `(${productInCart.quantity})` : ``;

  console.log(product.colours);

  return (
    <div className="product-view-container">
      <img
        className="product-view-image"
        src={product.image}
        alt={product.description}
      />
      <div className="product_text">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div>
          <p>
            Materials:
            {product.materials.map((material, i) => {
              if (i === product.materials.length - 1) {
                return (
                  <p className="material_p" key={`material${i}`}>
                    {" "}
                    {material}.
                  </p>
                );
              } else if (i !== product.materials.length) {
                return (
                  <p className="material_p" key={`material${i}`}>
                    {" "}
                    {material},
                  </p>
                );
              }
            })}
          </p>

          <p>
            Available colours:
            {product.colours.map((colour, i) => {
              if (i === product.colours.length - 1) {
                return <p className="colour_p"> {colour}.</p>;
              } else if (i !== product.colours.length) {
                return <p className="colour_p"> {colour},</p>;
              }
            })}
          </p>
        </div>
        <div className="price_cart">
          <p className="product_price">£{product.price}</p>

          <button
            className="product_button"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart {`${productQuantity}`}
          </button>
        </div>
      </div>
    </div>
  );
}
