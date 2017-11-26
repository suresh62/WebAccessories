/*
 * ------------------------------------------------------
 * Login Component
 * @Author: Suresh Kumar G
 * @Date: 19-Nov-2017
 * ------------------------------------------------------
 */


'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import LoginStore from './LoginStore';
import AuthService from './AuthService';
import styles from '../../css/login.css';


class LoginView extends React.Component{

  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    AuthService.login(this.state.username,this.state.password);
  }

  onChange(e){
    e.preventDefault();

    if(e.target.name == "username"){
      this.setState({user:e.target.value});
    }
    else {
      this.setState({password:e.target.value});
    }

  }

  render() {
    return (
      <div class="row">
      <div  class="col-md-6 horizontal-center">
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>
    </form>
      </div>

      </div>
    );
  }
}


ReactDOM.render(<LoginView />, document.getElementById('loginContainer'));
