import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "./Reducer";
import Fedds from "../feeds/feeds";
import { useEffect } from "react";
export const Cartcontext = createContext()
const initialstate = {
    item: Fedds,
    totalAmount: 0,
    totalItem: 0,
}
function Cart({children}) {
    const [state, dispatch] = useReducer(Reducer, initialstate)
    //remove individual item
    const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload:id,
        })
    };
    //cleart cart
    const clearCart=()=>{
        dispatch({
            type:"clearcart"
        })
    }
    //increment item quantity
    const increment=(id)=>{
        dispatch({
            type:"increment",
            payload:id,
        })
    }
    //decrement item quantity
    const decrement=(id)=>{
        dispatch({
            type:"decrement",
            payload:id,
        })
    }

    //we will use the useeffect to update the data
    useEffect(()=>{
        dispatch({
            type:"Get_total"
        })
    },[state.item])
    console.log(state)
    return (
        <>
            <Cartcontext.Provider value={{ ...state,removeItem,clearCart,increment,decrement }}>
                {children}
            </Cartcontext.Provider>
        </>
    )
}
export default Cart