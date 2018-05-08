
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
 import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';


 class LeftPanelView extends React.Component{

    constructor(){
        super();
        this.state = { menus:[{name:"PopUps",route:"popup"},{name:"Alerts",route:"alert"},{name:"Messages",route:"message"}]};
    }

    render(){
        return(
                    <div id="wa-left-panel">
                        <ul id="wa-left-panel-menu" className={style.wp_left_panel_cls}>
                            {this.state.menus.map((val,key) => <li><NavLink to={"/"+val.route}>{val.name}</NavLink></li> )}
                        </ul>
                     </div>
            
            
        )
    }
 }



export default LeftPanelView;