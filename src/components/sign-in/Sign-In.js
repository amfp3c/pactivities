import React, { Component } from 'react';
import Button from '../button/Button';
import '../home/Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    state = {
        member:{
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8080/memberLogIn', this.state.member)
        .then(response => {
            console.log(this.history);
            localStorage.setItem("loggedInMember", response.data.email)
            localStorage.setItem("loggedInId", response.data.id)
            localStorage.setItem("communityCode", response.data.communityCode)
            this.props.updateStatus();
            // this.props.history.push('/');
            document.getElementById("hidden-to-home").click();
        }).catch(error => {

        })
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        const tempMember = {...this.state.member};
        tempMember[name] = value;
        this.setState(
            {
                member: tempMember
            }
        )
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group-2">
                        <input type="email" name="email" value={this.state.member.email} onChange={this.handleChange} label="Email" required />
                        <label>Email</label>
                    </div>
                    <div className="form-group-2">
                        <input type="password" name="password" value={this.state.member.password} onChange={this.handleChange} label="Password" required />
                        <label>Password</label><br/>
                    </div>
                    <Button type="submit" value="Sign In">Sign In</Button>
                </form>
                <Link id="hidden-to-home" to="/sell" />
            </div>
        )
    }
}

export default SignIn;