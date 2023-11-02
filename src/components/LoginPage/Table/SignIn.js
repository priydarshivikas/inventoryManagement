import React, { useState } from 'react';
import './SignIn.css';
import FormDataTable from './FormDataTable';
const BasicForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formDataList, setFormDataList] = useState([]);


  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    setErrors(newErrors);
    return isValid;
  };

  const formSubmission = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormDataList([...formDataList, formData]);
      setIsFormSubmitted(true);
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div>
      <form onSubmit={formSubmission}>
        <h1 className="fromheading">Sign In</h1>
        <div className="control-group">
          <div className="form-control">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <p className="error-text">{errors.firstName}</p>
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
            <p className="error-text">{errors.lastName}</p>
          </div>
          <div className="form-control">
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
            />
            <p className="error-text">{errors.email}</p>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <p className="error-text">{errors.password}</p>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
      {isFormSubmitted && <FormDataTable formDataList={formDataList} />}
    </div>
  );
};

export default BasicForm;
