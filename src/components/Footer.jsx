import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-section">
              <div class="footer-contact">
                <h3>Destion</h3>
                <p>
                  1st Floor IT-SEZ <br />
                  Kakinada, AP 533001
                  <br />
                  India
                  <br />
                  <br />
                  <strong>Phone:</strong>+91 9494114128
                  <br />
                  <strong>Email:</strong> info@destion.in
                  <br />
                </p>
              </div>

              <div class="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p className="newsletter-description">
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
