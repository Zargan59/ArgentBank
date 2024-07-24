import { LOGIN, CHANGENAME, LOGOUT } from "../actions/action";
const userInitialState = {
    firstName : "",
    lastName:"",
    token : ""
}

// export default function combineReducers(){}

export default function userAuthReducer(state = userInitialState, action){
    switch(action.type){
        case LOGIN: {
            return{
                ...state,
                token : action.payload,
            }

        }

        case LOGOUT :{
            return{
                ...state
            }
        }
        case CHANGENAME:{
            return{
                ...state, 
                firstName : action.payload.firstName,
                lastName: action.payload.lastName
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


