import React from 'react';
import {Card, WhiteSpace, WingBlank} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

@withRouter
class UserCard extends React.Component {

  static propTypes = {};

  handleClick(v) {
    this.props.history.push(`/chat/${v.user}`)
  }

  render() {
    const Body = Card.Body;
    return (
      <WingBlank>
        <WhiteSpace/>
        {
          this.props.userlist.map((v) => {
            return v.avatar ? (
              <Card
                key={v._id}
                onClick={() => this.handleClick(v)}
              >
                <Card.Header
                  title={v.user}
                  thumb={require(`../image/${v.avatar}.png`)}
                  extra={<span>{v.title}</span>}
                />
                <Body>
                {v.type === 'boss' ? <div>公司:{v.company}</div> : null}
                {
                  console.log(v)
                }
                {<pre>{v.desc}</pre>}
                {v.type === 'boss' ? <div>薪资:{v.money}</div> : null}
                </Body>
              </Card>
            ) : null
          })
        }
      </WingBlank>
    );
  }

}

export default UserCard;
