import { items } from "../../data/data.js";
import ItemCard from "../components/ItemCard.jsx";
import ShopFilters from "../components/ShopFilters.jsx";
import Cart from "../components/Cart.jsx";
// import { Link } from "react-router";
// import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Shop.css";

export default function ShopPage() {
  const [checkboxes, setCheckboxes] = useState([
    "sofas",
    "seating",
    "tables",
    "lighting",
  ]); // category checkboxes selected
  const [values, setValues] = useState([1, 1600]); // min-max values of price range slider
  const [sort, setSort] = useState("featured"); // sort by...
  const [filtersHidden, setFiltersHidden] = useState(true);
  const [cartHidden, setCartHidden] = useState(true);
  // const [cartHidden, setCartHidden] = useState(true);
  const [showItems, setShowItems] = useState(items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (sort === "lowest") {
      const reverseSortedProducts = items.sort((a, b) => b.price - a.price);
      setShowItems([...reverseSortedProducts]);
    }
    if (sort === "highest") {
      const sortedProducts = items.sort((a, b) => a.price - b.price);
      setShowItems([...sortedProducts]);
    }
    if (sort === "featured") {
      const sortedProducts = items.filter((item) => item.featured === true);
      setShowItems([...sortedProducts]);
    }
  }, [sort]);

  const excludedRef1 = useRef(null);
  const excludedRef2 = useRef(null);
  const excludedRef3 = useRef(null);
  const excludedRef4 = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      // If click is inside excluded areas, do nothing
      if (
        excludedRef1.current?.contains(e.target) ||
        excludedRef2.current?.contains(e.target) ||
        excludedRef3.current?.contains(e.target) ||
        excludedRef4.current?.contains(e.target)
      ) {
        null;
      } else {
        setFiltersHidden(true);
        setCartHidden(true);
        console.log("clicked");
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <div className="shop_container">
        <div className="icon_container">
          <svg
            className="menu_icon"
            ref={excludedRef4}
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="rgb(50, 123, 141)"
            onClick={() => {
              filtersHidden ? setFiltersHidden(false) : setFiltersHidden(true);
              setCartHidden(true);
            }}
          >
            <path d="M440-160q-17 0-28.5-11.5T400-200v-240L163.33-742q-14.33-18-4.16-38 10.16-20 32.83-20h576q22.67 0 32.83 20 10.17 20-4.16 38L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-286.67 226-286.66H254l226 286.66Zm0 0Z" />
          </svg>

          {/* 
{sort === "featured" && (
            <h2>All products - sorted by highest price</h2>
          )} */}
          {sort === "featured" && <h2>Featured Products</h2>}
          {sort === "highest" && <h2>Products sorted by lowest price</h2>}
          {sort === "lowest" && <h2>Products sorted by highest price</h2>}

          <svg
            className="cart_icon"
            ref={excludedRef3}
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="rgb(50, 123, 141)"
            onClick={() => {
              cartHidden ? setCartHidden(false) : setCartHidden(true);
              setFiltersHidden(true);
            }}
          >
            <path d="M231.83-102.64Q210-124.62 210-155.47q0-30.86 21.98-52.7Q253.95-230 284.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83-30.86 0-52.7-21.97Zm400 0Q610-124.62 610-155.47q0-30.86 21.98-52.7Q653.95-230 684.81-230t52.69 21.98q21.83 21.97 21.83 52.83t-21.97 52.69q-21.98 21.83-52.83 21.83-30.86 0-52.7-21.97ZM238.67-734 344-515.33h285.33l120-218.67H238.67ZM206-800.67h589.38q22.98 0 34.97 20.84 11.98 20.83.32 41.83L693.33-490.67q-11 19.34-28.87 30.67-17.87 11.33-39.13 11.33H324l-52 96h487.33V-286H278q-43 0-63-31.83-20-31.84-.33-68.17l60.66-111.33-149.33-316H47.33V-880h121.34L206-800.67Zm138 285.34h285.33H344Z" />
          </svg>
        </div>
        <ShopFilters
          ref={excludedRef1}
          filtersHidden={filtersHidden}
          setFiltersHidden={setFiltersHidden}
          checkboxes={checkboxes}
          setCheckboxes={setCheckboxes}
          values={values}
          setValues={setValues}
          sort={sort}
          setSort={setSort}
        />
        <Cart
          cartHidden={cartHidden}
          setCartHidden={setCartHidden}
          ref={excludedRef2}
        />
        <div className="product-container">
          {!checkboxes[0] ? (
            <h2 className="no-products">No products match your search</h2>
          ) : (
            showItems.map((item, i) => {
              if (
                item.price >= values[0] &&
                item.price <= values[1] &&
                checkboxes.includes(item.category)
              ) {
                return <ItemCard key={`item${i}`} item={item} i={i} />;
              }
            })
          )}
        </div>
      </div>
    </>
  );
}
