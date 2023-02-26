import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Table.css";
import UserContext from "../../context/UserContext";

const Table = () => {
  const [Users, setUsers] = useContext(UserContext);

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="user_table">
        <div className="container">
          <div>
            <h2>Total Users - {Users.length}</h2>
          </div>
          <div className="search_area">
            <label className="search_label">Search Users</label>
            <input
              value={searchValue}
              onChange={handleSearchValue}
              className="search_input"
              placeholder="search by name, position and  salary"
              type="text"
            />
          </div>
          <Link to={"/add"}>
            <button>Add</button>
          </Link>
          <table>
            <tbody>
              {Users.length > 0 ? (
                <tr>
                  <th className="id">Id</th>
                  <th className="name">Name</th>
                  <th className="position">Position</th>
                  <th className="salary">Salary</th>
                  <th className="action">Action</th>
                </tr>
              ) : null}

              {Users.length > 0 ? (
                Users.filter(
                  (user) =>
                    user.name.toLowerCase().includes(searchValue) ||
                    user.position.toLowerCase().includes(searchValue) ||
                    user.salary.toLowerCase().includes(searchValue)
                ).map((user) => (
                  <tr>
                    <td className="id">{user.id}</td>
                    <td className="name">{user.name}</td>
                    <td className="position">{user.position}</td>
                    <td className="salary">{user.salary}</td>
                    <td className="action">
                      <Link to={"/read/" + user.id}>
                        <button className="read">Read</button>
                      </Link>
                      <Link to={"/update/" + user.id}>
                        <button className="update">Update</button>
                      </Link>
                      <Link to={"/delete/" + user.id}>
                        <button className="delete">Delete</button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <h1>There Is No User Right Now!</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
