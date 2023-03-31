
let authAction = (value,dispatch) =>{
    dispatch({
        type:"AUTH_STATUS",
        payload:value
    })
}

export {authAction}