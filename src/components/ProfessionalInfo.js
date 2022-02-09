import React, {useState} from 'react';
import { Formik } from 'formik';
import './ProfessionalInfo.css';

export default function ProfessionalInfo(props) {
  const handleSubmit = (values) => {
    props.next(values, false);
  }

  const selectedTags = tags => {
		console.log(tags);
	};

  return (
  <div className='form'>
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {( {values, handleChange, handleBlur, errors}) =>
        (<form className=''  onSubmit={handleSubmit}>
        <label htmlFor='experience'>Years of experience</label>
        <div className='field_input'>
                    <input 
                        type="text"
                        name="experience"
                        id="experience"
                        placeholder="Experience"
                        value={values.experience}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.experience}
                    />
                    
                </div>
        <label htmlFor='sector'>Sector</label>
          <div className='field_input'>
                    <input 
                        type="text"
                        name="sector"
                        id="sector"
                        placeholder="Sector"
                        value={values.sector}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.sector}
                    />
                   
            </div>
        <label htmlFor='skills'>Skills</label>
          <div className='field_input'>
                    <input 
                        type="text"
                        name="skills"
                        id="skills"
                        placeholder="Skills"
                        value={values.skills}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.skills}
                    />                    
          </div>
         
          <div className='footer'>
            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button type="button" onClick={() => props.next(values)}>Submit</button>
          </div>
      </form>)}

    </Formik>
  </div>);
}


