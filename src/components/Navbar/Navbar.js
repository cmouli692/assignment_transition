import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div>
          <p>Chat/Feed chat</p>
        </div>

        
        <div className='nav-elements-container'>

          <div className='home-icon-process-owner-hod-container'>
            <img src='home.png'/>
            <div className='process-owner-hod-text-container'>
              <p>Process Owner HOD</p>
            </div>
          </div>
          

          

          <div className='admin-name-profile-pic-container'>
            <div className='admin-text-main-container'>
              <p>Admin</p>
            </div>
            <p className='profile-name-text'>Palak Banshal</p>
            <div>
              <img src='Ellipse 3855 (2).png' />
            </div>

          </div>

          {/* settings btn */}
          
          <div>
            <img src='Vector (3).png'/>

          </div>
          <div className='sign-out-img-logout-text-container'>
            <img src='sign-out.png'/>
            <p>Logout</p>
          </div>
          
        </div>

        
      
    </div>
  )
}

export default Navbar
