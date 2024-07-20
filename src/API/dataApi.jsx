import { login, changeName } from "../Redux/actions/action";
import store from "../Redux/store/store";



export async function GetUserToken(email,password,rememberMe, navigate){
    try{
        const resp = await fetch('http://localhost:3001/api/v1/user/login',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })
        if(resp.ok){
            const data = await resp.json()
                if(data.status===200){
                    console.log(data);
                    const token = data.body.token
                    store.dispatch(login(token))
                    store.dispatch(changeName(data.body.firstName, data.body.lastName))
                    GetUserProfil(token)
                    if(rememberMe){
                        //Push dans le localstorage
                        localStorage.setItem("token", JSON.stringify(token))

                    }
                    else{
                        sessionStorage.setItem("token", JSON.stringify(token))
                    }
                    navigate("/profile")
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


export async function GetUserProfil(token){
    try{
        const resp = await fetch ('http://localhost:3001/api/v1/user/profile', {
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
            console.log(resp.status);
            console.log("Y'a un problème");
        }
    }
    catch(error){
        console.log(error);
    }

   
}

