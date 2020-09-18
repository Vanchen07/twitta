import { getBurps, writeBurp, deleteBurp } from '../util/burp_api_util';

export const RECEIVE_BURPS = "RECEIVE_BURPS";
export const RECEIVE_BURP = "RECEIVE_BURP";
export const REMOVE_BURP = "REMOVE_BURP";

export const receiveBurps = burps => ({
    type: RECEIVE_BURPS,
    burps
});

export const receiveBurp = burp => ({
    type: RECEIVE_BURP,
    burp
});

export const destroyBurp = (burp) => ({
    type: REMOVE_BURP,
    burp
});

// export const receiveUserBurps = burps => ({
//     type: RECEIVE_USER_BURPS,
//     burps
// });

// export const receiveNewBurp = burp => ({
//     type: RECEIVE_NEW_BURP,
//     burp
// })


export const fetchBurps = () => dispatch => (
    getBurps()
        .then(burps => dispatch(receiveBurps(burps)))
        .catch(err => console.log(err))
);

// export const fetchUserBurps = id => dispatch => (
//     getUserBurps(id)
//         .then(burps => dispatch(receiveUserBurps(burps)))
//         .catch(err => console.log(err))
// );

export const composeBurp = data => dispatch => (
    writeBurp(data)
        .then(burp => dispatch(receiveBurp(burp)))
        .catch(err => console.log(err))
);

export const removeBurp = (id) => (dispatch) => (
    deleteBurp(id)
        .then(burp => dispatch(destroyBurp(burp)))
        .catch(err => console.log(err))
);