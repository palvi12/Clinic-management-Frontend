import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Pagination from "react-bootstrap/Pagination";
const ListHospitalComponent = () => {
  const [hospital, sethospital] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5; // data to fetch per page in pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const getAllHospital = async () => {
    try {
      const { data } = await axiosInstance.get("/getAllHospital");
      console.log({ data });
      sethospital([...data]);
    } catch (error) {
      console.log({ error });
    }
  };

  const currentItems = hospital.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(hospital.length / itemsPerPage);

  useEffect(() => {
    getAllHospital();
    if (hospital.length === 0) getAllHospital();
  }, [hospital]);

  const deleteHospital = async (hid) => {
    console.log({ hid });
    try {
      const { data } = await axiosInstance.delete(`/deleteHospital/${hid}`);
      // console.log({ data });
      toast.success(`Data with HID: ${hid} deleted.`);
      //sethospitals([...data]);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Container>
      <div className="container">
        <h2 className="text-center">List Hospital</h2>
        <Link to="/add-hospital" className="btn btn-primary mb-2">
          <i class="bi bi-folder-plus"></i> Add Hospital
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th> Id</th>
            <th> Name</th>
            <th> Phone no</th>
            <th> Address</th>
            <th> Gmail</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {currentItems.map((hospital) => (
              <tr key={hospital.hid}>
                <td>{hospital.hid}</td>
                <td>{hospital.hname}</td>
                <td>{hospital.hphoneno}</td>
                <td>{hospital.haddress}</td>
                <td>{hospital.hgmail}</td>

                <td>
                  <Link
                    className="btn btn-info"
                    to={`/edit-hospital/${hospital.hid}`}
                  >
                    <i class="bi bi-pencil-square"></i>
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteHospital(hospital.hid)}
                  >
                    {" "}
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <ToastContainer /> */}
      </div>
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      <ToastContainer />
    </Container>
  );
};

export default ListHospitalComponent;
