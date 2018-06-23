import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Login from './container/login';
import AuthRoute from './component/AuthRoute';
import BossInfo from './container/BossInfo';
import GeniusInfo from './container/GeniusInfo';
import Register from './container/register';
import Dashboard from './component/Dashboard';
import reducers from './reducer';
import './config';
import './index.css'


const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// 登录



ReactDom.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRoute/>
                    <Switch>
                        <Route path="/bossinfo" component={BossInfo}/>
                        <Route path="/geniusinfo" component={GeniusInfo}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route component={Dashboard}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    )
    ,
    document.getElementById('root')
);
