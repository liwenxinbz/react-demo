import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import reducers from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';
import './config';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// 登录

ReactDom.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Auth}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Redirect to="/dashboard" component={Dashboard}></Redirect>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
    ,
    document.getElementById('root')
);
