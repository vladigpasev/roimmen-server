import './auth.css';
import React from 'react';

class Auth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        password: '',
        loading: false,
        falsePassword: false
      };
  
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleNameChange(event) {
      this.setState({name: event.target.value});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value});
      }
  
    handleSubmit(event) {
      this.setState({loading: true});
      this.setState({falsePassword: false})
      fetch(`http://localhost:8080/api/users/authenticate/${this.state.name}/${this.state.password}`)
      .then(res => {
        if(res.status !== 200){
          throw res.status;
        }
        return res
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({loading: false});
          localStorage.setItem("name", result.name);
          localStorage.setItem("key", result.key);
          window.location.href = "/";
        })
      .catch((error) => {
          this.setState({loading: false});
          console.log(error)
          if(error === 409){
            this.setState({falsePassword: true})
          }else{
            alert("Somethig went wrong! Try again LATER!");
          }
        });
      event.preventDefault();
    }
  
    render() {
        return (
            <form id="container" onSubmit={this.handleSubmit}>
              <div id="loading" style={{display: this.state.loading ? "block" : "none"}}>
                <img src="loading.gif" alt="loading" />
              </div>
              <span style={{display: this.state.loading ? "none" : "block"}}>
                <h2>Authenticate</h2>
                <p className="name">Nickname: </p>
                <input required minLength="5" type="text" id="name" value={this.state.name} onChange={this.handleNameChange} onBlur={this.handleNameChange} placeholder="Jhone Doe" />
                <p className="pass">Password: </p>
                <input required minLength="6" type="password" id="pass" value={this.state.password} onChange={this.handlePassChange} onBlur={this.handlePassChange} placeholder="********" />
                <p className="error" style={{display: this.state.falsePassword ? 'block' : 'none'}}>Password for that account is INCORRECT!</p>
                <button type="submit">Login / Register</button>
              </span>
            </form>
        );
    }
}

export default Auth;
