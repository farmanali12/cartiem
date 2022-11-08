import React from 'react'
import { useContext } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

import { Cartcontext } from '../Contextapi/Context'
import { useEffect } from 'react'
function Item({id,image,price,name,quantity}) {
    const {removeItem,increment,decrement}=useContext(Cartcontext)
    useEffect(()=>{
Aos.init();
    },[])
  return (
    <>
    
       <div className='card grid3' key={id} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                <div>
                  <img src={image} alt='logo'></img>
                </div>

                <h1 className='name'>{name}</h1>
                <p className='price'>price: <span>{price} </span> ₹</p>
                <p></p>
                {/* <p>cost inr:100</p> */}
                <div className='cartbtnparent'>
                  <button className='button1' onClick={()=>decrement(id)} >-</button>
                  <input type="text" placeholder={quantity} />
                 
                  <button className='button2' onClick={()=>increment(id)}>+</button>
                  {/* <button className='delete'>Remove item</button> */}
                  <i className="fa-solid fa-trash delete" onClick={()=>removeItem(id)}></i>
                </div>


              </div> 
    </>
  )
}

export default Item