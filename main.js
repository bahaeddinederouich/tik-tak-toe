let alldivs = document.querySelectorAll(".xoro");
let overelement = document.querySelector(".overlay");
let theWinner = document.querySelector(".winner");
let restartbutton = document.querySelector(".btn");
let drawoverlay = document.querySelector(".draw-overlay");
let drawbtn = document.querySelector(".drawbtn");

let i = 0;
alldivs.forEach(function (ele) {
  ele.addEventListener("click", function () {
    if (i % 2 === 0) {
      ele.innerHTML = "x";
      ele.dataset.choose = "x";
      ele.classList.add("x");
      check();
      draw(i);
    } else {
      ele.innerHTML = "o";
      ele.dataset.choose = "o";
      ele.classList.add("o");
      check();
      draw(i);
    }
    i++;
  });
});
function check() {
  if (
    alldivs[0].dataset.choose === alldivs[1].dataset.choose &&
    alldivs[0].dataset.choose === alldivs[2].dataset.choose &&
    alldivs[0].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[0].dataset.choose}'s`;
    overelement.classList.add("show");
  }
  ////
  if (
    alldivs[3].dataset.choose === alldivs[4].dataset.choose &&
    alldivs[3].dataset.choose === alldivs[5].dataset.choose &&
    alldivs[3].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[3].dataset.choose}'s`;
    overelement.classList.add("show");
  }
  ////
  if (
    alldivs[6].dataset.choose === alldivs[7].dataset.choose &&
    alldivs[6].dataset.choose === alldivs[8].dataset.choose &&
    alldivs[6].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[6].dataset.choose}'s`;
    overelement.classList.add("show");
  }
  ////
  if (
    alldivs[0].dataset.choose === alldivs[3].dataset.choose &&
    alldivs[0].dataset.choose === alldivs[6].dataset.choose &&
    alldivs[0].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[0].dataset.choose}'s`;
    overelement.classList.add("show");
  }
  ///////
  if (
    alldivs[1].dataset.choose === alldivs[4].dataset.choose &&
    alldivs[1].dataset.choose === alldivs[7].dataset.choose &&
    alldivs[1].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[1].dataset.choose}'s`;
    overelement.classList.add("show");
  }
  //////
  if (
    alldivs[2].dataset.choose === alldivs[5].dataset.choose &&
    alldivs[2].dataset.choose === alldivs[8].dataset.choose &&
    alldivs[2].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[2].dataset.choose}'s`;
    overelement.classList.add("show");
  }
  ////
  if (
    alldivs[0].dataset.choose === alldivs[4].dataset.choose &&
    alldivs[0].dataset.choose === alldivs[8].dataset.choose &&
    alldivs[0].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[0].dataset.choose}'s`;
    overelement.classList.add("show");
  }
  ///////
  if (
    alldivs[2].dataset.choose === alldivs[4].dataset.choose &&
    alldivs[2].dataset.choose === alldivs[6].dataset.choose &&
    alldivs[2].dataset.choose !== ""
  ) {
    theWinner.innerHTML = `${alldivs[2].dataset.choose}'s`;
    overelement.classList.add("show");
  }
}
restartbutton.onclick = function () {
  location.reload();
};

function draw(i) {
  if (i === 8) {
    drawoverlay.classList.add("yes");
  }
}
drawbtn.onclick = function () {
  location.reload();
};
