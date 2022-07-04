const data_btn = document.querySelector("[data-form-btn]");

const dataInput = document.querySelector("input");

dataInput.addEventListener("input", (e) => {
    console.log(" U JUS TYPE");
});

dataInput.addEventListener("input", (e) => {
    if (e.target.value === "") {
        console.log("EMPTYd ");
        console.log(e.target);
    }
});

data_btn.addEventListener("click", (e) => {
    e.preventDefault();
});

window.addEventListener("resize", (e) => {
    console.log("Im being resized");
});

// ? EVENT TYPES:
// resize, input, click, focus, mouseEnter, mouseExit, mouseOver

/*

e is the event object, which represents this event.
e.target is the thing that causes this event, in this case it would be <elementSelected>



! elemmentSelected.addEventListener("event", (e) => {
!     // event handler goes here
! });

*/
