/*
 * ------------------------------------------------------
 * Alert View Component.This component help user to configure the alerts
 * that they want to display in their web pages
 * @Author: Suresh Kumar G
 * @Date: 09-DEC-2017
 * ------------------------------------------------------
 */

import React from 'react';


class AlertView extends React.Component{

        constructor(){
            super();
            console.log(this);
        }

        render(){
            return(

                    <h1>{console.log(this)}Alerts</h1>
            )
        }

}


export default AlertView;