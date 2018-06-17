

import axios from 'axios';
import {getRedirectPath} from '../util';


const ERROR_MSG = 'ERROR_MSG';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';

// reducer

const initState = {
    redirectTo: '',
    isAuth: false,
    user: '',
    pwd: '',
    type: '',
    msg: '',
};

function errorMsg(msg) {
    return {msg, type: ERROR_MSG};
}

function authSuccess(data) {
    return {type: AUTH_SUCCESS, payload: data};
}

export function user(state = initState, action) {
    switch (action.type) {
        case ERROR_MSG:
            return {
                ...state,
                isAuth: false,
                msg: action.msg,
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
                msg: action.msg,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            };
        case LOAD_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export function updateInfo(data) {

    return dispatch=> {
        axios.post('/user/update', {data}).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }

}

export function loadData(userinfo) {
    return {type: LOAD_DATA, payload: userinfo}
}

export function login({user, pwd, type}) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入');
    }
    return dispatch => {
        axios.post('user/login', {user, pwd}).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        });
    }
}

export function register({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入');
    }

    if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不同');
    }

    return dispatch => {
        axios.post('/user/register', {user, pwd, type}).then((res) => {
            if (res.status === 200 && res.data.code ===0) {
                dispatch(authSuccess({user, pwd, type}));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    };

}