import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import FormSignUp from "../Components/Form/FormSignUp";
import { useEffect, useState } from "react";
import { GetUserToken, GetUserProfil } from "../API/dataApi";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { login } from "../Redux/actions/action";

import store from "../Redux/store/store";

export default function SignIn() {
  const navigate = useNavigate();

  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  useEffect(()=>{
    const isUserRemember = JSON.parse(localStorage.getItem("token"));
    if (isUserRemember) {
      sessionStorage.setItem("token", JSON.stringify(isUserRemember))
      const token = isUserRemember
      store.dispatch(login(token))
      navigate("/profile")
    }
  }, [])

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
    //Si les 2 champs sont remplis, je vérifie qu'ils soient correctes
    if (username && password) {
      await GetUserToken(username, password, isRemember);
    }
    //Je récupère le token
    const token = JSON.parse(sessionStorage.getItem("token"))
    //Si le token est présent, je vais sur la page profile
    if(token){
      navigate("/profile")
    }
  };
  
 

  return (
    <div>
      <Navbar />
      <main className="main bg-dark signUpPage">
        <section className="sign-in-content">
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
