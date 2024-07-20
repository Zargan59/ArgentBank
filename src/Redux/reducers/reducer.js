import { LOGIN,CHANGENAME } from "../actions/action";
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
        case LOGIN: {
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
        case CHANGENAME:{
            return{
                ...state, 
                firstName : action.firstName,
                lastName: action.lastName
            }
        }
        case "rememberMe":{
            return{
                remember: true
            }
        }
        default : return state
    }
}


