export const getUserBurps = (burps, ownerId) => {
    let allBurps = Object.values(burps);
    let userBurps = [];
    
    allBurps.forEach( burp => {
        if (burp.user === ownerId) userBurps.push(burp);
    })

    return userBurps;
}