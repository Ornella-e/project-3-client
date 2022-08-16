import "./Footer.css";

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
          {/*           <address class="address footer-center">
            Address <br />
            08014 Barcelona <br />
            Telf: 600.600.600 <br />
            <a href="mailto:hi@sharecouch.com">hi@sharecouch.com</a>
          </address> */}

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
