let arr = [10, 20, 30, 40, 50];

/////////////////////// MAP ///////////////////////

// for el x at idx i in the array a, run slash on it and push it in the *new* array
function slash(x, i, a) {
    return x / 10;
}
arr.map(slash);

let b = arr.map((x) => x / 10);

// map creates a new array and maps the els of the old arr to the new one
// according to the function we give to it
console.log(arr.map(slash));
console.log(arr);
console.log(b);
