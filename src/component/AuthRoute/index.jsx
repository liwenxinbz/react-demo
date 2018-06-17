import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

@withRouter
class AuthRoute extends React.Component {

    componentDidMount() {
        //  获取用户信息 如果登录状态不变，如果没有登录则跳转登录页面
        //  获取用户信息 用户身份是什么。
        //  获取用户信息 用户的信息是不是完善。
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname;

        if (publicList.indexOf(pathname) > -1) {
            return null;
        }
        axios.get('/user/info').then((response) => {
            if (response.status === 200) {
                if (response.data.code ==0) {
                    // 有登录信息
                } else {
                    this.props.history.push('/login');
                }
            }
            console.log(response);
        });

    }

    render() {
        return null;
    }
}

export default AuthRoute;
