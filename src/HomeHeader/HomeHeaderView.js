/*
 * ------------------------------------------------------
 * Home Page Header Component
 * @Author: Suresh Kumar G
 * @Date: 19-Nov-2017
 * ------------------------------------------------------
 */


'use strict';

import React from 'react';

class HomeHeaderView extends React.Component{

    constructor(){
        super();
        this.state = {
            pages:["Tools","Settings"]
        }
    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarColor02">
              <ul class="navbar-nav mr-auto">
                  {console.log(this)}
                   {this.state.pages.map(
                       (name,key) => <li className="nav-item" key={key}>
                                    <a class="nav-link" href="#">{name}</a>
                                    </li>
                    )}
                
              </ul>
              
            </div>
          </nav>

          
      )
        
    }

}


export default HomeHeaderView