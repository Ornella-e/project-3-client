import React, { Component } from 'react'
import ProfileImage from './ProfileImage'
import { NavLink } from 'react-router-dom'
import UserPictureUploader from './UserPictureUploader'


export default class ProfileCard extends Component {
  render() {
    return (
      <div className='ComponentProfilCard'>
          <h2>ProfileCard</h2>
          <h4>Identity verification</h4>
          <ProfileImage/>
          <UserPictureUploader/> 
          {/* <h4>Update/Change Image</h4> */}

          <NavLink className="" to="/my-couch"><h4>Become a Host</h4></NavLink>
      </div>
    )
  }
}
