
/*
 * ------------------------------------------------------
 * Left Panel component containing the different web components menus like popups,alerts
 * User can choose the components and based on the selection different view to
 * configure the components will appear.
 * @Author: Suresh Kumar G
 * @Date: 19-Nov-2017
 * ------------------------------------------------------
 */


 'use strict';
/*
 * ------------------------------------------------------
 * Right Panel Component.It acts as a container component.
 * It contains routes for other webcomponents which are 
 * dynamically displayed based on user selection.
 * @Author: Suresh Kumar G
 * @Date: 9-DEC-2017
 * ------------------------------------------------------
 */

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
              <div>
                   
                       <div>
                        <Route path="/app/popup/:a/n" component={PopupView}/>
                        <Route  path="/../alert" component={AlertView}/>
                      </div>
             </div>
            
                        
        )
    }
 }



export default RightPanelView;