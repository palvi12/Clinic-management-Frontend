import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axiosInstance from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Pagination from "react-bootstrap/Pagination";

const ListCityComponent = () => {
  const [city, setcity] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5; // data to fetch per page in pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const getAllUsersUsingJPAQL = async () => {
    try {
      const { data } = await axiosInstance.get("/getAllUsersUsingJPAQL");
      console.log({ data });
      setcity([...data]);
    } catch (error) {
      console.log({ error });
    }
  };

  const currentItems = city.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(city.length / itemsPerPage);

  useEffect(() => {
    getAllUsersUsingJPAQL();
    if (city.length === 0) getAllUsersUsingJPAQL();
  }, [city]);

  const deleteCity = async (id) => {
    console.log({ id });
    try {
      const { data } = await axiosInstance.delete(`/deleteCity/${id}`);
      console.log({ data });

      toast.success(`Data with ID: ${id} deleted.`);
      //setcity([...data]);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Container>
      <div className="container">
        <h2 className="text-center">List City</h2>
        <Link to="/add-city" className="btn btn-primary mb-2">
          <i class="bi bi-folder-plus"></i> Add City
        </Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th> Id</th>
            <th> City name</th>
            <th> State code</th>

            <th>Actions</th>
          </thead>
          <tbody>
            {currentItems.map((city) => (
              <tr key={city.id}>
                <td>{city.id}</td>
                <td>{city.city_name}</td>
                <td>{city.state_code}</td>

                <td>
                  <Link className="btn btn-info" to={`/edit-city/${city.id}`}>
                    <i class="bi bi-pencil-square"></i>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCity(city.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default ListCityComponent;
