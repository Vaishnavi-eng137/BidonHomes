import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {logout} from "../redux/action/action"

function Nav() {
   const users= useSelector((state)=>state.users)
   const userLoggedIndex = useSelector((state)=>state.loggedInUserIndex)
   const dispatch = useDispatch()
   const history = useHistory()

   const handleLogout=()=>{
     dispatch(logout())
     window.localStorage.removeItem("appdata")
     history.push("/")
   }
  return (
    <nav
      className="navbar navbar-expand-lg justify-content-between"
      style={{ backgroundColor: "cornflowerblue", padding: "10px" }}
    >
      <h4>Hello {userLoggedIndex!==null?users[userLoggedIndex].name:""} </h4>
        <button type="button" className="btn btn-light Navbtn" onClick={handleLogout}>
          Logout
        </button>
    </nav>
  );
}

export default Nav;
