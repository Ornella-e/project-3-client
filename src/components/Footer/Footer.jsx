import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import useAuth from "../../context/auth/useAuth";
import Search from "../Search/Search";
import { useState,useEffect } from "react";
import bootstrap from 'bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import "./Footer.css"


export default function App() {
  const [couches, setCouches] = useState([]);
    const [searchedString, setSearchedString] = useState("")

    const getAllCouches = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/couch`);
      console.log(response);
      setCouches(response.data);
    };
    useEffect(() => {
      getAllCouches();
    }, []);

    let searchedCouches = null
	searchedString !== "" 
  ? (searchedCouches = couches.filter((couch) => {
				return couch.title.toLowerCase().includes(searchedString.toLowerCase())
		  }))
		: (searchedCouches = [])
  
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <div >
    <section className='d-flex justify-content-center  p-4 border-bottom'>

{/* ------ SEARCH BUTTON ----- */}
      <div  className="Search">
          <div> 
              <Search
                searchedString={searchedString}
                setSearchedString={setSearchedString}
                couches={searchedCouches}/>
              {searchedCouches.map((couch) => {
            return (
            
              <Link to={couch._id}>
                <ul class="cards">
                    <li>
                        <a href="" class="card">
                            <img  src={couch.image} class="card__image" />
                            <div class="card__overlay">
                            <div class="card__header">
                                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 

                                {/* user img */}
                                {/* <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />  */}                   
                                <div class="card__header-text">
                                      <h3 class="card__title">{couch.title}</h3>
                                      {/* <span class="card__status"> "Text"</span> */}   
                                </div>
                            </div>
                            {/* <img className="image-home" src="{currentUser.userImage}" alt="home-img" /> */}
                                <p class="card__description">{couch.location.country}</p>
                                <p class="card__description">{couch.location.city}</p>
                            </div>
                        </a>      
                    </li>
                </ul>  
                </Link>
                
            );
            })}  
              
          </div>
      </div>
{/* ------- SEARCH BUTTON ------ */}
    </section>
    </div>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Share Couch
              </h6>
              <p>
              The platform that connects travelers around the world looking for free accommodation, discover new places and make new friendships.
              </p>
              <a class="btn btn-light" href="/about">
                  About Us
              </a>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/my-couch' className='text-reset'>
                  Be a Host
                </a>
              </p>
              <p>
                <a href='/account' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='reservations' className='text-reset'>
                  Reservations
                </a>
              </p>
             
            </MDBCol>
            

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
             
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@sharecouch.com
              </p>
              
              
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Copyright</h6>
              <p>
                <a href='/about' className='text-reset'>
                Legal advice
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                Privacy Policy
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                Cookies
                </a>
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='/'>
          Share Couch
        </a>
      </div>
    </MDBFooter>
  );
}



/* import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-flex">
          <div className="footer-left">
            <div className="legal">
              <ul>
                <li>
                  <a
                    href="https://www.google.com/doodles/celebrating-the-dachshund-bobblehead"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Legal advice
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/doodles/chiquito-de-la-calzadas-90th-birthday"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/doodles/40th-anniversary-of-sesame-street-cookie-monster"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          

          <div className="social-media footer-right">
            <h3>Follow us!</h3>
            <ul>
              <li>
                <a
                  href="http://facebook.com/profile.php?=73322363"
                  target="_blank" rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copy">&copy; Copyright 2022</p>
        <p className="copy">
          Built with &#x2661; by
          <p>Ornella, Joao & Laia</p>
        </p>
      </footer>
    </>
  );
};

export default Footer;
 */