import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle , setUser , setIsLogin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state.from || '/login';

    const login = () => {

        
        signInUsingGoogle()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri);
            console.log(result.user);
        })
        .finally( () => {
            setIsLogin(false);
        })
    }
    return (
        <div className="d-flex justify-content-center">
            <div>
                <h3>Login Page </h3>
                <Button variant="warning" onClick={login}>Google Sign In</Button>
            </div>
        </div>
    );
};

export default Login;