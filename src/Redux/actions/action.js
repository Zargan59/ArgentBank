import { type } from "@testing-library/user-event/dist/type"

export const  LOGIN = "LOGIN"
//exporte à partir d'ici toutes les fonctions qui vont pouvoir être fais par l'user

//Connexion réussis
export const login = (token)=> {
   // console.log("ICi");

   return {
        type: "LOGIN",
        payload: token
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




