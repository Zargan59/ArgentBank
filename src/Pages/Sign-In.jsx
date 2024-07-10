import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import FormSignUp from "../Components/Form/FormSignUp";
import { useEffect, useState } from "react";
import { GetUserToken } from "../API/dataApi";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function SignIn() {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    SetUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRememberChange = (e) => {
    setIsRemember(e.target.checked);
  };
  const SubmitUser = async (e) => {
    e.preventDefault();
    if (username && password) {
      GetUserToken(username, password, isRemember, navigate);
    }
  };

  //Fonction qui vérifie si le LS est vide
  useEffect(()=>{
    const isUserRemember = JSON.parse(localStorage.getItem("user"));
    //Si l'user est présent dans le LS
      //J'envoie ses infos dans sur
    if (isUserRemember) {
      setPassword(isUserRemember.password)
      SetUsername(isUserRemember.email)
      setIsRemember(true)
    }
  }, [])

  return (
    <div>
      <Navbar />
      <main className="main bg-dark signUpPage">
        <section className="sign-in-content">
          {/* <i className="fa fa-user-circle sign-in-icon"></i> */}
          <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
          <h1>Sign In</h1>
          <form>
            <FormSignUp
              divName="input-wrapper"
              labelFor="username"
              label="Username"
              inputType="text"
              inputValue={username}
              onChange={handleNameChange}
            />
            <FormSignUp
              divName="input-wrapper"
              labelFor="password"
              label="Password"
              inputType="password"
              inputValue={password}
              onChange={handlePasswordChange}
            />
            <FormSignUp
              divName="input-remember"
              labelFor="remember-me"
              label="Remember me"
              inputType="checkbox"
              inputValue={isRemember}
              onChange={handleRememberChange}
            />

            <button onClick={SubmitUser} className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
