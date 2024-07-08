import React from "react";
import Vmc from "./inc/Vmc";

function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>
                <i class="bi bi-telephone-plus"></i>Contact Us
              </h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">
                <i class="bi bi-phone-vibrate-fill"></i>Contact Us/About Us
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section border-bottom">
        <div className="container">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading">
              <i class="bi bi-file-earmark-person"></i>About Us
            </h3>
            <div className="underline mx-auto"></div>
          </div>
          <p>
            A Clinic Management System is essentially software that helps
            clinics streamline their operations and deliver better healthcare. A
            typical clinic workflow involves the following. A patient blocks an
            appointment with a practising doctor at the clinic. Registration of
            patient data is done at the time of visit. The doctor meets the
            patient and offers medical advice. Accordingly, the patient may have
            to get some diagnostic tests conducted or purchase the prescribed
            medicines. Therefore, as per need, the patient would access the
            clinic lab and pharmacy. The treatment bill is generated as per
            services availed. So, apart from the treatment cycle, clinic
            operations and administration include upkeep of the clinic, staffing
            records, maintenance of various departments, including laboratory,
            pharmacy, emergency, housekeeping, etc. The clinic also has to
            maintain various inventories and stock as well as coordinate with
            other stakeholders such as diagnostic labs, medical equipment
            vendors, so on and so forth.
          </p>
        </div>
      </section>
      <Vmc />
    </div>
  );
}

export default Contact;
