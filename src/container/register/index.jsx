import React from 'react';
import {Redirect} from 'react-router-dom';
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';
import createForm from '../../component/createForm';


import Logo from '../../component/Logo';


const RadioItem = Radio.RadioItem;

@connect(
    state => state.user,
    {register}
)

@createForm
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentDidMount() {
        this.props.handleChange('type', 'genius');
    }

    handleRegister() {
        // this.props.history.push('/login')
        this.props.register(this.props.state);
    }

    render() {
        return (
            <div>
                {
                    this.props.redirectTo ? (
                        <Redirect to={this.props.redirectTo}/>
                    ) : null
                }
                <Logo/>
                <h2>注册页面</h2>
                {this.props.msg ? <p>{this.props.msg}</p> : null}
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v => this.props.handleChange('user', v)}
                        >
                            用户名
                        </InputItem>
                        <InputItem
                            type="password"
                            onChange={v => this.props.handleChange('pwd', v)}
                        >
                            密码
                        </InputItem>
                        <InputItem
                            type="password"
                            onChange={v => this.props.handleChange('repeatpwd', v)}
                        >
                            确认密码
                        </InputItem>
                        <RadioItem
                            onChange={v => this.props.handleChange('type', 'genius')}
                            checked={this.props.state.type === 'genius'}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            onChange={v => this.props.handleChange('type', 'boss')}
                            checked={this.props.state.type === 'boss'}
                        >
                            Boss
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Register;
