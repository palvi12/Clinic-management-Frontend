import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
//import {useHistory} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

const AddHospitalComponent = () => {
  const navigate = useNavigate();

  const [hid, sethid] = useState("");
  const [hname, sethname] = useState("");
  const [hnameError, sethnameError] = useState("");
  const validateName = (value) => {
    if (!value.trim()) {
      sethnameError("Name is required");
    } else if (!/^[a-zA-Z0-9]*$/.test(value)) {
      sethnameError("Name must contain only letters");
    } else {
      sethnameError("");
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    sethname(value);
    validateName(value);
  };
  const [hphoneno, sethphoneno] = useState("");
  const [isError, setIsError] = useState(false);
  const pattern = new RegExp(/^\d{1,10}$/);
  const [haddress, sethaddress] = useState("");
  const [hgmail, sethgmail] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [isValid, setIsValid] = useState(true);

  const handleGmailOnChange = (e) => {
    const inputEmail = e.target.value;
    sethgmail(inputEmail);

    // Regular expression for email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Check if the input email matches the regex
    setIsValid(emailRegex.test(inputEmail));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const hospital = { hid, hname, hphoneno, haddress, hgmail };

    console.log(hospital);

    try {
      const { data } = await axiosInstance.post("/addHospital", hospital);
      if (data) {
        navigate("/hospital");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // handleChange(e) {
  //     const email = e.target.value;
  //     const isValidEmail = emailRegex.test(email);
  //     // Update state or show validation message based on `isValidEmail`.
  //   }
  // const handlegmailChange = (e) => {
  //     const value = e.target.value;
  //     setValidgmail(value)
  //     validateName(value);
  //   };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add Hospital</h2>
            <div className="card-body">
              <span className="text-danger">All * fields are required.</span>
              <form onSubmit={submitHandler}>
                <div className="form-group mb-2">
                  <label className="form-label"> Hospital id :</label>
                  <input
                    type="text"
                    placeholder="Enter hid"
                    name="hid"
                    className="form-control"
                    value={hid}
                    onChange={(e) => sethid(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <span className="text-danger">*</span> Hospital name :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="hname"
                    required
                    className="form-control"
                    value={hname}
                    onChange={(e) => handleNameChange(e)}
                  ></input>
                  {hnameError && <p>{hnameError}</p>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <span className="text-danger">*</span> Hospital phoneno:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone_no"
                    name="phoneno"
                    required
                    className="form-control"
                    value={hphoneno}
                    onChange={(e) => {
                      if (pattern.test(e.target.value)) {
                        sethphoneno(e.target.value);
                        console.log(e.target.value);
                        setIsError(false);
                      } else setIsError(true);
                    }}
                  ></input>
                  <h5>
                    Your Mobile Number is:
                    {isError ? "Invalid" : "+91" + hphoneno}
                  </h5>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <span className="text-danger">*</span> Hospital address :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter haddress"
                    name="haddress"
                    required
                    className="form-control"
                    value={haddress}
                    onChange={(e) => sethaddress(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <span className="text-danger">*</span> Hospital gmail :
                  </label>
                  <input
                    type="email"
                    placeholder="Enter gmail"
                    name="hgmail"
                    required
                    className="form-control"
                    value={hgmail}
                    onChange={(e) => handleGmailOnChange(e)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={() => toast.success("Data added successfully")}
                >
                  Submit
                </button>
                <Link to="/patients" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddHospitalComponent;
