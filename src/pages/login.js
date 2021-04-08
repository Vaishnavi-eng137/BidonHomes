import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser, resetData } from "../redux/action/action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state);
  const users = useSelector((state) => state.users);
  const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);
  const history = useHistory();

  const handleLogin = () => {
    if(email===""||password===""){
      alert("Please fill your email or password")
      return
    }
    users.forEach((user, index) => {
      if (user.email === email && user.password === password) {
        dispatch(loginUser(index));
        history.push("/list");
      }
    });
  };
 
  useEffect(() => {
    if (window.localStorage.getItem("appdata")) {
      let data = JSON.parse(window.localStorage.getItem("appdata"));
      dispatch(resetData(data));
    } else {
      if(isUserLoggedIn){
      window.localStorage.setItem("appdata", JSON.stringify(initialState));
      }
    }
  }, []);

  useEffect(() => {
    if (isUserLoggedIn === true) {
      history.push("/list");
    }
  }, [isUserLoggedIn]);


  return (
    <div className="App-header" style={{ marginTop: "100px" }}>
      <form className="login">
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Login
        </h1>
        <h5>Get access to your Orders, Wishlist and Recommendations ...</h5>
        <div className="d-grid mt-2">
          <label className="form-label" style={{ textDecoration: "underline" }}>
            <b>Email</b>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control mb-3"
            placeholder="Email address"
          ></input>
          <label className="form-label" style={{ textDecoration: "underline" }}>
            <b>Password</b>{" "}
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            placeholder="Enter password"
          ></input>
          <button
            type="button"
            onClick={handleLogin}
            className="form-control btn-info mt-4 mb-2 submit"
          >
            <b>Login</b>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
