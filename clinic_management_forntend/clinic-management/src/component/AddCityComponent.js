import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
//import {useHistory} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AddCityComponent = () => {
  const navigate = useNavigate();

  const [id, setid] = useState("");
  const [city_name, setcity_name] = useState("");
  const [state_code, setstate_code] = useState("");
  const [isError, setIsError] = useState(false);
  const pattern = new RegExp(/^\d{1,6}$/);

  const submitHandler = async (e) => {
    e.preventDefault();

    const city = { id, city_name, state_code };

    console.log(city);

    try {
      const { data } = await axiosInstance.post("/addCity", city);
      if (data) {
        navigate("/city");
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
            <h2 className="text-center">Add City</h2>
            <div className="card-body">
              <span className="text-danger">All * fields are required.</span>
              <form onSubmit={submitHandler}>
                <div className="form-group mb-2">
                  <label className="form-label"> Id :</label>
                  <input
                    type="text"
                    placeholder="Enter id"
                    name="id"
                    className="form-control"
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <span className="text-danger">*</span> City :
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city_name"
                    name="city_name"
                    required
                    className="form-control"
                    value={city_name}
                    onChange={(e) => setcity_name(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <span className="text-danger">*</span> Pincode:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter state_code"
                    name="state_code"
                    required
                    className="form-control"
                    value={state_code}
                    onChange={(e) => {
                      if (pattern.test(e.target.value)) {
                        setstate_code(e.target.value);
                        console.log(e.target.value);
                        setIsError(false);
                      } else setIsError(true);
                    }}
                  ></input>
                  <h5>
                    Your Pincode is:
                    {isError ? "Invalid" : state_code}
                  </h5>
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={() => toast.success("Data added successfully")}
                >
                  Submit
                </button>
                <Link to="/city" className="btn btn-danger">
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

export default AddCityComponent;
