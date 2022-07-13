/**
 * new Promise(resolve, reject) takes in 2 args, which are funcs
 * (funcs only supposed to take 1 arg);
 * that are supposed to deal with the success and any failure cases.
 * the promise does its thing, and if it fails or succeeds it just calls the
 * appropriate function.
 *
 * Now, where would we find the definitions of these successdealers and failuredealers?
 * we pass them into promise via promise.then( ()=>{} ).catch( ()=>{} )
 */

// gets a promise to wait for 2 secs then run resolve()
function getTimeoutPromise() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
    return promise;
}

// this is a promise to wait for 200ms and then execute the func inside .then()
// then get another promise that waits for 200ms and then execute the func inside ITS .then()

// 'promise' promises to wait for 200ms then do the inside of .then(..)
getTimeoutPromise()
    .then(() => {
        console.log(1);
        return getTimeoutPromise();
    })
    .then(() => {
        console.log(2);
        return getTimeoutPromise();
    })
    .then(() => {
        console.log(3);
    });
