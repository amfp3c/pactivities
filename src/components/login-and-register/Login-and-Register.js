import React from 'react';
import SignIn from '../sign-in/Sign-In';
import SignUp from '../sign-up/Sign-Up';
import '../home/Home.css';

const LoginAndRegister = (props) => (
    <div className="showcase">
        <div className='login-and-register'>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <SignIn {...props}/>
                </div>
            </div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                        <SignUp {...props} />
                </div>
            </div>
        </div>
    </div>
)

export default LoginAndRegister;