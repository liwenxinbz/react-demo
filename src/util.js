export function getRedirectPath(type, avatar) {
//    根据用户信息  返回跳转地址

    console.log(type, avatar, 1);
    let url = (type === 'boss') ? '/boss' : '/genius';

    if (!avatar) {
        url += 'info';
    }

    return url;
}
