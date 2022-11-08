import React from 'react'

function Reducer(state, action) {
  if (action.type === "REMOVE_ITEM") {

    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload
      })
    }
  }
  if (action.type === "clearcart") {
    return { ...state, item: [] }
  }
  if (action.type === "increment") {
    let updatecart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 }
      }
      return curElem
    })
    return{...state,item:updatecart}
  }

  if(action.type==="decrement"){
    const cartupdate=state.item.map((curElema)=>{
       if(curElema.id===action.payload){
        return{...curElema,quantity:curElema.quantity-1}
       }
       return curElema
    }).filter((curElema)=>{
      return curElema.quantity!=0
    })
    return{...state,item:cartupdate}
  }
  if(action.type==="Get_total"){
    let { totalItem ,totalAmount} =state.item.reduce((accum,curval)=>{
      let{price,quantity}=curval;
      let updatedtotalAmount=price*quantity;
      accum.totalAmount+=updatedtotalAmount;
     accum.totalItem += quantity
     return accum
    },
    {
   totalItem:0,
   totalAmount:0,
    }) 
return {...state,totalItem,totalAmount}
  }
  
  return state
}

export default Reducer