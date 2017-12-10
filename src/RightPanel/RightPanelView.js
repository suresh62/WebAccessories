
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
 

 class RightPanelView extends React.Component{

    constructor(){
        super();
        this.state = { menus:["PopUps","Alerts","Messages"]};
    }

    render(){
        return(
              
                        <div> Rigtht Panel</div>
                        
        )
    }
 }



export default RightPanelView;