import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
//import {useHistory} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdatePatientComponents = () => {
  const params = useParams();
  const pid = params.pid;

  console.log(params);
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [appointment_date, setappointment_date] = useState("");
  const [discharge_date, setdischarge_date] = useState("");
  const [hospital_id, sethospital_id] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axiosInstance.get(`/patients/${pid}`);
        console.log({ data });
        if (data) {
          setname(data.name);
          setphone_no(data.phone_no);
          setgender(data.gender);
          setaddress(data.address);
          setappointment_date(data.appointment_date);
          setdischarge_date(data.discharge_date);
          sethospital_id(data.hospital_id);
        }
      } catch (error) {
        console.log({ error });
      }
    };

    if (pid) getUser();
  }, [pid]);

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

    console.log(patient);

    try {
      const { data } = await axiosInstance.put(`/update/${pid}`, patient);
      if (data) {
        navigate("/patients");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Update Patient</h2>
            <div className="card-body">
              <div className="form-group mb-2">
                <label className="form-label"> pid :</label>
                <input
                  readOnly
                  className="form-control-plaintext"
                  defaultValue={params.pid}
                ></input>
              </div>
              <form onSubmit={submitHandler}>
                <div className="form-group mb-2">
                  <label className="form-label"> pid :</label>
                  <input
                    type="text"
                    placeholder="Enter pid"
                    name="pid"
                    className="form-control"
                    value={pid}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> name :</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> phone_no:</label>
                  <input
                    type="text"
                    placeholder="Enter phone_no"
                    name="phone_no"
                    className="form-control"
                    value={phone_no}
                    onChange={(e) => setphone_no(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> gender :</label>
                  <input
                    type="text"
                    placeholder="Enter gender"
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> address :</label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> appointment_date :</label>
                  <input
                    type="text"
                    placeholder="Enter appointment_date"
                    name="appointment_date"
                    className="form-control"
                    value={appointment_date}
                    onChange={(e) => setappointment_date(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> discharge_date :</label>
                  <input
                    type="text"
                    placeholder="Enter appointment_date"
                    name="discharget_date"
                    className="form-control"
                    value={discharge_date}
                    onChange={(e) => setdischarge_date(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> hospital_id :</label>
                  <input
                    type="text"
                    placeholder="Enter hospital_id"
                    name="hospital_id"
                    className="form-control"
                    value={hospital_id}
                    onChange={(e) => sethospital_id(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-success" type="submit">
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
    </div>
  );
};

export default UpdatePatientComponents;
