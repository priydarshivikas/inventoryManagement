import React, { useState, useEffect, useCallback } from "react";
import "./EditUser.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const { firstName, lastName, email, phone, address } = user;

  const [isLoading, setIsLoading] = useState(true);

  const isEditing = !!id;

  const loadUser = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(result.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading user:", error);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (isEditing) {
      loadUser();
    } else {
      setIsLoading(false);
    }
  }, [id, isEditing, loadUser]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!user.firstName.trim()) {
      validationErrors.firstName = "First Name is required";
    }
    if (!user.lastName.trim()) {
      validationErrors.lastName = "Last Name is required";
    }
    if (!user.phone.trim()) {
      validationErrors.phone = "Phone Number is required";
    } else if (!user.phone.match("[0-9]{10}")) {
      validationErrors.phone = "Enter a valid mobile number";
    }
    if (!user.address.trim()) {
      validationErrors.address = "Address is required";
    }
    if (!user.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      validationErrors.email = "Email is not valid.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        if (isEditing) {
          await axios.put(`http://localhost:3001/users/${id}`, user);
        } else {
          await axios.post("http://localhost:3001/users/", user);
        }
        alert(`Form Submitted Successfully`);
        navigate("/purchaseTable");
      } catch (error) {
        console.error(
          `Error ${isEditing ? "updating" : "adding"} user:`,
          error
        );
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form className="form-wrapper" onSubmit={onSubmit}>
          <div className="form-group">
            <h1>{isEditing ? "Edit" : "Add"} Customer Details</h1>
            <div className="form-input">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your firstname"
                value={firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
              {errors.firstName && (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              )}
            </div>
            <div className="form-input">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your lastname"
                value={lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              {errors.lastName && (
                <span style={{ color: "red" }}>{errors.lastName}</span>
              )}
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
              {errors.phone && (
                <span style={{ color: "red" }}>{errors.phone}</span>
              )}
            </div>
            <div className="form-input">
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div className="form-input">
              <label htmlFor="address">Address</label>
              <textarea
                rows={5}
                cols={58}
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
            </div>
            {errors.address && (
              <div style={{ color: "red", marginTop:"3px" ,marginRight:"340px" }}>
                {errors.address}
              </div>
            )}
            <div className="form-button">
              <button type="submit">{isEditing ? "Update" : "Add"}</button>
              <button
                type="button"
                variant="contained"
                name="goback"
                onClick={() => navigate("/PurchaseTable")}
                style={{ marginLeft: "10px" }}
              >
                Go Back
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EditUser;
