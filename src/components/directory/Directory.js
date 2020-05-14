import React, { Component } from 'react';
import '../home/Home.css';
import MenuItem from '../menu-item/MenuItem';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title:'Assist',
                // imageUrl:
                id:1,
                linkUrl:'/assist'
            },
            {
                title:'Sell',
                // imageUrl:
                id:2,
                linkUrl:'/sell'
            },
            {
                title:'Purchase',
                // imageUrl: 
                id:3,
                linkUrl:'/purchase'
            }]
        }
    }
    
    render() {
        return (
            <div className='directory'>
                {this.state.sections.map(({title, imageUrl, id, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
                ))}
            </div>
        );
    }
}

export default Directory;