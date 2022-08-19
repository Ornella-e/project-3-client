import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      {/*   <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div> */}
      </section>

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
                info@sherecouch.com
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