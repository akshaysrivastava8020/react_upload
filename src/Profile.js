import React, { Component } from 'react'

export class Profile extends Component {
    constructor()
    {
        super();
        this.state={

            name:'Akshay'
            
        }
    }
    updateState()
    {
        this.setState({
            name:'Riya'
            
        })
    }
     
       
    render() {
        return (
            <div>
                <h1> Hello {this.state.name}</h1>
                <h2>Email {this.state.email}</h2>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
}

export default Profile





