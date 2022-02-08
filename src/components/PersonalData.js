import React, {useEffect} from 'react';
import { useFormik, Formik } from 'formik';
import { Form, TextArea, Button } from 'semantic-ui-react';
import Select from 'react-select';
import csc from "country-state-city";
import * as Yup from "yup";
import './PersonalData.css';



export default function PersonalData() {

    // const formik = useFormik({
    //     initialValues: initialValues(),
    //     validationSchema: Yup.object(validationSchema()),
        
    //     onSubmit: (values) => console.log(JSON.stringify(values))
    // })

    const countries = csc.getAllCountries();    

    const updatedCountries = countries.map((country) => ({
        label: country.name,
        value: country.id,
        ...country
    }));  
   
    const updatedStates = (countryId) =>
        csc.getStatesOfCountry(countryId).map((state) => ({ label: state.name, value: state.id, ...state}));

    const updatedCities = (stateId) =>
        csc.getCitiesOfState(stateId).map((city) => ({ label: city.name, value: city.id, ...city }));
    
    // const { values, handleSubmit, setFieldValue, setValues } = formik;

    // useEffect(() => {}, [values])

  return( 
  <>
    <h1>PERSONAL DATA</h1>
    <Formik 
        initialValues={initialValues()}
        onSubmit={(values, actions) => {
            setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
    }}>   
        {props => (<form className="personal-data" onSubmit={props.handleSubmit}>                
                <label>Email</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        name="email"
                        id="email"                        
                        placeholder="Email"
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.errors.email}
                    />
                    {props.touched.email && props.errors.email ? (
                        <div>{props.errors.email}</div>
                    ): null}
                </div>
                <label>Full name</label>
                <div className='field_input'>
                    <input 
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Full name"
                        value={props.values.fullname}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.errors.fullname}
                    />
                    {props.touched.fullname && props.errors.fullname ? (
                        <div>{props.errors.fullname}</div>
                    ): null}
                </div>
                <label>Description</label>
                <div className='description_input'>
                    <TextArea 
                        type="text"
                        name="description"
                        id="description"                        
                        placeholder="Brief description"
                        value={props.values.description}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.errors.description}
                        />
                        {props.touched.description && props.errors.description ? (
                        <div>{props.errors.description}</div>
                    ): null}
                </div>
                <div>
                <Select
                        id="country"
                        name="country"
                        label="country"
                        options={updatedCountries}
                        value={props.values.country}
                        onChange={(value) => {
                            props.setValues({ country: value, state: null, city: null}, false);
                        }}
                    />
                    <Select
                        id="state"
                        name="state"
                        options={updatedStates(props.values.country ? props.values.country.value : null)}                
                        value={props.values.state}
                        onChange={(value) => {
                            props.setValues({ state: value, city: null }, false);
                        }}
                    />
                    <Select 
                        id="city"
                        name="city"
                        options={updatedCities(props.values.state ? props.values.state.value :  null)}                
                        value={props.values.city}
                        onChange={(value) => props.setFieldValue("city", value)}
                    />
                </div>
                <Button type="submit" primary>NEXT</Button>   
                {/* <p>{JSON.stringify(csc.get)}</p>  */}
        </form>)}
    </Formik>
  </>
  );
}

function initialValues(){
    return{
        email: "",
        fullname: "",
        description: "",
        // country: "",
        // state: null,
        // city: null
    }
}

function validationSchema(){
    return{
        email: Yup.string().email("Not a valid email account").required("A valid email address is required"),
        fullname: Yup.string().required("It is necessary to enter the full name"),
        description: Yup.string().required("A short description is necessary"),
        // country: Yup.string().required("Country is required"),
        // state: Yup.string().required("State is required"),
        // city: Yup.string().required("City is required")        
    }
}