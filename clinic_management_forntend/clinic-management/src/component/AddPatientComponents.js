import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
//import {useHistory} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPatientComponents = () => {
  const navigate = useNavigate();
  // const[patients,setPatients]=useState([]);
  const [pid, setpid] = useState("");
  const [pidError, setpidError] = useState("");
  const [name, setname] = useState("");
  const [nameError, setnameError] = useState("");

  const validateName = (value) => {
    if (!value.trim()) {
      setnameError("Name is required");
    } else if (!/^[a-zA-Z0-9]*$/.test(value)) {
      setnameError("Name must contain only letters");
    } else {
      setnameError("");
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setname(value);
    validateName(value);
  };

  const [phone_no, setphone_no] = useState("");
  const [isError, setIsError] = useState(" ");

  const pattern = new RegExp(/^\d{1,10}$/);
  const [gender, setgender] = useState("male");

  const [address, setaddress] = useState("");
  const [appointment_date, setappointment_date] = useState("");
  const [discharge_date, setdischarge_date] = useState("");
  const [hospital_id, sethospital_id] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const patient = {
      pid,
      name,
      phone_no,
      gender,
      address,
      appointment_date,
      discharge_date,
      hospital_id,
    };

    try {
      const { data } = await axiosInstance.post("/add", patient);
      if (data) {
        navigate("/patients");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [hospital, sethospital] = useState([]);

  const getAllHospital = async () => {
    try {
      const { data } = await axiosInstance.get("/getAllHospital");
      console.log({ data });
      sethospital([...data]);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    // getAllHospital();
    if (hospital.length === 0) getAllHospital();
  }, [hospital]);

  const validatepid = (value) => {
    if (!value.trim()) {
      setpidError("Entity ID is required");
    } else if (!/^[a-zA-Z0-9]*$/.test(value)) {
      setpidError("Entity ID must be alphanumeric");
    } else {
      setpidError("");
    }
  };
  // const addPatient=(newPatient)=>{
  //   if(!patients.some(patient=>patient.id===newPatient.id)){
  //     setPatients([...patients,newPatient]);
  //   }
  //   else{
  //     console.log("Patient already exists");
  //   }
  // };

  const handlepidChange = (e) => {
    const value = e.target.value;
    setpid(value);
    validatepid(value);
  };
  const existingphone_no = [];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add Patient</h2>
            <div className="card-body">
              <span className="text-danger">All * fields are required.</span>
              <form onSubmit={submitHandler}>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <span className="text-danger">*</span>Patient Id :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter pid"
                    name="pid"
                    className="form-control"
                    value={pid}
                    onChange={(e) => handlepidChange(e)}
                  ></input>
                  {pidError && <p>{pidError}</p>}
                </div>
                <div className="form-group mb-2">
                  <label for="validationCustom04" className="form-label">
                    {" "}
                    <span className="text-danger">*</span> Patient Name :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    required
                    className="form-control"
                    id="validationCustom04"
                    value={name}
                    onChange={(e) => handleNameChange(e)}
                  ></input>

                  {nameError && <p>{nameError}</p>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    <span className="text-danger">*</span>Patient phone_no:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone_no"
                    name="phone_no"
                    required
                    className="form-control"
                    value={phone_no}
                    onChange={(e) => {
                      if (pattern.test(e.target.value)) {
                        setphone_no(e.target.value);
                        console.log(e.target.value);
                        setIsError(false);
                      } else setIsError(true);
                    }}
                  ></input>
                  {/* {error && <p style=={{color:'red'}}>{error}</p>} */}
                  <h5>
                    Your Mobile Number is:
                    {isError ? "Invalid" : "+91" + phone_no}
                  </h5>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    <span className="text-danger">*</span>Patient gender :
                  </label>
                  <select
                    className="form-select"
                    onChange={(e) => setgender(e.target.value)}
                  >
                    <option value={"male"}>{"male"}</option>
                    <option value={"female"}>{"female"}</option>
                  </select>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    <span className="text-danger">*</span> Patient address :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    required
                    className="form-control"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    <span className="text-danger">*</span>Patient
                    appointment_date :
                  </label>
                  <input
                    type="Date"
                    placeholder="Enter appointment_date"
                    name="appointment_date"
                    required
                    className="form-control"
                    value={appointment_date}
                    onChange={(e) => setappointment_date(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    Patient discharge_date :
                  </label>
                  <input
                    type="Date"
                    placeholder="Enter appointment_date"
                    name="discharget_date"
                    required
                    className="form-control"
                    value={discharge_date}
                    onChange={(e) => setdischarge_date(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    <span className="text-danger">*</span>Hospital_id :
                  </label>
                  <select
                    className="form-select"
                    onChange={(e) => sethospital_id(e.target.value)}
                  >
                    {hospital.map((option) => (
                      <option value={option.hid}>{option.hname}</option>
                    ))}
                  </select>
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

export default AddPatientComponents;
