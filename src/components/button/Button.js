import React from 'react';
import '../home/Home.css';

const Button = ({ children }) => (
    <button className="default-button">
        {children}
    </button>
)

export default Button;