import React, { Component } from 'react';
import LoginWithGoogle from './LoginWithGoogle'

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginWithGoogle props={'Login'}/>
        <p>- or -</p>
        <form action="" method="post">
          <label for="email">email</label>
          <input id="email" type="text" name="email"></input>
          <label for="password">password</label>
          <input id="password" type="password" name="password"></input>
          <input type="submit" value="login"></input>
        </form>
      </div>
    );
  }
}

export default Login
