import React from 'react';
import {NavBar} from 'antd-mobile';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import NavLinkBar from '../NavLinkBar';
import Boss from '../../component/Boss';
import Genius from '../../component/Genius';
import User from '../../component/User';

function Msg() {
  return <h2>消息列表</h2>;
}

@withRouter
@connect(
  state => state
)

class Dashboard extends React.Component {


  render() {
    const user = this.props.user;
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type == 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type == 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ];
    const {pathname} = this.props.location;

    console.log(pathname);
    return (
      <div>
        <NavBar className="fixd-header" mode="dard">
          {navList.find(v => v.path === pathname).title}
        </NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            {
              navList.map((item) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                )
              })
            }
          </Switch>
        </div>
        <NavLinkBar data={navList}/>
      </div>
    );
  }
}

export default Dashboard;
