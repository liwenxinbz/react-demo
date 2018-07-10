import React from 'react';
import {withRouter} from 'react-router-dom';
import {List, InputItem} from 'antd-mobile';
import {connect} from 'react-redux';
import {getMsgList} from "../../redux/chat.redux";
//
// import io from 'socket.io-client';
// const socket = io('ws://localhost:9093');

@withRouter

@connect(
  state => state,
  {getMsgList}
)
class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: []
    };
  }

  componentDidMount() {
    this.props.getMsgList();
    // socket.on('recvmsg', (data) => {
    //   this.setState({
    //     msg: [...this.state.msg, data.text]
    //   })
    // });
  }

  handleSubmit = () => {
    // socket.emit('sendmsg',{text:this.state.text});
    // this.setState({text:''});
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          {
            this.state.msg.map((v) => {
              return <p key={v}>{v}</p>
            })
          }
        </div>
        <div className="stick-footer">
          chat with :{this.props.match.params.user}
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => {
                this.setState({text: v});
              }}
              extra={<span onClick={this.handleSubmit}>发送</span>}
            />
          </List>
        </div>
      </div>
    );
  }
}

export default Chat;
