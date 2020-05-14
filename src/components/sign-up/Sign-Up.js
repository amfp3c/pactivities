import React, { Component } from 'react';
import Button from '../button/Button';
import '../home/Home.css';
import axios from 'axios';

class SignUp extends Component {
        state = {
            member:{
                communityCode:'',
                email:'',
                password:'',
            }
        }

    handleSubmit = event => {
        // const { password, confirmPassword } = this.state;
        //     if(password !== confirmPassword) {
        //         alert("passwords must match");
        //         return;
        event.preventDefault();
        axios.post('http://localhost:8080/submitMemberDetails', this.state.member)
        .then(response => {
            localStorage.setItem("loggedInMember", response.data.email)
            localStorage.setItem("loggedInId", response.data.id)
            console.log(response);
            this.props.updateStatus();
            this.props.history.push('/home');
        }).catch(error => {
            
        });
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempMember = {...this.state.member};
        // console.log(name + ',' + value)
        tempMember[name] = value;
        this.setState(
            {
                member: tempMember
            }
        )
    }

    render() {
        return (
            <div className="sign-up">
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <h2 className="title">I do not have an account</h2>
                    <span>Sign up with your email and password</span>
                    <div className="form-group-2">
                        <input type="text" name="communityCode" value={this.state.member.communityCode} onChange={this.handleChange} label="Enter Community Code" required />
                        <label>Community Code</label>
                    </div>
                    <div className="form-group-2">
                        <input type="email" name={"email"} value={this.state.member.email} onChange={this.handleChange} label="Email" required />
                        <label>Email</label>
                    </div>
                    <div className="form-group-2">
                    <input type="password" name="password" value={this.state.member.password} onChange={this.handleChange} label="Password" required />
                    <label>Password</label>
                    </div>
                    {/* <div className="form-group-2">
                        <input type="password" name="confirmPassword" value={this.state.member.confirmPassword} onChange={this.handleChange} label="Confirm Password" required />
                        <label>Confirm Password</label><br/>
                    </div> */}
                    <Button type="submit" value="Sign Up">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;