import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email : '',
        password: ''
    });

    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value)
            let isValidForm = true;
        if (e.target.name === "email") {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isValidForm = isEmailValid;
        }
        if (e.target.name === "password") {
            const isPassValid = e.target.value.length > 8;
            isValidForm = isPassValid;
        }
        if (isValidForm) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = () =>{
        if (user.email && user.password) {
            console.log("submitting....")
        }
    }

    return (
        <section className="col-md-8">
            <div className="mt-5 w-50 m-auto">
                <h3>Let's set up your account</h3>
                <p>Already have an account? <a href="#">Sign in</a></p>
                
                <form onSubmit={handleSubmit}>
                    <input name="name" onBlur={handleBlur} className="form-control mb-3" type="text" placeholder="Your name" required/>
                    <input name="email" onBlur={handleBlur} className="form-control mb-3" type="email" placeholder="Email address" required/>
                    
                   { user.email?
                      ' '
                    : <p style={{color: 'red'}}>Please enter a valid email address</p>
                   }

                    <input name="type" onBlur={handleBlur} className="form-control mb-3" list="datalistOptions" placeholder="I would describe my user type as"/>
                        <datalist id="datalistOptions">
                            <option value="Web Designer"/>
                            <option value="Web Developer"/>
                            <option value="Digital Marketer"/>
                            <option value="SEO Specialist"/>
                            <option value="Graphic Designer"/>
                        </datalist>
                    <input name="password" onBlur={handleBlur} className="form-control mb-3 pass-icon" type="password" placeholder="Password" />
                    <FontAwesomeIcon icon={faEye} className="eye"/>
                    
                    {user.password?
                        <span>Minimum 8 characters</span>
                        : <span style={{color: 'red'}}>Minimum 8 characters</span>
                    } <br/>

                    {user.email && user.password?
                          <input type="submit" className="form-control btn btn-primary my-3" value="Next" />

                        : <input type="submit" className="form-control btn btn-primary my-3 btn-disabled" value="Next"/>
                    }
                </form>
                <p>By clicking the "Next" button, you agree to creating a free account, and to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
            </div>
        </section>
    );
};

export default Login;

