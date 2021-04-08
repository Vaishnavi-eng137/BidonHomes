export const addProduct=(data)=>{
    return {
     type:"ADD_PRODUCT",
     payload:data
    }
}

export const loginUser=(data)=>{
    return{
        type:"LOGIN_USER",
        payload:data
    }
}

export const logout=()=>{
    return{
        type:"LOGOUT"
    }
}

export const resetData=(data)=>{
    return{
        type:"RESET_DATA",
        payload:data
    }
}