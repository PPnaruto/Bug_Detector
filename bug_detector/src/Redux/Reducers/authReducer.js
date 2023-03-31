const initialState={
    authState: false,
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
