import React from 'react'
import { RxCross1 } from "react-icons/rx";
import "./DetailsCard.css"

const DetailsCard = () => {
  return (
    <div >
      <div className='details-card-container'>
        <p>Conversation</p>
        <div className='details-text-icon-container'>
          <p>Address Update</p>
          <RxCross1/>
        </div>

        <div className='details-text-icon-container'>
          <p>Fee Reversal</p>
          <RxCross1/>
        </div>

        <p>Retail</p>

        <button className='escalate-btn'>Escalate</button>
        
        
        
      </div>
    </div>
  )
}

export default DetailsCard
