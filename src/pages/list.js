import React, { useState, useEffect } from "react";
import Nav from "../Components/nav";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductCard from "../Components/product";
import { resetData } from "../redux/action/action";

function List() {
  const products = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1000);
  const [fromQuantity, setFromQuantity] = useState(0);
  const [toQuantity, setToQuantity] = useState(1000);
  const dispatch = useDispatch();
  const initialState = useSelector((state)=>state)

  useEffect(() => {
    if (window.localStorage.getItem("appdata")) {
      let data = JSON.parse(window.localStorage.getItem("appdata"));
      dispatch(resetData(data));
    }
    else{
      window.localStorage.setItem("appdata",JSON.stringify(initialState))
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className="input-group mt-4" style={{ display: "flex" }}>
        <div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="form-control"
            placeholder="Search products.."
          />
        </div>
        <div style={{ marginLeft: "10px", display: "flex", flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <input
              style={{ width: "120px" }}
              type="number"
              value={fromPrice}
              onChange={(e) => {
                setFromPrice(e.target.value);
              }}
              placeholder="from price"
            ></input>
            <input
              style={{ width: "120px" }}
              type="number"
              value={toPrice}
              onChange={(e) => {
                setToPrice(e.target.value);
              }}
              placeholder="to price"
            ></input>
            <input
              style={{ width: "120px" }}
              type="number"
              value={fromQuantity}
              onChange={(e) => {
                setFromQuantity(e.target.value);
              }}
              placeholder="from quantity"
            ></input>
            <input
              style={{ width: "120px" }}
              type="number"
              value={toQuantity}
              onChange={(e) => {
                setToQuantity(e.target.value);
              }}
              placeholder="to quantity"
            ></input>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <NavLink to="/form">
            <button
              type="button"
              className="btn btn-info"
              style={{ marginRight: "4px" }}
            >
              Add product
            </button>
          </NavLink>
        </div>
      </div>
      <div className="boxmap">
        {products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              searchQuery === ""
          )
          .filter((p) => p.price >= fromPrice && p.price <= toPrice)
          .filter((p) => p.quantity >= fromQuantity && p.quantity <= toQuantity)
          .map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
      </div>
    </div>
  );
}

export default List;
