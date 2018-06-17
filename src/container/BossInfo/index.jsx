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
class BossInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: '',
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
                    boss信息页面
                </NavBar>
                <AvaterSelecter
                    selectAvatar={imgname => {
                        this.setState({
                            imgname
                        })
                    }}
                />
                <WhiteSpace/>
                <InputItem onChange={v => this.onChange('title', v)}>
                    招聘职位
                </InputItem>
                <WhiteSpace/>
                <InputItem onChange={v => this.onChange('company', v)}>
                    公司名称
                </InputItem>
                <WhiteSpace/>
                <InputItem onChange={v => this.onChange('money', v)}>
                    职位薪资
                </InputItem>
                <WhiteSpace/>
                <TextareaItem
                    onChange={v => this.onChange('desc', v)}
                    title="职位要求"
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

export default BossInfo;
