// // Just slider 1
// function slideone() {
//   const imageList = document.querySelector(".image-list");
//   const prevBtn = document.querySelector(".prev-btn");
//   const nextBtn = document.querySelector(".next-btn");

//   prevBtn.addEventListener("click", () => {
//     imageList.scrollLeft -= 250;
//   });

//   nextBtn.addEventListener("click", () => {
//     imageList.scrollLeft += 250;
//   });
// }

// All slider
function slideAll() {
  const prevBtn = document.querySelectorAll(".prev-btn");
  const nextBtn = document.querySelectorAll(".next-btn");

  prevBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (i == 0) {
        e.nextElementSibling.scrollLeft -= 250;
      } else if (i == i) {
        e.nextElementSibling.scrollLeft -= 500;
      }
    });
  });

  nextBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (i == 0) {
        e.previousElementSibling.scrollLeft += 250;
      } else if (i == i) {
        e.previousElementSibling.scrollLeft += 500;
      }
    });
  });
}
slideAll();

function AutomaticSlide() {
  const imageList = document.querySelectorAll(".image-list.slide-three img");
  const numerOfImage = imageList.length;
  let slideNumber = 0;

  setInterval(() => {
    imageList.forEach((e) => e.classList.remove("active"));

    slideNumber++;
    if (slideNumber > numerOfImage - 1) {
      slideNumber = 0;
    }

    imageList[slideNumber].classList.add("active");
  }, 5000);
}
AutomaticSlide();
