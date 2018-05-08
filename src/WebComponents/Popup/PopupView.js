/*
 * ------------------------------------------------------
 * Popup View Component.This component help user to configure the popup
 * that they want to display in their web pages
 * @Author: Suresh Kumar G
 * @Date: 09-DEC-2017
 * ------------------------------------------------------
 */

import React from 'react';
import PopupPreview from './PopupPreview';
import PopupConfigView from './PopupConfigView';


class PopupView extends React.Component{

        constructor(){
            super();
            
        }

        render(){
            return(

                    <div className="wa_left_panel_innercontainer">
                            <p>Configure Your Popup</p>
                            <div style={{float:'left','width':'30%'}}><PopupConfigView/></div>
                            <div style={{float:'left','width':'70%'}}>><PopupPreview/></div>
                            
                    </div>
                   
            )
        }

}


export default PopupView;