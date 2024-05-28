// addEventListener(a,b)
// a: event name
// b: function to call when event is triggered

// document.addEventListener('keydown', function () {
//     console.log("key pressed");
// });

// document.addEventListener('keyup', function () {
//     console.log("key released");
// });

const key = document.querySelector("#key");
const code = document.querySelector("#code");
const keyCode = document.querySelector("#key-code");

document.addEventListener('keydown', function (event) {
    // alert when user press k button  
    if (event.key === "k") {
        alert("You pressed k button");
    }
    console.log(event);
    key.innerText = event.key
    code.innerText = event.code
    keyCode.innerText = event.keyCode
});