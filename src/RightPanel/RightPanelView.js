/*
 * ------------------------------------------------------
 * Right Panel Component.It acts as a container component.
 * It contains routes for other webcomponents which are 
 * dynamically displayed based on user selection.
 * @Author: Suresh Kumar G
 * @Date: 9-DEC-2017
 * ------------------------------------------------------
 */

'use strict';


 import React from 'react';
 import PopupView from '../WebComponents/Popup/PopupView';
 import AlertView from '../WebComponents/Alert/AlertView';
 import { BrowserRouter as Router,Switch, Route,Link } from 'react-router-dom';
 

 class RightPanelView extends React.Component{

    constructor(){
        super();
        this.state = { menus:["PopUps","Alerts","Messages"]};
    }

    render(){
        return(
              <div id="wa-right-panel">
                   
                       <div>
                        <Route path="/popup" render={() => <PopupView alt={() => console.log(this)
                            }
                        />}/>
                        <Route  path="/alert" component={AlertView}/>
                      </div>
             </div> 
            
                        
        )
    }
 }



export default RightPanelView;