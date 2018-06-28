import React from 'react';
import {connect} from 'react-redux';
import {List, WhiteSpace, Result} from 'antd-mobile';


@connect(
  state => state
)
class User extends React.Component {

  render() {
    console.log(this.props.user);
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
              this.props.desc.split('\n').map(item => {
                return <List.Item.Brief key={item}>{item}</List.Item.Brief>
              })
            }
          </List.Item>
        </List>
      </div>
    ) : null;

  }

}

export default User;
