let arr = [10, 20, 30, 40, 50];

// do any of the x in the array match the condn of being > 20?
const isadult = arr.some((x) => x > 20);
console.log(isadult);

const alladults = arr.every((x) => x > 20);
console.log(alladults);
