import React, { useState, useEffect } from "react";

export default function PersonalInfo({ next, data, setData }) {
  const [errors, setErrors] = useState({
    email: null,
    fullname: null,
    description: null,
    country: null,
    city: null,
  });
  const [formError, setFormError] = useState(false);
  const handleSubmit = (data) => {
    if (isValid()) {
      next(data);
    } else {
      setFormError(true);
    }
  };
  useEffect(() => {
    let newErrors = {};
    let errorsKeys = Object.keys(errors);
    Object.entries(data).map((field) => {
      if (errorsKeys.includes(field[0]) && field[1] !== "") {
        const key = field[0];
        newErrors = {
          ...newErrors,
          [key]: undefined,
        };
      }
    });
    setErrors(newErrors);
  }, []);

  //Returns if there is an error on any input
  const isValid = () => {
    return !Object.keys(errors).some((key) => errors[key] !== undefined);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormError(false);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: validators[name](value),
    });
  };

  return (
    <div className="form-personal">
      <form className="personal-data">
        <label htmlFor="email">Email</label>
        <div className="field-input">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <label htmlFor="fullname">Full name</label>
        <div className="field-input">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"
            value={data.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>
        <label htmlFor="description">Description</label>
        <div>
          <input
            className="description-input"
            type="text"
            name="description"
            id="description"
            maxLength={180}
            placeholder="Brief description"
            value={data.description}
            onChange={handleChange}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <div className="field-input">
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={data.country}
              onChange={handleChange}
            />
            {errors.country && <p className="error">{errors.country}</p>}
          </div>
          <label htmlFor="city">City</label>
          <div className="field-input">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={data.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}
            {formError && <p className="error">All fields must be filled in</p>}
          </div>
        </div>

        <div className="footer">
          <button type="button" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

const EMAIL_PATTERN = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const FULLNAME_PATTERN = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

const validators = {
  email: (value) => {
    let message;
    if (!value) message = "A valid email address is required";
    else if (!EMAIL_PATTERN.test(value)) message = "Please enter a valid email";
    return message;
  },
  fullname: (value) => {
    let message;
    if (!value) message = "Fullname is required";
    else if (!FULLNAME_PATTERN.test(value))
      message = "Please enter a valid fullname";
    return message;
  },
  description: (value) => {
    let message;
    if (!value) message = "A short description is necessary";
    return message;
  },
  country: (value) => {
    let message;
    if (!value) message = "Country is required";
    return message;
  },
  city: (value) => {
    let message;
    if (!value) message = "City is required";
    return message;
  },
};
