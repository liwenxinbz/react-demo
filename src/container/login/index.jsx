import React from 'react';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/user.redux';
import Logo from '../../component/Logo';
import createForm from '../../component/createForm';
//
// function wrapperHello(Comp) {
//   class NewComp extends React.Component {
//       render() {
//           return (
//             <div>
//                 <p>我是HOC高阶组件</p>
//                 <Comp/>
//             </div>
//           );
//       }
//   }
//
//   return NewComp;
// }
//
// @wrapperHello
// class Hello extends React.Component {
//     render() {
//         return <div>hello react！</div>
//     }
// }


@connect(
    state => state.user,
    {login}
)

@createForm
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register = () => {
        this.props.history.push('/register');
    };

    handleLogin = () => {
        this.props.login(this.props.state);
    };

    render() {
        return (
            <div>
                {
                    this.props.redirectTo && this.props.redirectTo !== '/login' ? (
                        <Redirect to={this.props.redirectTo}/>
                    ) : null
                }
                <Logo/>
                <h2>登录页面</h2>
                {this.props.msg ? <p>{this.props.msg}</p> : null}
                <WingBlank>
                    <List>
                        <InputItem onChange={val => this.props.handleChange('user', val)}>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem onChange={val => this.props.handleChange('pwd', val)}>密码</InputItem>
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