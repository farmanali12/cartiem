import React from 'react'
import "./fooditem.css"
import Fedds from '../feeds/feeds'
import { Cartcontext } from '../Contextapi/Context'
import { useContext } from 'react'
import Item from './Item'
function Fooditem() {
  const { item,clearCart,totalItem,totalAmount} = useContext(Cartcontext)
  return (
    <section className='fooditem'>
    <div className='totalitemparent'>
      <h1 className='totalitem'>you have {totalItem} Item in Cart</h1>
    </div>
      <div className='container grid'>
        {
          item.map((curElem)=>{
            return (
              <Item key={curElem.id}{...curElem}/>
            )
          })
        }
      </div>
      {/* footer */}
      <section className='footercart  '>
        <div>
          <h1 className='carttotal'>Cart Total : <span>{totalAmount}</span> ₹</h1>
        </div>

        <div className='footerbtn'>
          <button className='footerbtn_1'>CHECKOUT</button>
          <button className='footerbtn_2' onClick={clearCart}>CLEAER CART</button>
        </div>
      </section>
    </section>
  )
}

export default Fooditem