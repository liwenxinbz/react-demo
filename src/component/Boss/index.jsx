import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {getUserList} from '../../redux/chatuser.redux';
import UserCard from '../../component/UserCard';


@connect(
  state => state.chatUser,
  {getUserList}
)
class Boss extends React.Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.props.getUserList('genius');
  }

  render() {
    console.log(this.props);
    return <UserCard userlist={this.props.userlist}/>

  }

}

export default Boss;
