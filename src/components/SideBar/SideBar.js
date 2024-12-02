import React from 'react'
import { AiOutlineAudit } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoLink } from "react-icons/go";

import { AiOutlineFileDone } from "react-icons/ai";

import "./SideBar.css"

const SideBar = () => {
  return (
    <div className='sidebar-container'>
        <div className='sidebar-logo-container'>
          <img src='riskhawk-logo 1 (1).png'/>
        </div>
        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineAudit className='react-icons'/>
          </div>
          
          <p>Internal Audit</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineFileDone  className='react-icons'/>
          </div>
          
          <p>UAT Testing</p>
          <div className='react-icon-container'>
            {}
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <GoLink className='react-icons'/>
          </div>
          
          <p>Intract</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineAudit className='react-icons'/>
          </div>
          
          <p>Intract</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineAudit className='react-icons'/>
          </div>
          
          <p>Internal Audit</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineAudit className='react-icons'/>
          </div>
          
          <p>Internal Audit</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineAudit className='react-icons'/>
          </div>
          
          <p>Internal Audit</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineAudit className='react-icons'/>
          </div>
          
          <p>Internal Audit</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

        <div className='side-bar-nav-elements-container'>
          <div className='react-icon-container'>
            <AiOutlineAudit className='react-icons'/>
          </div>
          
          <p>Internal Audit</p>
          <div className='react-icon-container'>
            <MdOutlineKeyboardArrowRight className='react-icons'/>
          </div>
          
        </div>

      
    </div>
  )
}

export default SideBar
