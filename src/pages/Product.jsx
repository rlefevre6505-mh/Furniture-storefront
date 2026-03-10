import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
// import { useState } from "react";
import { getProductById } from "../../data/data";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  //   const [productState, setPorductState] = useState();

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  console.log(product);

  return (
    <div className="product-view-container">
      <img
        className="product-view-image"
        src={product.image}
        alt={product.description}
      />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}
