import React, { Component } from 'react';
import Button from '../button/Button';
import '../home/Home.css';
import axios from 'axios';

class Contact extends Component {
    state = {
        contact:{
            to:'',
            subject:'',
            body:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/mail', this.state.contact)
        .then(response => {
            console.log(this.state.contact);
            console.log(response);
            this.setState({ contact:{
                to:'',
                subject:'',
                body:''
            }})
        }).catch(error => {
            console.log(error);
        })
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        let contact = this.state.contact;
        contact[name] = value;
        this.setState({ contact: contact })
    }

    render() {
        return (
            <div className="contact-show">
                <div className='sign-in'>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <h3>Message</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group-2">
                                    <input type="text" name="to" value={this.state.contact.to} onChange={this.handleChange} label="To" placeholder="From*" required />
                                </div>
                                <div className="form-group-2">
                                    <input type="text" name="subject" value={this.state.contact.subject} onChange={this.handleChange} label="Subject" placeholder="Subject*" required />
                                </div>
                                <div className="form-group-2">
                                    <textarea type="text" name="body" value={this.state.contact.body} onChange={this.handleChange} label="Body" placeholder="Message Body*" required />
                                </div>
                                <Button type="submit" value="Sign In">Send my message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;