import React from 'react';
import '../Login/Login.css';
import { Formik, Form, Field } from 'formik';
import logo from '../../Logo.png';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
 
 const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   designation: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 });

const LoginForm = () => {
    const handleSignIn = () => {
        let successMsg = document.createElement("h1");
        let text = document.createTextNode("Logged In Successfully.");
        successMsg.appendChild(text);
        successMsg.style.textAlign = 'center';
        successMsg.style.color = 'white';
        successMsg.style.fontSize = '30px';
        successMsg.style.fontWeight = 'bold';
    
        let newDiv = document.getElementById('newDiv');
        newDiv.appendChild(successMsg);
    
        let loginDiv = document.getElementById('loginDiv');
        newDiv.removeChild(loginDiv);
      };

    return (
        <div id="newDiv" className="container pt-12">
           <div id="loginDiv" 
                className="grid w-1/4 m-auto bg-gray-100 py-10 px-10 rounded-lg"
            >
                 <img className="mb-5" src={logo} alt="" />
                <Formik
                initialValues={{
                    name: '',
                    designation: '',
                    language: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
                >
                {({ errors, touched }) => (
                    <Form className="login-form">
                        <div className="flex justify-between">
                            <label>Name <span className="required-sign">*</span></label>
                            {errors.name && touched.name ? (
                                <span className="error-message">{errors.name}</span>
                            ) : null}
                        </div>
                        <Field name="name" placeholder="Enter Full Name" required/>

                        <div className="flex justify-between">
                            <label>Designation <span className="required-sign">*</span></label>
                            {errors.designation && touched.designation ? (
                            <span className="error-message">{errors.designation}</span>
                            ) : null}
                        </div>
                        <Field name="designation" placeholder="Enter Position" required/><br/>

                        <label>Language</label>
                        <Field className="input-select" as="select" name="language">
                            <option value="">Select</option>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="bengali">Bengali</option>
                            <option value="marathi">Marathi</option>
                        </Field>
                        <div className="flex justify-center pt-2">
                            <button onClick={handleSignIn} className="bg-blue-400 btn-brand" type="submit">Login <FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                        
                    </Form>
                )}
                </Formik>
                <div className="flex justify-center pt-8">
                    <p style={{color: 'gray'}}>Powered by </p>
                    <img style={{width: "100px", marginLeft: "10px"}} src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;