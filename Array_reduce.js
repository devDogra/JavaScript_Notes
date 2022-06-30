let arr = [1, 2, 3, 4, 5];

// reduce: takes as arg a function that takes in atleast 2 valus (1 accumulator, 1 the el itself)

function summer(sum, val) {
    return sum + val;
}

const b = arr.reduce(summer, 10);

console.log(b);

const c = arr.reduce((accumulator, el) => accumulator * el);

// count number of elems > 3, start counting from 0
function count_above_3(counter, val) {
    if (val > 3) {
        counter++;
    }
    return counter;
}
const d = arr.reduce(count_above_3, 0);

const e = arr.reduce((counter, val) => (val > 3 ? counter + 1 : counter), 0);

console.log(c);
console.log(d);
console.log(e);

const items = [
    { price: 10 },
    { price: 20 },
    { price: 14 },
    { price: 1 },
    { price: 6 },
 
];

// if you dont provide a starting initial value for currtotal, it picks that based on the datatype, so for objects thats WEIRD!!
// start currtotal at 0
// rules for accumulation is given by the func:
// it says: for each item, take the currtotal and add the item's price to it, and return that
const total = items.reduce((currtotal, item) => currtotal + item.price, 0);
console.log(total);
