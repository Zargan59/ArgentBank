import logo from "../Assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../Redux/actions/action";
import store from "../Redux/store/store";
import { useEffect, useState } from "react";
import { GetUserProfil } from "../API/dataApi";
import { useSelector } from "react-redux";



export default function Navbar({origin}) {
const name= useSelector((state)=> state.firstName)


if(origin) {
  const handleLogout= ()=>{
    localStorage.clear()
    sessionStorage.clear()
    store.dispatch(logout)
  }
  return(
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to = "/profile" className="main-nav-item"  >
        <FontAwesomeIcon icon={faCircleUser} />
          {name}
        </NavLink>
        <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut} />
          Sign Out
        </NavLink>
      </div>
    </nav>
  )
}
else{
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/login" className="main-nav-item">
        <FontAwesomeIcon icon={faCircleUser} />

          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
}
