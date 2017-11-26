/*
 * ------------------------------------------------------
 * Self executing function acts as starting point for the app.
 * @Author: Suresh Kumar G
 * @Date: 19-Nov-2017
 * ------------------------------------------------------
 */

'use strict';

(function(){


  //Check the user is logged in.
  if(localStorage.getItem("jwt")){

    location.href = "./home.html";
  }
  else {
    location.href = "./login.html";
  }

})();
