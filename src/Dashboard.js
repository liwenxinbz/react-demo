import React from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from "./Auth.redux";

import App from "./App";

function Erying() {
    return <h1>Erying</h1>
}

function Qibinglian() {
    return <h1>Qibinglian</h1>
}

@connect(
    state => state.auth,
    {logout}
)
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {isAuth} = this.props;
        console.log(this.props);
        const redirectToLogin = <Redirect to='/login'></Redirect>;
        const {url} = this.props.match.url;

        const app = (
            <div>
                <h1>独立团</h1>
                {isAuth ? <button onClick={this.props.logout}>注销登录</button> : null}
                <ul>
                    <li><Link to={`${url}/`}>一营</Link></li>
                    <li><Link to={`/dashboard/erying`}>二英</Link></li>
                    <li><Link to={'/dashboard/qibinglian'}>骑兵连</Link></li>
                </ul>
                <Route exact path="/dashboard/" component={App}></Route>
                <Route exact path="/dashboard/erying" component={Erying}></Route>
                <Route exact path="/dashboard/qibinglian" component={Qibinglian}></Route>
            </div>
        );

        return isAuth ? app : redirectToLogin;
    }
}