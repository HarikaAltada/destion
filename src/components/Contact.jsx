import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div>
      {" "}
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
            <h3>
              Contact <span>Us</span>
            </h3>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48390.445154306064!2d-74.005623!3d40.709148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1728906126567!5m2!1sen!2sus"
              width="1300"
              height="280"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="contact-section">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>1st Floor It Sez, Kakinada, Andhra Pradesh 533001</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@destion.in</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 9494114128</p>
              </div>
            </div>

            <div className="contact-info">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="form-details">
                  <div class="form-name">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div class="form-email">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                {/* <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
                <div class="btn">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
