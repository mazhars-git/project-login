import React from 'react';

const Login = () => {
    return (
        <section className="col-md-8">
            <div className="m-5">
                <h3>Let's set up your account</h3>
                <p>Already have an account? Sign in</p>
                <form>
                <input className="form-control mb-3" type="text" placeholder="Your name" required/>
                <input className="form-control mb-3" type="email" placeholder="Email address" required/>
                <input className="form-control mb-3" list="datalistOptions" placeholder="I would describe my user type as"/>
                    <datalist id="datalistOptions">
                        <option value="Web Designer"/>
                        <option value="Web Developer"/>
                        <option value="Digital Marketer"/>
                        <option value="SEO Specialist"/>
                        <option value="Graphic Designer"/>
                    </datalist>
                <input className="form-control mb-3" type="password" placeholder="Password" />
                <span>Minimum 8 characters</span> <br/>

                <button type="submit" className="btn btn-primary my-3">Sign in</button>

                </form>
            </div>
        </section>
    );
};

export default Login;

