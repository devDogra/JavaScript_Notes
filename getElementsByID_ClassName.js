const idel = document.getElementById("div-id");

const classels = document.getElementsByClassName("div-class");

console.log(idel);

idel.style.color = "red";

console.log(classels);

//  classels is an HTML collection but not a JS array, so
classelsArray = Array.from(classels);

const colors = ["gold", "blue", "pink"];

classelsArray.forEach((div, idx) => {
    div.style.color = colors[idx];
});

classels[0].style.color = "brown";
