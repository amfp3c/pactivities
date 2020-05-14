import React from 'react';
import { withRouter } from 'react-router-dom';
import '../home/Home.css';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div
        className="menu-item"
        onClick={() => history.push(`${linkUrl}`)}
    >
        <div 
            className="background-image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>View</span>
        </div>
    </div>
    );

export default withRouter(MenuItem);