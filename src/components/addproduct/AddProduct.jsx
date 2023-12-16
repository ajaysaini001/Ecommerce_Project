import React from 'react'
import { MdEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import "./style.css";
const AddProduct = () => {
  return (
    <div className='addproduct'>
        <div className="products">
            {/* <div className="sort">sort by price</div> */}

            <div className="product">
                <div className="info">
                    <div className="image">
                    <img src=".\person.jpeg" alt="" width="100px" height="100px" />
                    </div>
                    <div className="detail">
                        <span className='name'>Red Seat</span>
                        <span className='price'>Rs $4000</span>
                        <span className='rating'>*****</span>
                    </div>
                </div>

                {/* right */}
                <div className="about">
                    <p>This is a well desined and crafted product thst will suil many 
                        nees in terms of quality ,craftinternship and desthetics
                    </p>
                    <div className="btn">
                        <MdEdit />
                        <RiDeleteBin2Fill />

                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default AddProduct