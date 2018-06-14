import React from 'react';
import {connect} from 'react-redux';
import {addGUN, removeGUN, addGunAsync} from './index.redux';

class App extends React.Component {

    render() {
        const {num, addGUN, removeGUN, addGunAsync} = this.props;
        return (
            <div>
                <h2>{`现在有机枪${num}把`}</h2>
                <button onClick={addGUN}>申请武器</button>
                <button onClick={removeGUN}>上交武器</button>
                <button onClick={addGunAsync}>拖两天再给</button>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return {num: state}
};

const actionCreators = {addGUN, removeGUN, addGunAsync};

App = connect(mapStatetoProps, actionCreators)(App);

export default App;
