import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { getProductById } from "../../data/data";

export default function ItemCard({ item, i }) {
  const navigate = useNavigate();
  const product = getProductById(item.id);

  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantity = productInCart ? `(${productInCart.quantity})` : ``;

  return (
    <div key={`div${i}`} className="product-div">
      <Link className="link" key={`link${i}`} to={`/shop/product/${item.id}`}>
        <img
          src={item.thumb}
          alt={item.title}
          loading="lazy"
          decoding="async"
        />
      </Link>
      <div className="product-text">
        <div>
          <h3
            onClick={() => {
              navigate(`/shop/product/${item.id}`);
            }}
          >
            {item.title}
          </h3>
          {/* <p className="item_description">{item.description}</p> */}
        </div>
        <div>
          {item.stock_level === 0 ? (
            <>
              <p className="out-of-stock">Out of stock</p>
              <div className="price_cart_div">
                <p className="product-price">£{item.price}</p>
              </div>
            </>
          ) : (
            <div className="price_cart_div">
              <p className="product-price">£{item.price}</p>
              <button
                className="cart_button"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart {`${productQuantity}`}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
