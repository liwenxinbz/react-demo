
const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';


// 通过reducer建立
// 根据老的状态和action 生成新的state
export function counter(state = 10, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_GUN:
            return state - 1;
        default:
            return state;
    }
}


// action
export function addGUN() {
    return {type: ADD_GUN};
}

export function removeGUN() {
    return {type: REMOVE_GUN};
}

export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGUN());
        }, 2000);
    }
}