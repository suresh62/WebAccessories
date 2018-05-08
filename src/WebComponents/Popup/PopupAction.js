/*
 * ------------------------------------------------------
 * @Object: LoginAction.Each function here dispatches an login action.
 * @Author: Suresh Kumar G
 * @Date: 19-Nov-2017
 * ------------------------------------------------------
 */

import Dispatcher from '../../AppDispatcher';


const PopUpActions = {

    applyPopUpStyleChanges(newStyle){
            Dispatcher.dispatch({
                action:"APPLY-POPUP-STYLE-CHANGES",
                state:newStyle
            })
    }
}

export default PopUpActions;