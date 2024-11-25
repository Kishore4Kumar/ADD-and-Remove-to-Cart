import {ADD_TO_CART, REMOVE_TO_CART} from "../constants"

export  const addtoCart=(data)=>{
    console.log("action file", data)
    return{
        type: ADD_TO_CART,
        data: data,
    }
}

export  const removetoCart=()=>{
    console.log("action FOR REMOVE")
    return{
        type: REMOVE_TO_CART,
    }
}