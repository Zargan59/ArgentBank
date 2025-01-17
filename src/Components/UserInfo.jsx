import { useEffect, useState } from "react";
import Account from "./Account";
import store from "../Redux/store/store";
import { changeName } from "../Redux/actions/action";
import { GetUserProfil, changeUserNames } from "../API/dataApi";
import { useSelector } from "react-redux";

export default function UserInfo({token}) {
  const [modal, setModal] = useState(false)
  const [changeFirstName, setChangeFirstName] = useState("")
  const [changeLastName, setChangeLastName] = useState("")

  const FirstName = useSelector((state)=>state.firstName);
  const LastName = useSelector((state)=>state.lastName)
  const handleChangeUserInfo = ()=>{
    setModal(true)
  }

  const handleCancel = ()=>{
    setModal(false)
  }
  useEffect(()=>{
    getUser()
  },[setChangeFirstName,setChangeLastName])

  const getUser = async ()=>{
    const token = JSON.parse(sessionStorage.getItem("token"))
    await GetUserProfil(token)
    setChangeFirstName(store.getState().firstName)
    setChangeLastName(store.getState().lastName)
  }


  const handleChangeName = (e)=>{
    if(e.target.id === "firstName"){
      setChangeFirstName(e.target.value)
    }
    else if (e.target.id === "lastName"){
      setChangeLastName(e.target.value)
    }
    
  }
  const handleValidChangeName = ()=>{
    setModal(false)
    store.dispatch(changeName(changeFirstName, changeLastName))
    changeUserNames(token,changeFirstName, changeLastName)
  }
  return (
    <main className="main bg-dark">
     <div className="header">
      { modal? 
      <div> 
        <h1> Welcome back</h1>
        <div className="editModal_InputContent">
          <input id="firstName" onChange={handleChangeName} type="text" placeholder={FirstName} />
          <input id="lastName" onChange={handleChangeName} type="text" placeholder={LastName} />
        </div>
        <div className="editModal_buttonContent">
          <button onClick={handleValidChangeName}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div> 

       :

       <div>
         <h1> Welcome back <br /> {changeFirstName} {changeLastName} !</h1>
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
