import React from 'react';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/user.redux';
import Logo from '../../component/Logo';


@connect(
    state => state.user,
    {login}
)
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
        this.state = {
            user: '',
            pwd: ''
        };
    }

    register = () => {
        this.props.history.push('/register');
    };

    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    handleLogin = () => {
        // const {user, pwd} = this.state;
        this.props.login(this.state);
    };

    render() {
        return (
            <div>
                {
                    this.props.redirectTo ? (
                        <Redirect to={this.props.redirectTo}/>
                    ) : null
                }
                <Logo/>
                <h2>登录页面</h2>
                {this.props.msg ? <p>{this.props.msg}</p> : null}
                <WingBlank>
                    <List>
                        <InputItem onChange={val => this.handleChange('user', val)}>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem onChange={val => this.handleChange('pwd', val)}>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login;