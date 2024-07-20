import { type } from "@testing-library/user-event/dist/type"

export const  LOGIN = "LOGIN"
export const CHANGENAME = "CHANGENAME"
//exporte à partir d'ici toutes les fonctions qui vont pouvoir être fais par l'user

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
//Connexion échoué

//En cours de connexion

//Déconnexion
export const logout = ()=>{
   return { 
      type : "LOGOUT"
   }
}




