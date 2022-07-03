const el = document.querySelector(".div-class");
el.style.color = "red";

const els = document.querySelectorAll("[div-attr].class-2");

const els2 = document.querySelectorAll(".div-class");
let els2_arr = Array.from(els2);

els2_arr.forEach((el) => {
    el.style.color = "pink";
});

//  Nodelists (which is whhat querySelectorAll returns) do have a forEach method. They dont have all the array methods though, like map.
colors = [
    "red",
    "gold",
    "green",
    "orange",
    "pink",
    "goldenrod",
    "brown",
    "lightgray",
];
const els3 = document.querySelectorAll("div");
els3.forEach((div, idx) => {
    div.style.color = colors[idx];
});
                    
