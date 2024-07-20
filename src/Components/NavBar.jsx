import logo from "../Assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../Redux/actions/action";
import store from "../Redux/store/store";
import { Navigate } from "react-router-dom";



export default function Navbar({origin}) {
//Changer le Navbar si l'user est connecté
// console.log(origin);

if(origin) {
  const handleLogout= ()=>{
    localStorage.clear()
    store.dispatch(logout)
    //Effacer les données du localStorage
  }
  return(
    <nav className="main-nav">
      <NavLink className="main-nav-logo">
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
          Tony
        </NavLink>
        <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOut} />
          {/* <i className="fa fa-sign-out"></i> */}
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

          {/* <i className="fa fa-user-circle"></i> */}
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
}
