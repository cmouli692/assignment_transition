import React from 'react'
import "./ProfileCard.css"

const ProfileCard = () => {
  return (
    <div className='profile-card-container'>
      <div className='profile-name-and-location'>
        <div className='profile-name-icon-container'>
          <h1 className='profile-shortcut-name'>CB</h1>
        </div>
        <div>
          <h1>Hennibal Smith</h1>
          <div className='location-icon-and-address-text-container'>
            <div className='map-maker-icon-container'>
              <img src='map-marker (1).png'/>
            </div>
           
            <p>1 Market Street San Francisco, CA 9415</p>

          </div>
         
        </div>

       

        
      
      </div>

       {/* CUSTOMER DETAILS */}

      <div className='customer-details-card-container'>
        <div className='customer-details-container'>
          <p>Customer ID</p>
          <p>12345</p>
          <img src='Frame 1686558932.png'/>
        </div>
        <hr/>
       
        <div className='customer-details-container'> 
          <p>Email Address </p>
          <p>rachel@sample.com</p>
          <img src='Frame 1686558932.png'/>
        </div>
        <hr/>
        <div className='customer-details-container'> 
          <p>Phone Number </p>
          <p>8051298905</p>
          <img src='Frame 1686558932.png'/>
        </div>
        <hr/>
        <div className='add-button-container'>
          <img src='Vector (5).png'/>
          <p>Add</p>
        </div>

        </div>

        <div className='customer-details-card-container'>
        <div className='customer-details-container'>
          <p>Loyalty Tier</p>
          <p>Silver</p>
          <img src='Frame 1686558932.png'/>
        </div>
        <hr/>
       
        <div className='customer-details-container'> 
          <p>Segment </p>
          <p>Sleepy Customer</p>
          <img src='Frame 1686558932.png'/>
        </div>
        <hr/>
        
        <div className='add-button-container'>
          <img src='Vector (5).png'/>
          <p>Add</p>
        </div>

        </div>


        <div className='customer-details-card-container'>
        
       
        <div className='customer-details-container'> 
          <p>Lifetime Value </p>
          <p>$1M</p>
          <img src='Frame 1686558932.png'/>
        </div>
        <hr/>
        <div className='customer-details-container'> 
          <p>Propensity to Purchase </p>
          <div className='icon-percent-container'>
            <img src='Group 1171287003 (1).png'/>
            <p>75%</p>
          </div>
          
          <img src='Frame 1686558932.png'/>
        </div>
        <hr/>
        <div className='add-button-container'>
          <img src='Vector (5).png'/>
          <p>Add</p>
        </div>

        




        

        </div>

        <div className='customer-details-card-container'>
        
       
        <div className='customer-details-container'> 
          <p>Engagment Score </p>
          <div className='icon-percent-container'>
            <img src='Group 1171287003 (2).png'/>
            <p>80%</p>
            
          </div>
          <img src='Frame 1686558932.png'/>
          
        </div>
        
        <hr/>
        <div className='add-button-container'>
          <img src='Vector (5).png'/>
          <p>Add</p>
        </div>

        </div>

        <div className='add-agent-btn-and-add-new-widget-btn-container'>
          <button className='add-agent-btn'>
            <img src='user-add.png'/>
            <p className='assign-other-agent'>Assign other Agent</p>
          </button>
          <button className='add-new-widget-btn'>
            <p>Add New Widget</p>
          </button>
        </div>

    </div>
    
  )
}

export default ProfileCard
