import React from 'react';

export default class App extends React.Component {

    render() {
        const store = this.props.store;
        const num = store.getState();
        const {addGUN, removeGUN, addGunAsync} = this.props
        return (
            <div>
                <h2>{`现在有机枪${num}把`}</h2>
                <button onClick={() => store.dispatch(addGUN())}>申请武器</button>
                <button onClick={() => store.dispatch(removeGUN())}>上交武器</button>
                <button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</button>
            </div>
        );
    }
}
