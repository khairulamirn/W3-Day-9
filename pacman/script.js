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

// get the width and height of the container and pacman
// The offsetWidth  and offsetHeight property returns the viewable width of an element (in pixels) including padding, border and scrollbar, but not the margin.
// The offsetWidth and offsetHeight property is read-only.
const containerWidth = document.querySelector("#gameField").offsetWidth;
const containerHeight = document.querySelector("#gameField").offsetHeight;
const pacmanWidth = pacman.offsetWidth;
const pacmanHeight = pacman.offsetHeight;

function moveRight() {
  // assing pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(1)";
  // default value || (parseInt change to integer)
  const currentRight = parseInt(pacman.style.left || 0);
  const newRight = currentRight + 50; 
  // ensure pacman does not move outside the right boundary
  if (newRight + pacmanWidth <= containerWidth) {
    pacman.style.left = newRight + "px";
  } else {
    pacman.style.left = (containerWidth - pacmanWidth) + "px";
  };
  console.log("Right", currentRight, newRight, pacmanWidth, containerWidth);
}; 

function moveLeft() {
  // assing pacman styling
  pacman.style.transform = "rotate(0deg) scaleX(-1)";
  // default value || (parseInt change to integer)
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft - 50;
  containerWidth.offsetWidth;
  if (newLeft >= 0) {
    pacman.style.left = newLeft + "px";
  } else {
    pacman.style.left = 0 + "px";
  };
  console.log ("Left", currentLeft, newLeft);
};

function moveUp() {
  // assing pacman styling
  pacman.style.transform = "rotate(-90deg) scaleX(1)";
  // default value || (parseInt change to integer)
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop - 50;
  if (newTop >= 0) {
    pacman.style.top = newTop + "px";
  } else {
  pacman.style.top = 0 + "px";
  };
  console.log ("Up", currentTop, newTop);
};

function moveDown() {
  // assing pacman styling
  pacman.style.transform = "rotate(90deg) scaleX(1)";
  // default value || (parseInt change to integer)
  const currentDown = parseInt(pacman.style.top || 0);
  const newDown = currentDown + 50;
  // ensure the pacman does not move outside the bottom boundary
  if (newDown + pacmanHeight <= containerHeight) {
    pacman.style.top = newDown + "px";
  } else {
    pacman.style.top = (containerHeight - pacmanHeight) + "px";
  };
  console.log("Down", currentDown, newDown, pacmanHeight, containerHeight);
}; 

// detect keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveRight();
  } else if (event.key === "ArrowLeft") {
    moveLeft();
  } else if (event.key === "ArrowUp") {
    moveUp();
  } else if (event.key === "ArrowDown") {
    moveDown();
  }
});

// assign action to the button
rightKey.addEventListener("click", moveRight);
leftKey.addEventListener("click", moveLeft);
upKey.addEventListener("click", moveUp);
downKey.addEventListener("click", moveDown);


// assignment for pacman
// 1. assign action to the button to execute the pacman movement similar to the keypress
// 2. pacman should move with 50px distant in the direction of the button or keypress
// BONUS - pacman should not move outside the game area