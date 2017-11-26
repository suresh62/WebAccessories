/*
 * ------------------------------------------------------
 * @Object: LoginAction.Each function here dispatches an login action.
 * @Author: Suresh Kumar G
 * @Date: 19-Nov-2017
 * ------------------------------------------------------
 */

import LoginActionTypes from './LoginActionTypes';
import Dispatcher from '../AppDispatcher';

const LoginActions = {

   loginUser(jwt) {
    // Go to the Home page once the user is logged in
    location.href = "./home.html";
    //RouterContainer.get().transitionTo(‘/‘);
   // We save the JWT in localStorage to keep the user authenticated. We’ll learn more about this later.
   //localStorage.setItem(‘jwt’, jwt);
   // Send the action to all stores through the Dispatcher
   Dispatcher.dispatch({
     actionType: LoginActionTypes.VALIDATE_USER,
     jwt: 'jwt'
   });

  }

};


export default LoginActions;
