import React from 'react';

const Login = () => {
    const handleBlur = (e) => {
        console.log(e.target.name, e.target.value)
        if (e.target.name === "email") {
            const isValidEmail = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isValidEmail);
        }
        if (e.target.name === "password") {
            const isValidPass = e.target.value.length > 8;
            console.log(isValidPass); 
        }
    }

    const handleSubmit = () =>{

    }

    return (
        <section className="col-md-8">
            <div className="mt-5 w-50 m-auto">
                <h3>Let's set up your account</h3>
                <p>Already have an account? <a href="#">Sign in</a></p>

                <form onSubmit={handleSubmit}>
                    <input name="name" onBlur={handleBlur} className="form-control mb-3" type="text" placeholder="Your name" required/>
                    <input name="email" onBlur={handleBlur} className="form-control mb-3" type="email" placeholder="Email address" required/>
                    <input name="type" onBlur={handleBlur} className="form-control mb-3" list="datalistOptions" placeholder="I would describe my user type as"/>
                        <datalist id="datalistOptions">
                            <option value="Web Designer"/>
                            <option value="Web Developer"/>
                            <option value="Digital Marketer"/>
                            <option value="SEO Specialist"/>
                            <option value="Graphic Designer"/>
                        </datalist>
                    <input name="password" onBlur={handleBlur} className="form-control mb-3" type="password" placeholder="Password" />
                    <span>Minimum 8 characters</span> <br/>

                    <input type="submit" className="form-control btn btn-primary my-3" value="Next"/>
                </form>

                <p>By clicking the "Next" button, you agree to creating a free account, and to <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
            </div>
        </section>
    );
};

export default Login;

