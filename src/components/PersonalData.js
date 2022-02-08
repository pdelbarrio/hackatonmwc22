import React, {useEffect} from 'react';
import { Formik } from 'formik';
import { TextArea, Button } from 'semantic-ui-react';
import Select from 'react-select';
import csc from "country-state-city";
import * as Yup from "yup";
import './PersonalData.css';



export default function PersonalData() {  

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

  return( 
  <>
    <h1>PERSONAL DATA</h1>
    <Formik 
        initialValues={{
            email: "",
            fullname: "",
            description: "",
            country: "",
            // state: "",
            city: ""
        }}
        // validationSchema={Yup.object(validationSchema())}
        validate={(values) => {
            let errors = {};

            // let validationExpression = "^[  ÀÈÌÒÙ àèìòù ÁÉÍÓÚ Ý áéíóúý ÂÊÎÔÛ âêîôû ÃÑÕ ãñõ ÄËÏÖÜŸ  äëïöüŸ \w\d\s-'.,&#@:?!()$\/]+$";

            if(!values.email){
                errors.email = "A valid email address is required";
            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                errors.email = "Please enter a valid email";
            }else if(!values.fullname){
                errors.fullname = "It is necessary to enter the full name";
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.fullname)){
                errors.fullname = "Please enter a valid fullname"
            }else if(!values.description){
                errors.description = "A short description is necessary";
            }else if(!values.country){
                errors.country = "Country is required";
            }else if(!values.city){
                errors.city = "City is required";
            }
            return errors;
        }}
        onSubmit={(values, {resetForm}) => {
            
        //    alert(JSON.stringify(values, null, 2));
        //    actions.setSubmitting(true)
        //    console.log(values, actions);
        resetForm();
         console.log("Formulario enviado")
         console.log(values)
    }}>   
        {( {values, handleSubmit, handleChange, handleBlur, errors, touched, setValues, setFieldValue}) => 
        (<form className="personal-data" onSubmit={handleSubmit}>                       
                <label htmlFor='email'>Email</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        id="email"                        
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email}
                    />
                    {touched.email && errors.email ? (
                        <div className='error'>{errors.email}</div>
                    ): null}
                </div>
                <label htmlFor='fullname'>Full name</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Full name"
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.fullname}
                    />
                    {touched.fullname && errors.fullname ? (
                        <div className='error'>{errors.fullname}</div>
                    ): null}
                </div>
                <label htmlFor='description'>Description</label>
                <div className='description_input'>
                    <TextArea 
                        type="text"
                        name="description"
                        id="description"                        
                        placeholder="Brief description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.description}
                        />
                        {touched.description && errors.description ? (
                        <div className='error'>{errors.description}</div>
                    ): null}
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
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.fullname}
                    />
                    {touched.country && errors.country ? (
                        <div className='error'>{errors.country}</div>
                    ): null}
                </div>
                <label htmlFor='city'>City</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.city}
                    />
                    {touched.city && errors.city ? (
                        <div className='error'>{errors.city}</div>
                    ): null}
                </div>
                </div>
                <Button classname="next_button" type="submit" primary>NEXT</Button>   
                {/* <p>{JSON.stringify(csc.get)}</p>  */}
        </form>)}
    </Formik>
  </>
  );
}


// function validationSchema(){
//     return{
//         email: Yup.string().email("Not a valid email account").required("A valid email address is required"),
//         fullname: Yup.string().required("It is necessary to enter the full name"),
//         description: Yup.string().required("A short description is necessary"),
//         country: Yup.string().required("Country is required"),
//         state: Yup.string().required("State is required"),
//         city: Yup.string().required("City is required")        
//     }
// }