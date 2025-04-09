import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Richard Sanford <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} alt="" />
      </div>
      <div className="chat-msg">
        <d  iv className="s-msg">
          <p className="msg">
            Hey! Just wanted to check in on the project progress. Need any help?
          </p>
          <div className="">
            <img className="s-msg-img" src={assets.profile_img} alt="" />
            <p>2:30 pm</p>
          </div>
        </d>
        <div className="s-msg">
          <img className="msg-img" src={assets.pic1} alt="" />
          <div className="">
            <img className="s-msg-img" src={assets.profile_img} alt="" />
            <p>2:30 pm</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Sure! Actually, I’m finalizing the layout today. Will share the
            update by evening.
          </p>
          <div className="">
            <img className="r-msg-img" src={assets.profile_img} alt="" />
            <p>2:30 pm</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Send Message" />
        <input
          type="file"
          name=""
          id="image"
          accept="image/png image/jpg"
          hidden
        />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox
