import React from 'react'
import assets from '../../assets/assets'
import './LeftSideBar.css'

const LeftSideBar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="" className="ls-nav-logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" className="menu-icon" />
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search Here" />
        </div>
      </div>
      <div className="ls-list">
        <div className="friends">
          <img src={assets.profile_img} alt="" />
          <p>
            Richard Sanford <span>Hello how are you</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar