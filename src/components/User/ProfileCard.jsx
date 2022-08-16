import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import ProfileImage from './ProfileImage';
import useAuth from '../../context/auth/useAuth';
import "./Style.css"



export default function ProfileCard() {
  const { isLoggedIn, currentUser, removeUser } = useAuth()
  return (
    <section>
      <MDBContainer className=" ">
        <MDBRow className="">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <ProfileImage alt="Avatar" className="my-5" style={{ width: '80px' }} fluid/>
                  <MDBTypography tag="h5">{currentUser.username}</MDBTypography>
                  <MDBCardText>Information</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Country</MDBTypography>
                        <MDBCardText className="text-muted">country Hier</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted">city Hier</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}


/* import React, { Component } from 'react'
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
          

          <NavLink className="" to="/my-couch"><h4>Become a Host</h4></NavLink>
      </div>
    )
  }
}
 */
{/* <h4>Update/Change Image</h4> */}