import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Nav from "../Components/nav";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, resetData } from "../redux/action/action";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  // const products = useSelector((state) => state.products);
  const initialState = useSelector((state) => state);
  useEffect(() => {
    if (window.localStorage.getItem("appdata")) {
      let data = JSON.parse(window.localStorage.getItem("appdata"));
      dispatch(resetData(data));
    } else {
      window.localStorage.setItem("appdata", JSON.stringify(initialState));
    }
  }, []);

  const handleAddProduct = () => {
    if (name ===""|| price=== 0 || quantity === 0) {
      alert("Please fill the required details");
      return
    }

    let tempProduct = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      image: image,
    };
    dispatch(addProduct(tempProduct));
    let tempData = { ...initialState };
    let tp = [...tempData.products, tempProduct];
    tempData.products = tp;
    window.localStorage.setItem("appdata", JSON.stringify(tempData));
    history.push("/list");
  };

  return (
    <div>
      <Nav />
      <div className="App-header" style={{ marginTop: "10px" }}>
        <form className="add">
          <h2 style={{ textAlign: "center" }}> Add the product details</h2>
          <div className="form-group row mb-2 mt-4">
            <label for="inlineFold" className="col-sm-2 col-form-label">
              Name :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
                placeholder="Enter name of product "
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label className="col-sm-2 col-form-label">Description:</label>
            <div className="col-sm-10">
              <input
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="form-control"
                placeholder="Enter description of product"
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label className="col-sm-2 col-form-label">Price :</label>
            <div className="col-sm-10">
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="form-control"
                placeholder="Enter price of product"
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label className="col-sm-2 col-form-label">Quantity : </label>
            <div className="col-sm-10">
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                className="form-control"
                placeholder="Enter no. of quantities"
                required
              />
            </div>
          </div>
          <div className="form-group row mb-2">
            <label className="col-sm-2 col-form-label">Image :</label>
            <div className="col-sm-10">
              <input
                type="text"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                className="form-control"
                placeholder="Insert the image url"
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="button"
              onClick={handleAddProduct}
              className="btn btn-light mt-4 submit"
            >
              Save it!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
