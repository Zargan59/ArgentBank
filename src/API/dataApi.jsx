import { changeName } from "../Redux/actions/action";
import store from "../Redux/store/store";

export async function GetUserToken(email,password,rememberMe){
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
                    sessionStorage.setItem("token", JSON.stringify(token))
                    if(rememberMe){
                        localStorage.setItem("token", JSON.stringify(token))
                    }
                }
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
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}`
            }
        })
        if(resp.ok){
            const data = await resp.json()
            if(data.status===200){
                store.dispatch(changeName(data.body.firstName, data.body.lastName))
                return(data)
            }   
    }
}
    catch(error){
        console.log(error);
    }
}

export async function changeUserNames(token, firstName, lastName){
    try{
        const resp = await fetch ('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers:{
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}`
            },
            body: JSON.stringify({firstName,lastName})
        })
        if(resp.ok){
            const data = await resp.json()
            if(data.status===200){
                store.dispatch(changeName(data.body.firstName, data.body.lastName))
                return(data)
            }
        }
    }
    catch(error){
        console.log(error);
    }
}

