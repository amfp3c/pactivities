import React, { Component } from 'react';
import axios from 'axios';
import './Sell.css';
import ScrollView from '../scroll-view/Scroll-View';

class Sell extends Component {
    state = {
        assist:{
            id: undefined,
            name:'',
            assistanceNeeded:'',
            date:'',
            topic:'',
            time:'',
            price:''
        },
        assistList: [],
        search:'',
        filteredList: [],
        isEditMode: false
    }

    handleSubmit = event => {
        console.log(this.state.assist)
        if(this.state.isEditMode == false) {
            axios.post('http://localhost:8080/submitAssistDetails?memberId=' + localStorage.getItem("loggedInId"), 
            this.state.assist)
            .then(response => {
                console.log(response)
                this.resetState()
                this.loadAssists()
            }).catch(error => {
                console.log(error)
            });
        } else{ 
            // call to update assists / axios.post updatedAssist with assistId / assist id from assist object
             axios.post(`http://localhost:8080/updateAssist/${this.state.assist.id}`, this.state.assist)
            .then(response => {
                console.log(response);
                this.resetState()
                this.loadAssists()
            }).catch (error => 
                console.log(error)
            )
        }
        event.preventDefault();
    }

    resetState = () => {
        this.setState({ 
            isEditMode: false,
            assist:{
                id: undefined,
                name:'',
                assistanceNeeded:'',
                date:'',
                topic:'',
                time:'',
                price:''
        }})
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempAssist = {...this.state.assist};
        tempAssist[name] = value;
        this.setState(
            {
                assist: tempAssist
            }
        )
    }

    searchChange(event) {
        if(event.target.value.length > 0){
            const filteredList = this.state.assistList.filter(assist => {
                return (assist.name.toLowerCase().includes(event.target.value.toLowerCase()) || 
                    (assist.topic != undefined && assist.topic.toLowerCase().includes(event.target.value.toLowerCase()))) ;
            })
            console.log("Filtere: ", filteredList)

            this.setState({
                search: event.target.value,
                filteredList: filteredList
            })
        }else{
            this.setState({
                search: "",
                filteredList: []
            })
        }
    }

    componentDidMount() {
        this.loadAssists()
    }

    loadAssists(){
        axios.get(`http://localhost:8080/findAllAssists?communityCode=${localStorage.getItem("communityCode")}`)
        .then(response => {
            console.log(response)
            this.setState(
                {
                    assistList: response.data,
                    isEditMode: false
                }
            )
        }).catch (error => 
            console.log(error)
        )
    }

    contact(assist) {
        console.log(assist)
        this.props.history.push("/contact")
    }

    edit(assist) {
        this.setState({
            assist:{
                id: assist.id,
                name: assist.name,
                assistanceNeeded: assist.assistanceNeeded,
                date: assist.date,
                topic: assist.topic ,
                time: assist.time,
                price: assist.price
            },
            isEditMode: true
        })
    
    }

    delete(assist) {
        // alert(assist);
        axios.delete(`http://localhost:8080/deleteAssist?assistId=${assist.id}`)
        .then(response => {
            // alert("Assist deleted.");
            const updatedList = this.state.assistList
            .filter(item => item.id !== assist.id)
            console.log("Working", updatedList);
            this.setState({ 
                assistList: updatedList
            })
        }).catch(error => {
            console.log(error);
        })
    }
    
    render() {
        // const { assist, search } = this.state;
        // const filteredAssists = assist.filter(topic => {
        //     return topic.name.toLowerCase().includes(search.toLowerCase());
        // })
        let loopList = this.state.filteredList.length > 0? this.state.filteredList : this.state.assistList

        const assists = loopList? loopList.map( (assist, index) => {
            return (<div key={index} className="card">
                <div className="new-card">
                    <div className="card-body">
                        <h5 className="card-title">Name: {assist.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Date of Assistance: {assist.date}</h6>
                        <p className="card-text">Assistance Needed: {assist.assistanceNeeded}</p>
                        <p className="card-text">Topic: {assist.topic}</p>
                        <p className="card-link">Time: {assist.time} Price: {assist.price}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => this.contact(assist)} className="btn btn-primary">Contact</button>
                        {
                        localStorage.getItem("loggedInId") == assist.assistMember.id?
                            <span>
                                <button onClick={() => this.edit(assist)} className="btn btn-secondary">Edit</button>
                                <button onClick={() => this.delete(assist)} className="btn btn-secondary">Delete</button>
                            </span>: ""
                        }
                    </div>
                </div>
            </div> )}) : ""
        console.log(assists)
        return (
            <div className="sell-page">
                <div className="sell-form">
                    <form >
                        <div className="row mb-2">
                            <div className="col">
                                <input onChange={this.handleChange} value={this.state.assist.name} name="name" type="text" className="form-control" placeholder="Name" required/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col">
                                <input onChange={this.handleChange} value={this.state.assist.assistanceNeeded} name="assistanceNeeded" type="text" className="form-control" placeholder="Assistance Needed" required/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-4">
                                <input onChange={this.handleChange} value={this.state.assist.date} name="date" type="date" className="form-control" placeholder="Date" required/>
                            </div>
                            <div className="row mb-2">
                                <div className="col-6">
                                <input onChange={this.handleChange} value={this.state.assist.topic} name="topic" type="text" className="form-control" placeholder="Topic" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-4">
                                <input onChange={this.handleChange} value={this.state.assist.time} name="time" type="text" className="form-control" placeholder="Time" required/>
                            </div>
                            <div className="row mb-2">
                                <div className="col-6">
                                    <input onChange={this.handleChange} value={this.state.assist.price} name="price" type="text" className="form-control" placeholder="Price" required/>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={this.handleSubmit} className="btn btn-primary btn-lg btn-block">{this.state.isEditMode?"Edit Assist":"Add Assist"}</button>
                    </form>
                </div>
                <div className="search">
                    <h2>Pending Assists</h2>
                    <input className="col-4" type="text" size="15" value={this.state.search} onChange={this.searchChange.bind(this)} placeholder="Search by Name or Topic" />
                </div><br/>
                <div className="row">
                    <ScrollView assistList={assists} />
                        {/* { assists } */}
                </div>
            </div>
        );
    }
}

export default Sell;