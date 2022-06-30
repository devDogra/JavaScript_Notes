let arr = [10, 20, 30, 40, 50];

/////////////////////// FOR EACH ///////////////////////

function Z(x, i, a) {
    console.log(x + " is at " + i + " in array: " + a);
}

// for each 'x' at index 'i' in the array 'a', run the function we've provided
function print(x, i, a) {
    console.log(a, i, x);
}
arr.forEach(print);
// **** NOTE ****: whatever function we provide gets called with the args (el, idx, array)!!!

// for each 'x' at index 'i' in the array 'a', run the function we've provided
arr.forEach(function (x, i, a) {
    console.log(x, i, a);
});

// for each 'x' at index 'i' in the array 'a', run the function Z
arr.forEach((x, i, a) => {
    Z(x, i, a);
});

arr.forEach((number, idx, arr) => {
    console.log(idx + ": " + number + " -----> " + arr);
});

////////////////////////////////////////////////////////
