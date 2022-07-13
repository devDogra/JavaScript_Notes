NEW PROMISE MENTAl MODEL
const p = new Promise(function(resolve, reject){
	if (...) resolve(xyz)
	else reject(abc)
})

// p is a promise to run the function we give to the promise. resolve(xyz) means basically that xyz is the return value in case of success, and abc is return value in case of error/fail

// promise p after running runs the function inside .then() in case of SUC and the one inside of .catch() in case of FAIL/ERROR
// this function gets 1 arg, which is the value that was returned by the promise
p.then(function(resolveArg){
	..... do stuff with resolveArg // xyz
}).catch(function(rejectArg){
	..... do stuff with the error msg OR general error
}).finally(function(){ // do whatever})
	
/*
* and what are promises used for? to promise to do stuff asyncly!. usually for stuff
* that takes a lot of time or we dunno whether itll happen OK or not
* 
*/
