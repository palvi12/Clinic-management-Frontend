import React from "react";
//import img from "../images/bg.jpg"
import Slider from "../component/Slider";
import { Link } from "react-router-dom";
import Vmc from "./inc/Vmc";
//import Service2 from '../images/chair.jpg';
import Service0 from "../images/lk.jpg";
import Service3 from "../images/asd.jpg";
import Service4 from "../images/palv.jpg";

function Home() {
  return (
    <>
      <div>
        <Slider />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="fs-1 fw-bold">Our Clinic</h1>
                <div className="underline mx-auto"></div>
                <p>
                  A Clinic Management System is essentially software that helps
                  clinics streamline their operations and deliver better
                  healthcare. A typical clinic workflow involves the following.
                  While many clinics offer more general healthcare services,
                  some clinics are more specialized. These types of clinics may
                  be focused on areas like mental health, sexual health, or
                  addiction services. Many of the clinics that you encounter are
                  primary care clinics. These types of clinics typically provide
                  a broad level of care. The providers at primary care clinics
                  are often general practitioners. As the quality of health care
                  has become more of a concern around the world, hospitals have
                  had to pay more attention to this issue. One of the most
                  powerful ways to analyze this component of health care is
                  through independent external quality assessment, and hospital
                  accreditation is one way to do so. Accreditation is sourced
                  from other countries in many parts of the world, a phenomenon
                  known as international healthcare accreditation.
                </p>
                <Link to="/about" className="btn btn-warning shadow">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Vmc />

        <section className="section border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <h1 className="fs-1 fw-bold">Our Services</h1>
                <div className="underline mx-auto"></div>
              </div>

              <div className="col-md-4 ">
                <div className="card shadow">
                  <img
                    src={Service4}
                    className="w-100 border-bottom"
                    alt="Services"
                  />
                  <div className="card-body">
                    <h6>Services 1</h6>
                    <div className="underline"></div>
                    <p>
                      The Clinical Services and Systems Unit's work focuses on
                      integrated health service delivery, optimizing care
                      through primary, emergency, critical, and operative
                      channels. By prioritizing effective organization, planning
                      and patient movement across the health system, the Unit
                      aims to enhance service delivery that align with users'
                      needs, ensuring timely access to quality acute and chronic
                      care.
                    </p>
                    <Link to="/services" className="btn btn-link">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card shadow">
                  <img
                    src={Service0}
                    className="w-100 border-bottom"
                    alt="Services"
                  />
                  <div className="card-body">
                    <h6>Services 2</h6>
                    <div className="underline"></div>
                    <p>
                      A Clinic Management System is essentially software that
                      helps clinics streamline their operations and deliver
                      better healthcare. A hospital is a healthcare facility
                      that provides specialized medical and nursing care as well
                      as medical supplies to patients. The most well-known form
                      of the hospital is the general hospital, which usually
                      carries an emergency department to handle urgent health
                      issues such as fire and accident victims, as well as
                      medical emergencies.
                    </p>
                    <Link to="/services" className="btn btn-link">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card shadow">
                  <img
                    src={Service3}
                    className="w-100 border-bottom"
                    alt="Services"
                  />
                  <div className="card-body">
                    <h6>Services 3</h6>
                    <div className="underline"></div>
                    <p>
                      Clinic Services refers to the clinical services provided
                      by the Hospital, as well as the operational activities
                      that support those clinical services, which are funded in
                      whole or in part by the LHIN, and includes the type,
                      volume, frequency, and availability of Hospital Services;
                      HSAA Indicator Technical Specifications refers to the
                      document titled "HSAA Indicator Technical Specifications,
                      " as amended or replaced from time to time.
                    </p>
                    <Link to="/services" className="btn btn-link">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Slider/> */}
        {/* <img src={img} alt="images" style={{width:"100%",height:"40%"}} /> */}
      </div>
    </>
  );
}
export default Home;
