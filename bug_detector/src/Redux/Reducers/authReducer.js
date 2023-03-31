const token = localStorage.getItem("authToken") || "";
var auth = false;
if(token.length != 0){
     auth = true
}
const initialState={
    authState: auth,
}

let authReducer = (state = initialState,Action) =>{
    switch(Action.type){
        case "AUTH_STATUS":
            state = {
                ...state,
                authState:Action.payload
            }
        break;
        default :
            return state
    }
    return state;
}

export {authReducer}
