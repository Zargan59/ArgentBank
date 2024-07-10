import logo from "../Assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
export default function Navbar({origin}) {
//Changer le Navbar si l'user est connecté
// console.log(origin);

if(origin) {
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
        <NavLink to = "/profile" className="main-nav-item" href="./user.html">
        <FontAwesomeIcon icon={faCircleUser} />
          {/* <i className="fa fa-user-circle"></i> */}
          Tony
        </NavLink>
        <NavLink to="/" className="main-nav-item">
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
