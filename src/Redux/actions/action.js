import { type } from "@testing-library/user-event/dist/type"

export const  LOGIN = "LOGIN"
export const CHANGENAME = "CHANGENAME"
export const LOGOUT = "LOGOUT"

//Connexion réussis
export const login = (token)=> {
   return {
        type: "LOGIN",
        payload: token
   }
} 

//Changement de nom 
export const changeName = (firstName, lastName) =>{
   return{
      type : "CHANGENAME",
      payload :  {firstName, lastName}
   }
}

//Déconnexion
export const logout = ()=>{
   return { 
      type : "LOGOUT"
   }
}




