import React from 'react';
import UserCard from '../../component/UserCard';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';


@connect(
  state => state.chatUser,
  {getUserList}
)
class Genius extends React.Component {

  componentDidMount() {
    this.props.getUserList('boss');
  }

  render() {
    return (
      <UserCard userlist={this.props.userlist}/>
    );

  }

}

export default Genius;
