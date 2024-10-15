import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <main id="main">
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <h2>About</h2>
              <h3>
                Learn More <span>About Us</span>
              </h3>
              <p>
                We offer collaborative and empowering software solutions that
                enable you to expand your reach and explore new opportunities.
              </p>
            </div>

            <div class="content">
              <div class="about-content">
                <p>
                  We are a digital transformation consultancy and software
                  development company that provides cutting edge engineering
                  solutions, helping companies and enterprise clients untangle
                  complex issues that always emerge during their digital
                  evolution journey.
                </p>
                <ul>
                  <li>
                    <i class="ri-check-double-line"></i>
                    Achieve Business Goals
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> Maximize the timely
                    deliverables
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i>
                    Accelerate Growth
                  </li>
                </ul>
              </div>
              <div class="about-content">
                <p>
                  We’re experts in software development with a proven track
                  record of exceeding clients’ expectations. Our team follows a
                  rigorous process for transparent and timely project delivery.
                  We stay up-to-date with the latest industry trends and
                  continually refine our approach for the best outcomes.
                </p>
                <a href="#" class="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
