import React from 'react';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import Logo from '../../component/Logo';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register = () => {
        console.log(111);
        this.props.history.push('/register');
    };

    render() {
        return (
            <div>
                <Logo/>
                <h2>登录页面</h2>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login;