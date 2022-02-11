import React, { useState, useEffect } from "react";

export default function ProfessionalInfo({ next, prev, data, setData }) {
  const [errors, setErrors] = useState({
    experience: null,
    sector: null,
    skills: null,
  });
  const [formError, setFormError] = useState(false);
  const handleSubmit = () => {
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

  const isValid = () => {
    if (data.skills.length !== 0) {
      errors.skills = undefined;
    }
    return !Object.keys(errors).some((key) => errors[key] !== undefined);
  };

  const TagsInput = (props) => {
    const deleteTags = (indexToDelete) => {
      let newSkills = data.skills.filter((_, index) => index !== indexToDelete);
      if (newSkills.length === 0) {
        setErrors((prevErrors) => ({ ...prevErrors, skills: null }));
      }
      setData((prevData) => ({ ...prevData, skills: newSkills }));
    };

    const addTags = (event) => {
      if (event.target.value !== "") {
        setFormError(false);
        setData((prevData) => ({
          ...prevData,
          skills: [...prevData.skills, event.target.value],
        }));
      }
    };
    return (
      <div className="tags-input">
        <ul id="tags">
          {data.skills.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => deleteTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tags-input"
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
      </div>
    );
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
    <div className="form">
      <form className="">
        <label htmlFor="experience">Years of experience</label>
        <div className="field_input">
          <input
            type="number"
            name="experience"
            id="experience"
            placeholder="Experience"
            value={data.experience}
            onChange={handleChange}
          />
          {errors.experience && <p className="error">{errors.experience}</p>}
        </div>

        <label htmlFor="sector">Sector</label>
        <div className="field_input">
          <select
            name="sector"
            value={data.sector}
            onChange={handleChange}
            style={{ display: "block" }}
          >
            <option value="" label="Select your sector" />
            <option value="Frontend" label="Frontend" />
            <option value="Backend" label="Backend" />
            <option value="Mobile" label="Mobile" />
            <option value="Data Science" label="Data Science" />
          </select>
          {errors.sector && <p className="error">{errors.sector}</p>}
        </div>
        <label htmlFor="skills">Skills</label>
        <div className="tags_input">
          <TagsInput />
        </div>
        <div className="error-container">
          {formError && (
            <p style={{ color: "red" }}>All fields must be filled in</p>
          )}
        </div>
        <div className="footer">
          <button type="button" onClick={() => prev(data)}>
            Back
          </button>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const validators = {
  experience: (value) => {
    let message;
    if (!value) message = "Please specify your years of experience";
    return message;
  },
  sector: (value) => {
    let message;
    if (!value) message = "Please specify in which sector you specialize in";
    return message;
  },
  skills: (value) => {
    let message;
    if (!value) message = "Please add one or more skills";
    return message;
  },
};
