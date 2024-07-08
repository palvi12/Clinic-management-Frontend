import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateHospitalComponent = () => {
  const params = useParams();
  const hid = params.hid;

  console.log(params);
  const navigate = useNavigate();

  const [hname, sethname] = useState("");
  const [hphoneno, sethphoneno] = useState("");
  const [hgmail, sethgmail] = useState("");
  const [haddress, sethaddress] = useState("");

  useEffect(() => {
    const getAllHospital = async () => {
      try {
        const { data } = await axiosInstance.get(`/hospital/${hid}`);
        console.log({ data });
        if (data) {
          sethname(data.hname);
          sethphoneno(data.hphoneno);
          sethgmail(data.hgmail);
          sethaddress(data.haddress);
        }
      } catch (error) {
        console.log({ error });
      }
    };

    if (hid) getAllHospital();
  }, [hid]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const hospital = { hid, hname, hphoneno, hgmail, haddress };

    console.log(hospital);

    try {
      const { data } = await axiosInstance.put(
        `/updateHospital/${hid}`,
        hospital
      );
      if (data) {
        navigate("/hospital");
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
            <h2 className="text-center">Update Hospital</h2>
            <div className="card-body">
              <div className="form-group mb-2">
                <label className="form-label"> hid :</label>
                <input
                  readOnly
                  className="form-control-plaintext"
                  defaultValue={params.hid}
                ></input>
              </div>
              <form onSubmit={submitHandler}>
                <div className="form-group mb-2">
                  <label className="form-label"> hid :</label>
                  <input
                    type="text"
                    placeholder="Enter hid"
                    name="hid"
                    className="form-control"
                    value={hid}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> hname :</label>
                  <input
                    type="text"
                    placeholder="Enter hname"
                    name="hname"
                    className="form-control"
                    value={hname}
                    onChange={(e) => sethname(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> hphoneno:</label>
                  <input
                    type="text"
                    placeholder="Enter hphoneno"
                    name="hphoneno"
                    className="form-control"
                    value={hphoneno}
                    onChange={(e) => sethphoneno(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> hgmail :</label>
                  <input
                    type="text"
                    placeholder="Enter hgmail"
                    name="hgmail"
                    className="form-control"
                    value={hgmail}
                    onChange={(e) => sethgmail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> haddress :</label>
                  <input
                    type="text"
                    placeholder="Enter haddress"
                    name="haddress"
                    className="form-control"
                    value={haddress}
                    onChange={(e) => sethaddress(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-success" type="submit">
                  Submit
                </button>
                <Link to="/hospital" className="btn btn-danger">
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

export default UpdateHospitalComponent;
