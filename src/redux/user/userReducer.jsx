import {UserActionTypes} from './userTypes';


const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (currentState = INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser : action.payload
            }
        case UserActionTypes.SIGN_OUT:
            return{
                ...currentState,
                currentUser: null
            }
        default:
            return currentState;
    }
}  


export default userReducer;