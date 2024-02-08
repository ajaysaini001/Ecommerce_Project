import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import "./style.css";
const Navbar = () => {
  return (
    <div className='wrapper'>
        <div className="content">
            <ul className="left">
                <li className="logo">eCommerce</li>
                <li className="li">Products</li>
                <li className="li">Add a product </li>
                <li className='plus'>< CiCirclePlus size={20}/></li>
            </ul>
            <div className="right">
                <span className='name'>John Doe</span>
                <img src=".\person.jpeg" alt="" width="100px" height="100px" />
            </div>

        </div>
    </div>
  )
}

export default Navbar
