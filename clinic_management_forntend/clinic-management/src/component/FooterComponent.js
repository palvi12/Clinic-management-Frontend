import React from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div>
      <section className="section footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6>
                <i class="bi bi-info-circle"></i>Clinic Information
              </h6>
              <hr />
              <p className="text-white">
                Clinic, an organized medical service offering diagnostic,
                therapeutic, or preventive outpatient services. Often, the term
                covers an entire medical teaching centre, including the hospital
                and the outpatient facilities. The medical care offered by a
                clinic may or may not be connected with a hospital.
              </p>
            </div>
            <div className="col-md-4">
              <h6>
                <i class="bi bi-link-45deg"></i>Quick Links
              </h6>
              <hr />
              <div>
                <Link to="/home">Home</Link>
              </div>
              <div>
                <Link to="/hospital">Hospital</Link>
              </div>
              <div>
                <Link to="/city">City</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <Link to="/patients">Patient</Link>
              </div>
            </div>
            <div className="col-md-4">
              <h6>
                <i class="bi bi-phone-vibrate-fill"></i>Contact Information
              </h6>
              <hr />
              <div>
                <p className="text-white mb-1">+917488987035</p>
              </div>
              <div>
                <p className="text-white mb-1">+919234269272</p>
              </div>
              <div>
                <p className="text-white mb-1">clinicmail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterComponent;
