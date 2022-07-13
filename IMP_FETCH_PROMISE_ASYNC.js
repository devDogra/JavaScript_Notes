function print(x) {
    console.log(x);
}

// OK = success/fulfilled
/**
 * fetch in case of OK returns the pg
 * .json() in case of OK returns the json data
 */

// p is a promise to fetch the user data from this url
const p = fetch("https://jsonplaceholder.typicode.com/users");

// in case of success, take whatever value it returned back to us (we name it 'response')
// and do this function with it:
// the do = returning a promise to convert the response to json
p.then(function (response) {
    return response.json();
}).then(function (data) {
    // now take this conv2json promise,
    //and when it ends, take what it returns back to us (the json data)
    console.log(data.map((user) => user.name));
});

// same thing with async/await
// fine to do, even preferable to the above here cuz
// each step depends on the previous
async function getUsers() {
    // wait till the promise finishes and gives back its retval (response)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // then run:
    // wait till the   promise finishes
    const data = await response.json();
    // then run:
    console.log(data.map((user) => user.name));
}

getUsers();

/* -------------------------------------------------------------------------- */
/*                             NOTE ON ASYNC/AWAIT                            */
/* -------------------------------------------------------------------------- */
/**
 * Remember how async/await can be wrapped in a try/catch/finally block?
 * So that if any of the promises return through a reject() or any error happens
 * the execution jumps to the catch block, which takes that error/rejectmsg as its arg
 *
 *Now, if we fetch smth that doesnt exist, fetch doesnt return that thru reject() as an error,
 * it just gives back a 404 ERROR, which is not a "real" error, its
 * an expected error ( thru resolve() I presume)
 * whiuch is why it will allow the rest of the code
 * to run too instead of going to the catch() block
 * or if theres no catch block throwing an uncaught exception error
 *
 * So, if no catchblock, how to handle an error 404?
 * just check the response
 *
 * response.ok => bool
 * if (response.ok == false){
 *      console.log("FAILURE") // or smth
 * }
 *
 * CATCH BLOCK: stil a good idea in case
 * we get a real error cuz no internet cnctn or smth
 */
/* -------------------------------------------------------------------------- */
/*                                 EXPERIMENT                                 */
/* -------------------------------------------------------------------------- */

/**
 * if we try the below, itll fail. Cuz it does
 * the fetching and conversion from json
 * in parellel.
 * but that doesnt work cuz p2resp isnt instantaneous!
 */

// const p2resp = fetch("https://jsonplaceholder.typicode.com/users");
// const x = p2resp.then(function (resp) {
//     setTimeout(() => {
//         return resp.json();
//     }, 2000);
// });
// const y = x.then(function (xd) {
//     console.log(xd.map((user) => user.name));
// });
