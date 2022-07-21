// navbar scroll. took a little refrence //
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
};

//slide-show
const images = document.querySelectorAll(".slide-item");
const totalImages = images.length;
let imagesNumber = 0;

document.querySelector(".prev-btn").addEventListener("click", moveBackward);
document.querySelector(".next-btn").addEventListener("click", moveForward);
// const nextBtn = document.querySelector(".next-btn");

function hideAll() {
  for (let image of images) {
    image.classList.remove("visible");
  }
}

function moveBackward() {
  hideAll();
  if (imagesNumber == 0) {
    imagesNumber = totalImages - 1;
  } else {
    imagesNumber--;
  }
  images[imagesNumber].classList.add("visible");
  //   console.log("prev slide");
}
function moveForward() {
  hideAll();
  if (imagesNumber == totalImages - 1) {
    imagesNumber = 0;
  } else {
    imagesNumber++;
  }
  images[imagesNumber].classList.add("visible");
}
