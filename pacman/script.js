// pacman styling orientation
// right/default - transform: rotate(0deg) scaleX(1);
// down - transform: rotate(90deg) scaleX(1);
// up - transform: rotate(-90deg) scaleX(1);
// left - transform: rotate(0deg) scaleX(-1);

const pacman = document.querySelector("#pacman");
const upKey = document.querySelector("#up");
const leftKey = document.querySelector("#left");
const rightKey = document.querySelector("#right");
const downKey = document.querySelector("#down");

// detect keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    console.log("Right");
    //   assing pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(1)";
    // default value || (parseInt change to integer)
    const currentLeft = parseInt(pacman.style.left || 0);
    const newLeft = currentLeft + 50;
    pacman.style.left = newLeft + "px";
    console.log(currentLeft, newLeft);
  } else if (event.key === "ArrowLeft") {
    console.log("Left");
    //   assing pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(-1)";
    const currentLeft = parseInt(pacman.style.left || 0);
    const newLeft = currentLeft - 50;
    if (newLeft >= 0) {
      pacman.style.left = newLeft + "px";
    } else {
      pacman.style.left = 0 + "px";
    }
    pacman.style.left = newLeft + "px";
    console.log(currentLeft, newLeft);
  } else if (event.key === "ArrowUp") {
    console.log("Up");
    //   assing pacman styling
    pacman.style.transform = "rotate(-90deg) scaleX(1)";
    const currentTop = parseInt(pacman.style.top || 0);
    const newTop = currentTop - 50;
    pacman.style.top = newTop + "px";
    console.log(currentTop, newTop);
  } else if (event.key === "ArrowDown") {
    console.log("Down");
    //   assing pacman styling
    pacman.style.transform = "rotate(90deg) scaleX(1)";
    const currentTop = parseInt(pacman.style.top || 0);
    const newTop = currentTop + 50;
    pacman.style.top = newTop + "px";
    console.log(currentTop, newTop);
  }

});

rightKey.addEventListener("click", function () {
  let = pacman.style.transform = "rotate(0deg) scaleX(1)";
});

leftKey.addEventListener("click", function () {
  let = pacman.style.transform = "rotate(0deg) scaleX(-1)";
});

upKey.addEventListener("click", function () {
  let = pacman.style.transform = "rotate(-90deg) scaleX(1)";
});

downKey.addEventListener("click", function () {
  let = pacman.style.transform = "rotate(90deg) scaleX(1)";
});


// assignment for pacman
// 1. assign action to the button to execute the pacman movement similar to the keypress
// 2. pacman should move with 50px distant in the direction of the button or keypress
// BONUS - pacman should not move outside the game area