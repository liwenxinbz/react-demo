import React from 'react';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';


const TabBarItem = TabBar.Item;
@withRouter
class NavLinkBar extends React.Component {

    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data.filter(v => !v.hide);
        const {pathname} = this.props.location;
        return (
            <TabBar>
                {
                    data.map((item) => {
                        return (
                            <TabBarItem
                                key={item.path}
                                title={item.text}
                                icon={{uri: require(`./img/${item.icon}.png`)}}
                                selectedIcon={{uri: require(`./img/${item.icon}-active.png`)}}
                                selected={pathname === item.path}
                                onPress={() => {
                                    this.props.history.push(item.path);
                                }}
                            />
                        );
                    })
                }
            </TabBar>
        );
    }

}

export default NavLinkBar;
