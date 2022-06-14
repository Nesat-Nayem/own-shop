import React, { useState } from 'react';
import { Button, Box, Container, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Logo.scss';
// import useAuth from '../../../Hooks/useAuth';

import './Logo.scss';

const Logo = () => {
    // const { googleSignIn, passwordLoginUser } = useAuth();
    const [loginData, setLoginData] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // passwordLoginUser(loginData.email, loginData.password, location, navigate);
    }

    const handleGoogleSignIn = () => {
        // googleSignIn(location, navigate);
    };

    return (
        <Container className="login_continer">
            <Box className="login_box">
                <Box className="box_title">
                <h1>Login</h1>
                </Box>
                <form onSubmit={handleOnSubmit}>
                    <Box>
                        <TextField
                            className="input_field"
                            label="Enter your email"
                            variant="standard"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                        />
                    </Box>
                    <Box>
                        <TextField
                            className="input_field"
                            label="Password"
                            variant="standard"
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                        />
                    </Box>
                    <Box className="form_action">
                        <a href="#">Forgot your password?</a>
                        <Button className="btn_regular" type="submit">Sign In</Button>
                    </Box>
                </form>
                <Box className="login_bottom">
                    <Box className="new_user">
                        <hr />
                        <p>New user?</p>
                        <hr />
                    </Box>
                    <Link style={{ textDecoration: 'none' }} to="/register">
                        <Button className="btn_regular">Creact An Account</Button>
                    </Link>
                    <Button onClick={handleGoogleSignIn} className="btn_regular">Sign In With Google</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Logo;