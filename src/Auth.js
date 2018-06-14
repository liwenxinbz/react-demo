import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from './Auth.redux';

@connect(
    state => state.auth,
    {login}
)

export default class Auth extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.isAuth ? <Redirect to="/dashboard"/> : null}
                <h2>你没有权限，请登录</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        );
    }
}