/*
 * ------------------------------------------------------
 * Popup View Component.This component help user to configure the popup
 * that they want to display in their web pages
 * @Author: Suresh Kumar G
 * @Date: 09-DEC-2017
 * ------------------------------------------------------
 */

import React from 'react';


class PopupView extends React.Component{

        constructor(){
            super();
            console.log(this);
        }

        render(){
            return(

                    <h1>{console.log(this)}Popup</h1>
            )
        }

}


export default PopupView;