const token = localStorage.getItem("authToken") || "";
var auth = false;
if(token.length != 0){
     auth = true
}
const initialState={
    authState: auth,
    bugState:false
}

let authReducer = (state = initialState,Action) =>{
    switch(Action.type){
        case "AUTH_STATUS":
            state = {
                ...state,
                authState:Action.payload
            }
        break;
        case "BUG_STATUS":
            state = {
                ...state,
                bugStatus:Action.payload
            }
        default :
            return state
    }
    return state;
}

export {authReducer}
