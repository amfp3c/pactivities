import React, { Component } from 'react';
import Directory from '../directory/Directory';
import '../home/Home.css'; 

class Assist extends Component {
    state = {
        assists:[
            {
                name:'',
                assistanceNeeded:'',
                date:'',
                time:'',
                price:''
            }
        ],
        addedAssist:''
    }
    //component did mount => fetch all Assist => Array List of assist
    // the add func should return (from Spring) an array List of assist. 

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }

    add = event => {
        const tempAssist = [...this.state.assists];
        const assist = {
            name: this.state.addedAssist,
        }
        tempAssist.push(assist);
        this.setState(
            {
                assist:tempAssist,
                addedAssist:''
            }
        )
    }

    delete = index => {
        const tempAssist = [...this.state.assists];
        tempAssist.splice(index, 1);
        this.setState(
            {
                assist: tempAssist
            }
        )
    }

    render() {

        const assistsRows = this.state.assist? this.state.assist.map( (assist, key) => {
            return (
                <tr scope="row" key={key}>
                    <td className="pt-3-half" contenteditable="true" > {assist.name}</td>
                    <td className="pt-3-half" contenteditable="true" value="this.state.assists.assistanceNeeded"></td>
                    <td className="pt-3-half" contenteditable="true" value="this.state.assists.date"></td>
                    <td className="pt-3-half" contenteditable="true" value="this.state.assists.time"></td>
                    <td className="pt-3-half" contenteditable="true" value="this.state.assists.price"></td>
                    <td>
                        <span className="table-remove"><button type="button" className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                    </td>
                </tr>
            )
        }) : ""

        return (
            <div>
                <Directory />
                <div className="container">
                    <div className="row">
                        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Assist</h3>
                    </div>
                    <div className="row">
                        <div class="form-group">
                            <input type="text" onChange={this.handleChange} value={this.state.assists.name} name="name" placeholder="Enter Your Name" />
                        </div>
                        <div class="form-group">
                            <input type="text" onChange={this.handleChange} value={this.state.assists.assistanceNeeded} name="assistanceNeeded" placeholder="Assistance Needed" />
                        </div>
                        <div class="form-group">
                            <input type="text" onChange={this.handleChange} value={this.state.assists.date} name="date" placeholder="Date" />
                        </div>
                        <input type="text" onChange={this.handleChange} value={this.state.assists.time} name="time" placeholder="Time" />
                        <input type="text" onChange={this.handleChange} value={this.state.assists.price} name="price" placeholder="Price" />
                        <button onClick={this.add}>add</button>
                    </div>
                    <div className="row">
                        <div id="table" className="table-editable">
                            <span className="table-add float-right mb-3 mr-2"><a href="#!" className="text-success"><i className="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                            
                            
                    
                            
                            <table className="table table-bordered table-responsive-md table-striped text-center">
                                <thead>
                                    <tr>
                                        <th className="col">Your Name</th>
                                        <th className="col">Assistance Needed</th>
                                        <th className="col">Date</th>
                                        <th className="col">Time</th>
                                        <th className="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assistsRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Assist;