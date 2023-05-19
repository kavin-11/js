import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  mobile: '',
  department: '',
  college: '',
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can perform further actions
      console.log('Form submitted:', formData);
      // Reset form
      setFormData(initialFormState);
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Please enter your name';
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      validationErrors.name = 'Name should contain only letters';
    }

    if (!formData.email) {
      validationErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      validationErrors.password = 'Please enter a password';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.gender) {
      validationErrors.gender = 'Please select your gender';
    }

    if (!formData.mobile) {
      validationErrors.mobile = 'Please enter your mobile number';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      validationErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.department) {
      validationErrors.department = 'Please enter your department';
    }

    if (!formData.college) {
      validationErrors.college = 'Please enter your college';
    }

    return validationErrors;
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="text-danger">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            className="form-control"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="text-danger">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
          {errors.department && <span className="text-danger">{errors.department}</span>}
        </div>

        <div className="form-group">
          <label>College:</label>
          <input
            type="text"
            className="form-control"
            name="college"
            value={formData.college}
            onChange={handleInputChange}
          />
          {errors.college && <span className="text-danger">{errors.college}</span>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Form;
