import { login } from "../Redux/actions/action";
import store from "../Redux/store/store";



export async function GetUserToken(email,password,rememberMe, navigate){
    console.log("le mail : ", email);
    console.log("le mdp : ", password);
    try{
        const resp = await fetch('http://localhost:3001/api/v1/user/login',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        if(resp.ok){
            const data = await resp.json()
                if(data.status===200){
                    
                    const token = data.body.token
                    store.dispatch(login(token))
                    navigate("/profile")

                    if(rememberMe){
                        let user ={
                            email,
                            password
                        }
                        //Push dans le localstorage
                        localStorage.setItem("user", JSON.stringify(user))
                    }
                }
        }
        else{
            console.log("ERREUR d'API sur le GETUSER");
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function GoToProfil(token, navigate){
    try{
        const resp = await fetch ('http://localhost:3001/api/v1/user/login', {
            method: "POST",
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
        if(resp.ok){
            const data = await resp.json()
            console.log(data);
                if(data.status===200){
                    console.log("Envoie sur sa page");
                    
                }
        }
        else{
            console.log("Y'a un problème");
        }
    }
    catch(error){
        console.log(error);
    }

   
}

