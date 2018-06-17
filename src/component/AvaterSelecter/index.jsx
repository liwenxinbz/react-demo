import React from 'react';
import {NavBar, Grid, List} from 'antd-mobile';

class AvaterSelecter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            icon: ''
        };
    }

    render() {
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',')
                .map((item) => {
                    return{
                        icon: require(`../image/${item}.png`),
                        text: item
                    }
                });
        const gridHeader = this.state.text ? (
            <div>
                <span>已选择头像</span>
                <img style={{width: 20}} src={this.state.icon} alt=""/>
            </div>
        ) : <div>请选择头像</div>;
        return (
            <div>
                <List renderHeader={gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        onClick={elm=> {
                            this.setState(elm);
                            this.props.selectAvatar(elm.text);

                        }}
                    />
                </List>
            </div>
        );
    }

}

export default AvaterSelecter;
