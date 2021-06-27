import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default class UserCreate extends Component {
    constructor(props){
        super(props)

        this.state = {      
            username:'',
            email:'',
            referral: ''
        }

        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeReferral = this.changeReferral.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        if(this.props.match.params.id !== undefined || this.props.match.params.id !== null){
            this.state.referral = this.props.match.params.id
        }

    }

    changeUserName(event){
        this.setState({
            username:event.target.value
        })  
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changeReferral(event){
        this.setState({
            referral:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault() 
        
        const registeredUser = {
            username: this.state.username,
            email: this.state.email,
            referral: this.state.referral
        }

        console.log(registeredUser.referral)

        axios.post('http://localhost:4000/app/user',registeredUser)
            .then(response => {console.log(response.data)
                document.location.href="/"
            })
        }

        render(){
            return(
                <div className='form-div'>
                    <h1>Create new user</h1>
                    <form onSubmit={this.onSubmit}>
                        <input type='text' placeholder='User name' onChange={this.changeUserName} value={this.state.username} className='form-control form-group'/>
                        <input type='text' placeholder='Email' onChange={this.changeEmail} value={this.state.email} className='form-control form-group'/>
                        <input type='text' placeholder='Referral link' onChange={this.changeReferral} value={this.state.referral} className='form-control form-group'/>
                        <input type='submit' className='btn btn-danger btn-block' value='Submit' />
                    </form>
                </div>
            )
        }

}