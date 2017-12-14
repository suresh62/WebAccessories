/*
 * ------------------------------------------------------
 * Home Component.It contains all other components
 * @Author: Suresh Kumar G
 * @Date: 19-Nov-2017
 * ------------------------------------------------------
 */

 'use strict';

 import React from 'react';
 import ReactDOM from 'react-dom';
 import HomeHeaderView from './HomeHeader/HomeHeaderView';
 import LeftPanelView from './LeftPanel/LeftPanelView';
 import RightPanelView from './RightPanel/RightPanelView';
 import { BrowserRouter as Router,Switch, Route,Link, HashRouter } from 'react-router-dom';
 import PopupView from './WebComponents/Popup/PopupView';
 
 

 class HomeView extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
                <div id="wa-container">
                  
                           {console.log(this.props,<HomeView/>)}
                        <HomeHeaderView></HomeHeaderView>
                        <div id="wa-panel-container">
                          <LeftPanelView></LeftPanelView>
                          <RightPanelView></RightPanelView>
                        </div>
                     
                    

                </div>

                 
        )
    }
 }


 

 ReactDOM.render(<Router  history={history}><HomeView><div id="tes"></div></HomeView></Router>, document.getElementById('mainContent'));
 
