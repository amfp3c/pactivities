import React, { Component } from 'react';
import Button from '../button/Button';
import '../home/Home.css';

class ContactUs extends Component {
    state = {
        contact:{
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber:'',
            message:'',
        }
    }

    render() {
        return (
            <div className="showcase">
                <div className='sign-in'>
                    <h2>CONTACT US</h2>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <h3>How can we help you?</h3>
                            <form>
                                <div className="form-group-2">
                                    <input type="text" name="firstName" value={this.state.contact.firstName} onChange={this.handleChange} label="First Name" placeholder="First Name*" required />
                                    <input type="text" name="lastName" value={this.state.contact.lastName} onChange={this.handleChange} label="Last Name" placeholder="Last Name*" required />
                                </div>
                                <div className="form-group-2">
                                    <input type="email" name="email" value={this.state.contact.email} onChange={this.handleChange} label="Email" placeholder="Email*" required />
                                </div>
                                <div className="form-group-2">
                                    <input type="text" name="phoneNumber" value={this.state.contact.phoneNumber} onChange={this.handleChange} label="Phone Number" placeholder="Phone Number*" required />
                                </div>
                                <div className="form-group-2">
                                    <textarea type="text" name="message" value={this.state.contact.message} onChange={this.handleChange} label="Message" placeholder="Message*" required />
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

export default ContactUs;