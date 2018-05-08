/*
 * ------------------------------------------------------
 * This component will show the preview of current configuring popup.
 * @Author: Suresh Kumar G
 * @Date: 15-DEC-2017
 * ------------------------------------------------------
 */

import React from 'react';
import PopupConfigView from './PopupConfigView';
import PopupStore from './PopupStore';
import _ from 'underscore';
import waUtils from '../../util';

class PopupPreview extends React.Component{

    constructor(){
        super();
        this.popupStyleConfigChanged  = this.popupStyleConfigChanged.bind(this);
        this.state = {};
     }

    componentDidMount() {  
        PopupStore.addChangeListener(this.popupStyleConfigChanged);
    }

    popupStyleConfigChanged() {  
       this.setState({
           currentPopupStyleAttribute: PopupStore.getCurrentPopUpAttributeValue()
       })
    }  
    
    render(){

        var props = this.state["currentPopupStyleAttribute"];

        _.each(props,function(val,key){
           
            var measureType = PopupStore.getMeasureTypeForAPopupStyle(key);

            if(measureType){
                props[key] = val+measureType;
            }
        })

        return (<div id="wa-popup-preview-container" style={props}>
                <div id="wa-popup-preview"></div>
        </div>)
    }
}

export default PopupPreview;