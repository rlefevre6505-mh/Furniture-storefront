import { Link, useNavigate } from "react-router";

export default function Item({ item, i }) {
  const navigate = useNavigate();

  return (
    <div key={`div${i}`} className="product-div">
      <Link className="link" key={`link${i}`} to={`/shop/product/${item.id}`}>
        <img src={item.image} alt={item.title} />
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
          <p>{item.description}</p>
        </div>
        <div>
          {item.stock_level === 0 ? (
            <p className="out-of-stock">Out of stock</p>
          ) : (
            <p className="stock-level">{`${item.stock_level} available`}</p>
          )}
          <p className="product-price">£{item.price}</p>
        </div>
      </div>
    </div>
  );
}
