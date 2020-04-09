import React from 'react';
import { Redirect } from 'react-router-dom';

import { authenticationService } from '../services/authenticationService';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Username: '',
            Password: '',
            error: false,
        };

        //this.handleChange = this.handleChange.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        //this.handleLoginCall = this.handleLoginCall.bind(this);
        // event.target.id is grabbing the "id" value from the element, so if you go 
        // to the element and look at its id, it will contain Username or Password
        // so "event.target.id" is "Username" or "Password"
        // and "event.target.value" is capturing the value that the user inputted
        // and updating the state that is used to display in the front-end
        //handleChange(event) {
        //this.setState({ [event.target.id]: event.target.value });
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        this.setState({ Username: "" });
        this.setState({ Password: "" });

        const { Username, Password } = this.state;


      
        //this.setState({ error: false });
        console.log(Username);

        authenticationService.login(Username, Password);
        //if user
        //return this.setState({ error: true });
          //  console.log("Authentication did not verify");
        //}
        console.log("I got called");
        //console.log(user);

        
    }

    //handleChange(event, { name, value }) {
       // this.setState({ [name]: value });
    //}

    //handleLoginCall(event) {
    //    event.preventDefault();

    //    fetch('api/Users/authenticate', {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: JSON.stringify({ Username: this.state.Username, Password: this.state.Password })

    //    }).then(() => {
    //        console.log("YOU HIT THE LOGIN SERVER JUST FINE");

    //    }).catch(() => {
    //        console.log("not okay");
    //    });

    //    this.setState({ toWelcomePage: true });
    //}

        //handleSubmit(event){
        //    event.preventDefault();

        //    var username = this.state.Username;
        //    var password = this.state.Password;

        //    // fetch(post) to the usersController
        //    // var theFormData = new FormData();
        //    // theFormData.append("Username", this.state.Username);
        //    // theFormData.append("Password", this.state.Password);

        //    if(authenticationService.login(username, password))

        //    this.setState({ Username: "" });
        //    this.setState({ Password: "" });
        //}
    

        render()
        {
            return (
                <div>

                    <div>
                        <form className="col-lg-3 col-sm-6 border" style={{ 'marginTop': 20 }} onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="Username"
                                    className="form-control"
                                    value={this.state.Username}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="text"
                                    id="Password"                                  
                                    className="form-control"
                                    value={this.state.Password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>

            );
        }       
    }


export { LoginPage };