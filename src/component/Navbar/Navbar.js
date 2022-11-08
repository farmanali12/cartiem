import React from 'react'
import "./Navbar.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import{BiRestaurant} from "react-icons/bi"
import { useContext } from 'react'
import { Cartcontext } from '../Contextapi/Context'
function Navbar() {
  const{totalItem} = useContext(Cartcontext)
    return (
        <div className='bgcolor'>
            <div className='container flex'>
            
                <nav>
                    <ul>
                    <i className='fonticon'><BiRestaurant/></i>
                        <li className='foodrest'>Food restaurent</li>
                        {/* <li></li> */}
                    </ul>
                </nav>
                <div className='counticonparent'>
                <i className='fonticon'><AiOutlineShoppingCart/></i>
                <p className='counticon'>{totalItem}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar