import React, {useState} from 'react';
import { Formik } from 'formik';
import './ProfessionalInfo.css';

export default function ProfessionalInfo({next, prev, data, setData}) {  
  
  const handleSubmit = () => {
    next(data);
  }

  const TagsInput = (props) => {
    const [tags, setTags] = useState(props.tags);
    const deleteTags = indexToDelete => {
      setTags([...tags.filter((_, index) => index !== indexToDelete)]);
    };
    const addTags = (event) => {
      if (event.target.value !== ""){
        // setTags([...tags, event.target.value]);
        setData((prevData) => ({...prevData, skills: [...prevData.skills, event.target.value]}));
        // selectedTags([...tags, event.target.value]);
        // event.target.value = "";
      }
    };
    return (
      <div className='tags-input'>
        <ul id="tags">
          {data.skills.map((tag, index) => (
            <li key={index} className="tag">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon'
                onClick={() => deleteTags(index)}
              >
               x
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"          
          onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
          placeholder="Press enter to add tags"
        />
      </div>
    )
  }

  const selectedTags = tags => {
		console.log("tags",tags);  
	};

  return (
  <div className='form'>
  
    <Formik
      initialValues={data}
      validate={(values) => {
        let errors = {};

        if(!values.experience){
          errors.experience = "Must especify years of experience";
        }else if(!values.sector){
          errors.sector = "Select your sector";
        }else if(!values.skills){
          errors.skills = "Must especify at least one skill";
        }
        return errors;
      }}      
    >
      {( {values, handleChange, handleBlur, errors, touched}) =>
        (<form className=''  >
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
                {touched.experience && errors.experience ? (
                        <div className='error'>{errors.experience}</div>
                    ): null}
                
        <label htmlFor='sector'>Sector</label>
          <div className='field_input'>                   
                    <select
                      name="sector"
                      value={values.sector}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ display: 'block' }}
                    >
                      <option value="" label="Select your sector" />
                      <option value="Frontend" label="Frontend" />
                      <option value="Backend" label="Backend" />
                      <option value="Mobile" label="Mobile" />
                      <option value="Data Science" label="Data Science" />
                    </select>
                    {touched.sector && errors.sector ? (
                        <div className='error'>{errors.sector}</div>
                    ): null}
            </div>
        <label htmlFor='skills'>Skills</label>
          <div className='tags_input'>
                    {/* <input 
                        type="text"
                        name="skills"
                        id="skills"
                        placeholder="Skills"
                        value={values.skills}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.skills}
                    />   
                    {touched.skills && errors.skills ? (
                        <div className='error'>{errors.skills}</div>
                    ): null}  */}
              {/* <TagsInput selectedTags={selectedTags} value={selectedTags} tags={['test', 'test1']} /> */}
              <TagsInput selectedTags={selectedTags} tags={[]} value={selectedTags}  />
          </div>
         
          <div className='footer'>
            <button type="button" onClick={() => prev(values)}>
              Back
            </button>
            <button type="button" onClick={handleSubmit}>Submit</button>
          </div>
      </form>)}

    </Formik>
  </div>);
}


