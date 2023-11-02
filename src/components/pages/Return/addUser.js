import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, updateUser } from "../../Redux/Reducers/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

export default function AddUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const existingUser = users.find((user) => user.id === id);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    if (existingUser) {
      setFormData({
        fullName: existingUser.fullName,
        email: existingUser.email,
      });
    }
  }, [existingUser]);

  const { fullName, email } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    if (existingUser) {
      dispatch(
        updateUser({
          id,
          fullName,
          email,
        })
      );
    } else {
      dispatch(
        addUser({
          id: String(users.length + 1), // Use a unique ID for the new user
          fullName,
          email,
        })
      );
    }
    setFormData({ fullName: "", email: "" });

    navigate("/return");
  };

  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      <div className="form-group">
        <h1>{existingUser ? "Edit User" : "Add User"}</h1>
        <div className="form-input">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="form-button">
          <Button type="submit">{existingUser ? "Update" : "Add"}</Button>
          <Button
            type="button"
            variant="contained"
            name="goback"
            onClick={() => navigate("/return")}
            style={{ marginLeft: "10px" }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </form>
  );
}
