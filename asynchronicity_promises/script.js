/* --------------------- Usual add event listener stuff --------------------- */

// el.addEventListener(event, e => {
//     el2.addEventListener(event2, e => {
//         ...
//     })
// })

/* ------------------ New promise based add event listener ------------------ */

// delivers a promise to add a click event listener on the element we pass to it,
// and when a click happens, do resolve()
function PromiseToAddClickListener(element) {
    const promise = new Promise((resolve, reject) => {
        element.addEventListener("click", (e) => {
            resolve(e.target);
        });
    });

    // i promise to listen for any clicks, then do resolve()
    return promise;
}

const btn = document.querySelector("button");

// new!
PromiseToAddClickListener(btn)
    .then((resolveArg) => {
        resolveArg.style.backgroundColor = "green";
        return PromiseToAddClickListener(btn);
    })
    .then((resolveArg) => {
        resolveArg.style.backgroundColor = "pink";
        return PromiseToAddClickListener(btn);
    })
    .then((resolveArg) => {
        resolveArg.style.backgroundColor = "goldenrod";
        return PromiseToAddClickListener(btn);
    });

// usual
// btn.addEventListener("click", (e) => {
//     btn.style.backgroundColor = "green";
//     btn.addEventListener("click", (e) => {
//         btn.style.backgroundColor = "pink";
//         btn.addEventListener("click", (e) => {
//             btn.style.backgroundColor = "goldenrod";
//         });
//     });
// });
