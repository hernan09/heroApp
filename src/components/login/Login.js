import React, { Component } from 'react';
import './login.scss'

class Login extends Component {
     constructor(props){
         super(props)


     }
     handlelogin =()=>{
         console.log(this.props.history.replace('/'))
     }

    render() {
        return (
            <div className="container_login">
                <h1>LoginScreen</h1>
                <hr></hr>
                <button className="btn btn-primary" onClick={this.handlelogin}>Click For login</button>
            </div>
        );
    }
}

export default Login;