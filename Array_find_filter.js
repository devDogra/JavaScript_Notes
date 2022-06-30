let arr = [10, 20, 30, 40, 50];

// for each x at idx i in a, if x satisfies x>20, put it in the new array

let b = arr.filter((x, i, a) => false);
let c = arr.filter((x) => x > 20);

console.log(arr);
console.log(b); 
console.log(c);

// FIND //
// for each x at i in a, if x satisfies the condn we've provided to it, stop looping and return (x, i) to us

// find the first el that satisfies being > than 30 and being at an idx >= 4
let d = arr.find((x, i) => x > 30 && i >= 4);
console.log(d);

let e = arr.find((x) => x == 20);
console.log(e);
