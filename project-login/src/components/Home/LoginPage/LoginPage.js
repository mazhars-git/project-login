import React from 'react';
import Heading from '../Heading/Heading';
import Login from '../Login/Login';

const LoginPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Login></Login>
                <Heading></Heading>
            </div>
        </div>
    );
};

export default LoginPage;