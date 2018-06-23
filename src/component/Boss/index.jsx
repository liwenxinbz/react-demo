import React from 'react';
import axios from 'axios';

import UserCard from '../../component/UserCard';



class Boss extends React.Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios.get('/user/list?type=genius').then((res) => {

      console.log(res);
      if (res.data.code === 0) {
        this.setState({
          data: res.data.data
        })
      }
    });
  }

  render() {
    console.log(this.state.data);
    return <UserCard userlist={this.props.userlist}/>

  }

}

export default Boss;
