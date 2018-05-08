


'use strict';

import BaseStore from '../../BaseStore';
import Dispatcher from '../../AppDispatcher';
import _ from 'underscore';


class PopUpStore extends BaseStore {


    constructor() {
        super();
        this.dispatchToken = Dispatcher.register(this._registerToActions.bind(this));
        this.currentPopupAttributeValue = {};
    }

    setValue(value) {
        var defaultValues = this.getDefaultPopUpAttributeValue();
        this.currentPopupAttributeValue = _.extend(defaultValues, value);
    }

    getDefaultPopUpAttributeValue() {
        const defaultValues = { 'background-color': 'red', width: '100', height: '100', 'border-size': '1' };
        return defaultValues;
    }

    getCurrentPopUpAttributeValue() {
        return this.currentPopupAttributeValue;
    }

    getMeasureTypeForAPopupStyle(style) {

        const STYLE_MEASURES = {
            'width':'%',
            'height':'px',
            'border-size':'px'
        }
        
        if (style) {
            return STYLE_MEASURES[style];
        }
    }

    getPopupConfigPropTypes() {

        return [
            {
                name: 'width',
                label: 'Width',
                type: 'number',
                measure: '%'
            },
            {
                name: 'height',
                label: 'Height',
                type: 'number',
                measure: 'px'
            },
            {
                name: 'background-color',
                label: 'Background Color',
                type: 'color',
                measure: null
            },
            {
                name: 'border-size',
                label: 'Border Size',
                type: 'number',
                measure: 'px'
            }
        ]
    }

    _registerToActions(object) {

        var action = object["action"],
            state = object["state"];

        switch (action) {
            case 'APPLY-POPUP-STYLE-CHANGES': this.setValue(state); break;
        }

        this.emitChange();
    }

}

export default new PopUpStore();