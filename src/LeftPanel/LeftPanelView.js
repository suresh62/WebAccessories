
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

 import React from 'react';
 import style from './style.css';
 import {BrowserRouter as Router,Link} from 'react-router-dom';


 class LeftPanelView extends React.Component{

    constructor(){
        super();
        this.state = { menus:["PopUps","Alert","Messages"]};
    }

    render(){
        return(
            <Router>
                    <div id="wa-left-panel">
                        <ul id="wa-left-panel-menu" className={style.wp_left_panel_cls}>
                            {this.state.menus.map((name,key) => <li><Link to="/popup">{name}</Link></li> )}
                        </ul>
                     </div>
            
            </Router>
            
        )
    }
 }



export default LeftPanelView;