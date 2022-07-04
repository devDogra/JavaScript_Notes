let btn = document.querySelector("[data-form-btn]");

function printName(name) {
    console.log(this);
    console.log(name + "is cool");
}

btn.addEventListener("click", printName);

btn.addEventListener("click", (e) => {
    console.log(this);
    console.log("devar is cool");
});

// 'this' represents the current scope
// (reps the instance of an object that a function is bound to)
// for arrow funcs, this works as you'd expect. an arrow function defined in the global scope has the 'window' value for the this, as it's the global obj
// (retains the value of the enclosing lexical context's <this>)
// for normal funcs, this has the value of the scope the functioni is CALLED FROM!
