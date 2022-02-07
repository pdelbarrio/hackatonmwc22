import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import { Form, TextArea, Button } from 'semantic-ui-react';
import Select from 'react-select';
import csc from "country-state-city";
import * as Yup from "yup";
import './PersonalData.css';



export default function PersonalData() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        
        onSubmit: (values) => console.log(JSON.stringify(values))
    })

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
    
    const { values, handleSubmit, setFieldValue, setValues } = formik;

    useEffect(() => {}, [values])

  return( 
  <>
    <h1>PERSONAL DATA</h1>
    <Form className="personal-data" onSubmit={handleSubmit}>
        <div className='field_input'>
            <Form.Input name="email"
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
            />
        </div>
        <div className='field_input'>
            <Form.Input name="fullname"
                label="Full name"
                placeholder="Full name"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={formik.errors.fullname}
            />
        </div>
        <div className='description_input'>
            <TextArea name="description"
                label="Brief description"
                placeholder="Brief description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.errors.description}/>
        </div>
        <div>
           <Select
                id="country"
                name="country"
                label="country"
                options={updatedCountries}
                value={formik.values.country}
                onChange={(value) => {
                    setValues({ country: value, state: null, city: null}, false);
                }}
            />
            <Select
                id="state"
                name="state"
                options={updatedStates(values.country ? values.country.value : null)}                
                value={formik.values.state}
                onChange={(value) => {
                    setValues({ state: value, city: null }, false);
                }}
            />
            <Select 
                id="city"
                name="city"
                options={updatedCities(values.state ? values.state.value :  null)}                
                value={formik.values.city}
                onChange={(value) => setFieldValue("city", value)}
            />
        </div>
        <Button type="submit" content="next" primary fluid />  
        <p>{JSON.stringify(csc.get)}</p> 
    </Form>
  </>);
}

function initialValues(){
    return{
        email: "",
        fullname: "",
        description: "",
        country: "",
        state: null,
        city: null
    }
}

function validationSchema(){
    return{
        email: Yup.string().email("Not a valid email account").required("A valid email address is required"),
        fullname: Yup.string().required("It is necessary to enter the full name"),
        description: Yup.string().required("A short description is necessary"),
        country: Yup.string().required("Country is required"),
        state: Yup.string().required("State is required"),
        city: Yup.string().required("City is required")        
    }
}