/* -------------------------------------------------------------------------- */
/*                               PROMISE MODEL 1                              */
/* -------------------------------------------------------------------------- */

//  PROGRAM, I promise to run the arrow function here
// const promise = new Promise((resolve, reject) => {
//     // eg: done=== able to fetch data in time
//     let done = true;
//     if (done) resolve("HEY PROGRAM, I WAS ABLE TO FULFILL PROMISE");
//     else reject("HEY PROGRAM, I WAS **NOT** ABLE TO FULFILL PROMISE");
// });

// function onFulfilled() {
//     console.log("GOOD JOB, PROMISE");
// }
// function onRejected() {
//     console.log("ITS OKAY, HAPPENS");
// }
// promise.then(onFulfilled, onRejected);

/* -------------------------------------------------------------------------- */
/*                               PROMISE MODEL 2                             */
/* -------------------------------------------------------------------------- */

// const promise = new Promise((resolve, reject) => {
//     let ableToFulfill = false;

//     if (ableToFulfill)
//         resolve("PROMISE: HEY PROGRAM, I WAS ABLE TO FULFILL PROMISE");
//     else reject("PROMISE: HEY PROGRAM, I WAS **NOT** ABLE TO FULFILL PROMISE");
// });

// // when promise reports to us, then
// promise.then(
//     // if it signalled resolution/success, take its msg and do:
//     (resolveArg) => {
//         console.log(resolveArg);
//         console.log("PROGRAM: GOOD JOB, PROMISE");
//     },
//     // func to run if promise reject()s
//     (rejectArg) => {
//         console.log(rejectArg);
//         console.log("PROGRAM: ITS FINE, HAPPENS");
//     }
// );

/* -------------------------------------------------------------------------- */
/*                               PROMISE MODEL 3                              */
/* -------------------------------------------------------------------------- */

const promise = new Promise((resolve, reject) => {
    console.log(
        "PROMISE: hey program, i promise to find the capital no matter what. ill report back to u asap"
    );

    let fulfilled = true;
    // say we fetched the capital of india
    let capital = "delhi";
    if (!fulfilled) resolve(capital); // line 2
    else reject("PROMISE: hey program im sorry i couldnt do it");
});

promise
    // these are essentially the definitions of resolve and reject functions

    // handles the case when promise is fulfilled
    // if promise succeeds, do this
    .then((resolveArg) => {
        // this function is essentially resolve()'s definition, cuz it runs
        // when the promise is fulfilled (line 2)
        console.log(`PROMISE: I found out the capital. It's ${resolveArg}`);
        console.log("PROGRAM: i knew u could do it");
    })
    // catches all errors and rejects
    // if promise fails (EITHER VIA REJECT, OR ANY ERROR IN GENERAL!!), do this
    .catch((rejectMsg) => {
        // this function is essentially reject()'s definition
        console.error(rejectMsg);
        console.log("PROGRAM: its fine");
    });

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
