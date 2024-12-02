import React from 'react'
import "./BottomThreeContainer.css"
import ProfileCard from '../ProfileCard/ProfileCard'
import DetailsCard from '../DetailsCard/DetailsCard'
import LeftTheeVerticalCards from '../LeftThreeVarticalCards/LeftTheeVerticalCards'

const BottomThreeContainer = () => {
  return (
    <div className='bottom-three-containers'>
      
        <ProfileCard/>
        <DetailsCard/>
        <div>
            <LeftTheeVerticalCards/>
        </div>
      
    </div>
  )
}

export default BottomThreeContainer
