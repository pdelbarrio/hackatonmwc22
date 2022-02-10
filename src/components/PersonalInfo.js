import React from 'react';
import csc from "country-state-city";
import * as Yup from "yup";


export default function PersonalInfo({next, data, setData}) {  

    const handleSubmit = (data) => {
        next(data);
    };
   
    // const countries = csc.getAllCountries();    

    // const updatedCountries = countries.map((country) => ({
    //     label: country.name,
    //     value: country.id,
    //     ...country
    // }));  
   
    // const updatedStates = (countryId) =>
    //     csc.getStatesOfCountry(countryId).map((state) => ({ label: state.name, value: state.id, ...state}));

    // const updatedCities = (stateId) =>
    //     csc.getCitiesOfState(stateId).map((city) => ({ label: city.name, value: city.id, ...city }));  
   

    // useEffect(() => {}, [values])

 
    const handleChange = (event)  =>{
        const { name, value } = event.target;
        setData((prevData) => {
          return {
            ...prevData,
            [name]: value,
          };
        });    
      }

  return( 
        <div className='form'>       
        <form className="personal-data" >                       
                <label htmlFor='email'>Email</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        id="email"                        
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                        
                    />
                    
                </div>
                <label htmlFor='fullname'>Full name</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Full name"
                        value={data.fullname}
                        onChange={handleChange}                        
                    />                    
                </div>
                <label htmlFor='description'>Description</label>
                <div className='description_input'>
                    <input 
                        type="textarea"
                        name="description"
                        id="description"                        
                        placeholder="Brief description"
                        value={data.description}
                        onChange={handleChange}                       
                    />                       
                </div>
                {/* <div>
                <Select
                        id="country"
                        name="country"
                        label="country"
                        options={updatedCountries}
                        value={values.country}
                        onChange={(value) => {
                            setValues({ country: value, state: null, city: null}, false);
                        }}
                    />
                    <Select
                        id="state"
                        name="state"
                        options={updatedStates(values.country ? values.country.value : null)}                
                        value={values.state}
                        onChange={(value) => {
                            setValues({ state: value, city: null }, false);
                        }}
                    />
                    <Select 
                        id="city"
                        name="city"
                        options={updatedCities(values.state ? values.state.value :  null)}                
                        value={values.city}
                        onChange={(value) => setFieldValue("city", value)}
                    />
                </div> */}
                <div>
                <label htmlFor='country'>Country</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Country"
                        value={data.country}
                        onChange={handleChange}                        
                    />                    
                </div>
                <label htmlFor='city'>City</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                        value={data.city}
                        onChange={handleChange}                        
                    />                  
                </div>
                </div>                
               
                <div className='footer'>
                    <button type="submit" onClick={handleSubmit}>Next</button>
                </div>
        </form>
    
  </div>
  );
}

