export const getUserBurps = (state) => {
    let allBurps = Object.values(state.burps);
    let userId = state.session.currentUser;
    let userBurps = [];
    
    allBurps.forEach( burp => {
        if (burp.user === userId) userBurps.push(burp);
    })

    return userBurps;
}