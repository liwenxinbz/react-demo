import React from 'react';
import {NavBar, InputItem, WhiteSpace, TextareaItem, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AvaterSelecter from '../../component/AvaterSelecter';
import { updateInfo } from '../../redux/user.redux';


@connect(
    state => state.user,
    {updateInfo}
)
class GeniusInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            avatar: '',
        };
    }

    onChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.redirectTo ? (
                        <Redirect to={this.props.redirectTo}/>
                    ) : null
                }
                <NavBar mode="dark">
                    牛人信息页面
                </NavBar>
                <AvaterSelecter
                    selectAvatar={avatar => {
                        this.setState({
                            avatar
                        })
                    }}
                />
                <WhiteSpace/>
                <InputItem onChange={v => this.onChange('title', v)}>
                    求职岗位
                </InputItem>
                <WhiteSpace/>
                <TextareaItem
                    onChange={v => this.onChange('desc', v)}
                    title="个人简介"
                    rows={3}
                />
                <Button type="primary" onClick={f=> {
                    this.props.updateInfo(this.state);
                }}>
                    保存
                </Button>
            </div>
        );
    }

}

export default GeniusInfo;
