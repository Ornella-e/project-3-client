import React, { Component } from 'react'
import UserPictureUploader from './UserPictureUploader'
import ProfileImage from './ProfileImage'

export default class ProfileCard extends Component {
  render() {
    return (
      <div className='ComponentProfilCard'>
          <h2>ProfileCard</h2>
          <h4>Identity verification</h4>
          <ProfileImage/>
          <UserPictureUploader/>
          <h4>Update Image</h4>
          <h4>Become a Host</h4>
          
      </div>
    )
  }
}
