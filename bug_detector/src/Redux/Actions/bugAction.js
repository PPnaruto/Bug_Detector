
let bugAction = (value,dispatch) =>{
    dispatch({
        type:"BUG_STATUS",
        payload:value
    })
}

export {bugAction}