import { LOGIN } from "../actions/action";
const userInitialState = {
    isLoggedIn: false,
    firstName : "",
    lastName:"",
    email:"",
    password:"", 
    token : "",
    remember: false
}

// export default function combineReducers(){}

export default function userAuthReducer(state = userInitialState, action){
    switch(action.type){
        case "LOGIN": {
            return{
                ...state,
                token : action.token,
                isLoggedIn : true,
            }
                
            

        }
        case "logout" :{
            return{
                ...state
            }
        }
        case "changeName":{

        }
        case "rememberMe":{
            return{
                remember: true
            }
        }
    }
}

// http://localhost:3001/api/v1/user/signup'

