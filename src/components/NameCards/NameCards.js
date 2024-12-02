import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./NameCards.css"

const NameCards = () => {
  return (
    <div className='name-cards-container'>
      {/* <div className='name-cards-container'>
        <div className='name-icon'>
          <p>CB</p>
        </div>
        <p>Cheyenne Bergson</p>
      </div> */}

      <div className='name-card-container'>
        <div className='name-short-cut-container'>
          <p>CB</p>
        </div>
        <p>Cheyenne Bergson</p>
        
      </div>

      <div className='name-card-container'>
        <div className='name-short-cut-container'>
          <p>CB</p>
        </div>
        <p>Cheyenne Bergson</p>
        
      </div>


      <div className='name-card-container'>
        <div className='name-short-cut-container'>
          <p>CB</p>
        </div>
        <p>Cheyenne Bergson</p>
        
      </div>


      <div className='name-card-container'>
        <div className='name-short-cut-container'>
          <p>CB</p>
        </div>
        <p>Cheyenne Bergson</p>
        
      </div>


      <div className='name-card-container'>
        <div className='name-short-cut-container'>
          <p>CB</p>
        </div>
        <p>Cheyenne Bergson</p>
        
      </div>


      {/* <div className='name-card-container'>
        <div className='name-short-cut-container'>
          <p>CB</p>
        </div>
        <p>Cheyenne Bergson</p>
        
      </div> */}

     


      <div className='messaging-name-card-container'>
        <div className='messaging-icon-container'>
          <img src='comments.png'/>
        </div>
        <p className='messaging-text'>Messaging</p>
        < MdOutlineKeyboardArrowRight className='messaging-container-right-arrow'/>
        
      </div>


     
      

     
      {/* <h1>name cards</h1>
      <h1>name cards</h1>
      <h1>name cards</h1>
      <h1>name cards</h1>
      <h1>name cards</h1> */}
    </div>
  )
}

export default NameCards
