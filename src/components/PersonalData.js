import React from 'react';
import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import * as Yup from "yup";


export default function PersonalData() {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema())
        
    })
  return( <>
    <h1>PERSONAL DATA</h1>
    <Form className="personal-data">
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
            <Form.Input name="email"
                label="Full name"
                placeholder="Full name"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={formik.errors.fullname}
            />
        </div>

    </Form>
  </>);
}

function initialValues(){
    return{
        email: "",
        fullname: ""
    }
}

function validationSchema(){
    return{
        email: Yup.string().email("Not a valid email account").required("A valid email address is required"),
        fullname: Yup.string().required("It is necessary to enter the full name"),
    }
}