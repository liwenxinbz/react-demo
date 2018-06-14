import React, {Component} from 'react';
// import {Button} from 'antd-mobile';
// import logo from './logo.svg';
// import './App.css';
// import 'antd-mobile/dist/antd-mobile.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React111</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//           <Button type="primary">我是按钮</Button>
//       </div>
//     );
//   }
// }
//
// export default App;


export default class App extends Component {
    render() {
        const boss = '李云龙';
        return (
            <div>
                <h2>{boss}</h2>
                <Yiying 老大="张大毛"></Yiying>
                <Qibinglian laoda="宋德胜"/>
            </div>
        );
    }
}

function Qibinglian(props) {
    return <h2>骑兵连连长： {props.laoda}</h2>
}

class Yiying extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solders: ['胡子', '柱子', '王根生']
        };
    }

    addSolder = () => {
        this.setState({solders: [...this.state.solders, '新兵蛋子' + Math.random()]})
    };

    render() {
        return (
            <div>
                <h2>一营营长： {this.props.老大}</h2>
                <button onClick={this.addSolder}>新兵入伍</button>
                <ul>
                    {this.state.solders.map(v => {
                        return <li key={v}>{v}</li>;
                    })}
                </ul>
            </div>
        );
    }

}