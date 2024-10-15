import React from "react";
import "./Services.css";
function Services() {
  return (
    <div>
      {" "}
      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <h2>Services</h2>
            <h3>
              We do offer awesome <span>Services</span>
            </h3>
          </div>

          <div class="services-content">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4 class="title">
                  <a href="">FinTech development services</a>
                </h4>
                <p class="description">
                  Destion provides comprehensive FinTech development services to
                  help businesses stay ahead of the rapidly evolving financial
                  landscape.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4 class="title">
                  <a href="">Healthcare development services</a>
                </h4>
                <p class="description">
                  Destion provides top-notch healthcare development services
                  that help healthcare providers improve patient outcomes and
                  enhance operational efficiency.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4 class="title">
                  <a href="">Consumer development servicess</a>
                </h4>
                <p class="description">
                  Destion provides innovative consumer development services that
                  help businesses build engaging and user-friendly digital
                  products and experiences.
                </p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-world"></i>
                </div>
                <h4 class="title">
                  <a href="">Financial services development services</a>
                </h4>
                <p class="description">
                  Destion specializes in developing customized financial
                  services that cater to the specific needs of businesses and
                  their clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
