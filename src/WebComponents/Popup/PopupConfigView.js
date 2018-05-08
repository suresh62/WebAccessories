/*
 * ------------------------------------------------------
 * This component will help configuring popup.
 * @Author: Suresh Kumar G
 * @Date: 15-DEC-2017
 * ------------------------------------------------------
 */


import React from 'react';
import _ from 'underscore';
import PopUpActions from './PopupAction';
import PopupStore from './PopupStore';

class PopupConfigView extends React.Component {

    constructor() {
        super();
        this.applyPopUpStyleChanges = this.applyPopUpStyleChanges.bind(this);
        this.state = {}
    }
    
    applyPopUpStyleChanges() {
        
        const containerEle = document.getElementById('wa_popup_style_configuration_container');
        const inputs = containerEle.getElementsByTagName('input');
        var config = {};

        _.each(inputs,function(input){
            
            const prop = JSON.parse(input.getAttribute('data-prop'));
            //ie. getting name from the object and adding to config object
            config[prop['name']] = input.value;
        })

        PopUpActions.applyPopUpStyleChanges(config) //Send the new style values
    }

    render() {

        const POPUP_DEFAULT_CONFIG = PopupStore.getDefaultPopUpAttributeValue();
        const POPUP_CONFIG_PROP_TYPES = PopupStore.getPopupConfigPropTypes();

        return (

            <div>
                <div>
                    <table id="wa_popup_style_configuration_container">
                        {POPUP_CONFIG_PROP_TYPES.map((val, key) =>
                            <tr>
                                <td><span>{val.label}</span> </td>
                                <td><span><input data-prop={JSON.stringify(val)} type={val.type} defaultValue={POPUP_DEFAULT_CONFIG[val.name]} /></span></td>
                            </tr>
                        )}
                    </table>

                </div>

                <button onClick={this.applyPopUpStyleChanges}>Apply Changes</button>
            </div>
        )


    }
}


export default PopupConfigView;