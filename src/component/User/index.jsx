import React from 'react';
import {connect} from 'react-redux';
import {List, WhiteSpace, Result, Button, Modal} from 'antd-mobile';
import browserCookies from 'browser-cookies';
import {Redirect} from 'react-router-dom';
import {logoutSubmit} from '../../redux/user.redux';


@connect(
  state => state.user,
  {logoutSubmit}
)
class User extends React.Component {

  logout = () => {
    const alert = Modal.alert;

    alert('注销', '确认退出登录吗？', [
      {text: '取消', onPress: () => { console.log('取消'); }},
      {text: '确认', onPress: () => {
        browserCookies.erase('userid');
        // window.location.href = window.location.href;
        this.props.logoutSubmit();
      }},
    ])
    // console.log('logout');
    // browserCookies.erase('userid');
    // window.location.href = window.location.href;

  };

  render() {
    const props = this.props;
    return props.user ? (
      <div>
        <Result
          img={<img src={require(`../image/${props.avatar}.png`)} style={{width: 40}} alt=""/>}
          title={props.user}
          message={props.type === 'boss' ? props.company : null}
        />
        <List renderHeader={() => '简介'}>
          <List.Item>
            {props.title}
            {
              this.props.desc && this.props.desc.split('\n').map(item => {
                return <List.Item.Brief key={item}>{item}</List.Item.Brief>
              })
            }
          </List.Item>
          <List.Item>
            <Button onClick={this.logout}>退出登录</Button>
          </List.Item>
        </List>
      </div>
    ) :  <Redirect to={this.props.redirectTo}/>;

  }

}

export default User;
