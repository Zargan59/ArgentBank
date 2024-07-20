import { useState } from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import store from "../Redux/store/store";
import { changeName } from "../Redux/actions/action";
export default function UserInfo() {
  const [modal, setModal] = useState(false)
  const [changeFirstName, setChangeFirstName] = useState("")
  const [changeLastName, setChangeLastName] = useState("")


  const handleChangeUserInfo = ()=>{
    setModal(true)
  }
  const handleCancel = ()=>{
    setModal(false)
  }
  //Modifié les infos de l'user
  const changeUserInfo = ()=>{

    store.dispatch(changeName(changeFirstName, changeLastName))
    console.log(store.getState());

  }

  const handleChangeName = (e)=>{
    //Récupérer les éléments des inputs
    if(e.target.id === "firstName"){
      setChangeFirstName(e.target.value)
    }
    else if (e.target.id === "lastName"){
      console.log("Le nom est changé");
      setChangeLastName(e.target.value)
    }
    
  }
  const handleValidChangeName = ()=>{
    console.log(changeLastName);
    console.log(changeFirstName);
    changeUserInfo()
  }
///Ajouter les informations de l'user dans le place holder et sur le message de bienvenue quand le store.getState sera opérationnel
  return (
    <main className="main bg-dark">
     <div className="header">
      { modal? 
      <div> 
        <h1> Welcome back</h1>
        <div className="editModal_InputContent">
          <input id="firstName" onChange={handleChangeName} type="text" placeholder="Tony" />
          <input id="lastName" onChange={handleChangeName} type="text" placeholder="TEST" />
        </div>
        <div className="editModal_buttonContent">
          <button onClick={handleValidChangeName}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div> 

       :

       <div>
         <h1> Welcome back <br /> Tony Jarvis!</h1>
         <button onClick={handleChangeUserInfo} className="edit-button">Edit Name</button>
      </div>
       }
       
      </div>

       <h2 className="sr-only">Accounts</h2>
       <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
       <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
       <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
      
    </main>
  );
}
