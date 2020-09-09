import { getBurps, getUserBurps, writeBurp, deleteBurp } from '../util/burp_api_util';

export const RECEIVE_BURPS = "RECEIVE_BURPS";
export const RECEIVE_BURP = "RECEIVE_BURP";
export const RECEIVE_USER_BURPS = "RECEIVE_USER_BURPS";
export const RECEIVE_NEW_BURP = "RECEIVE_NEW_BURP";

export const receiveBurps = burps => ({
    type: RECEIVE_BURPS,
    burps
});

export const receiveBurp = burp => ({
    type: RECEIVE_BURP,
    burp
});

export const receiveUserBurps = burps => ({
    type: RECEIVE_USER_BURPS,
    burps
});

export const receiveNewBurp = burp => ({
    type: RECEIVE_NEW_BURP,
    burp
})


export const fetchBurps = () => dispatch => (
    getBurps()
        .then(burps => dispatch(receiveBurps(burps)))
        .catch(err => console.log(err))
);

export const fetchUserBurps = id => dispatch => (
    getUserBurps(id)
        .then(burps => dispatch(receiveUserBurps(burps)))
        .catch(err => console.log(err))
);

export const composeBurp = data => dispatch => (
    writeBurp(data)
        .then(burp => dispatch(receiveNewBurp(burp)))
        .catch(err => console.log(err))
);

export const removeBurp = id => dispatch => (
    deleteBurp(id)
        .then((burp) => dispatch(receiveBurp(burp)))
        .catch(err => console.log(err))
);