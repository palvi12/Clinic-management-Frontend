import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateCityComponent = () => {
  const params = useParams();
  const id = params.id;

  console.log(params);
  const navigate = useNavigate();

  const [city_name, setcity_name] = useState("");
  const [state_code, setstate_code] = useState("");

  useEffect(() => {
    const getAllUsersUsingJPAQL = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/getAllUsersUsingJPAQL/${id}`
        );
        console.log({ data });
        if (data) {
          setcity_name(data.city_name);
          setstate_code(data.state_code);
        }
      } catch (error) {
        console.log({ error });
      }
    };

    if (id) getAllUsersUsingJPAQL();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const city = { id, city_name, state_code };

    console.log(city);

    try {
      const { data } = await axiosInstance.put(`/updateCity/${id}`, city);
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
            <h2 className="text-center">Update City</h2>
            <div className="card-body">
              <div className="form-group mb-2">
                <label className="form-label"> id :</label>
                <input
                  readOnly
                  className="form-control-plaintext"
                  defaultValue={params.id}
                ></input>
              </div>
              <form onSubmit={submitHandler}>
                <div className="form-group mb-2">
                  <label className="form-label"> id :</label>
                  <input
                    type="text"
                    placeholder="Enter id"
                    name="id"
                    className="form-control"
                    value={id}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> city_name :</label>
                  <input
                    type="text"
                    placeholder="Enter city_name"
                    name="city_name"
                    className="form-control"
                    value={city_name}
                    onChange={(e) => setcity_name(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> state_code:</label>
                  <input
                    type="text"
                    placeholder="Enter state_code"
                    name="state_code"
                    className="form-control"
                    value={state_code}
                    onChange={(e) => setstate_code(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-success" type="submit">
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
    </div>
  );
};

export default UpdateCityComponent;
