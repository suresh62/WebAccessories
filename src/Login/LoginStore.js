




'use strict';

import BaseStore from '../BaseStore';
import Dispatcher from '../AppDispatcher';


class LoginStore extends BaseStore {

  constructor() {

   super();

   this.dispatchToken = Dispatcher.register(this._registerToActions.bind(this));
   this._user = null;
   this._jwt = null;
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  _registerToActions(state, action) {
    console.log(state,action);
    // switch (action.type) {
    //   case LoginActionTypes.VALIDATE_USER;
    //     // Do nothing for now, we will add logic here soon!
    //     return state;
    //
    //   default:
    //     return state;
    // }
  }
}

export default new LoginStore();
