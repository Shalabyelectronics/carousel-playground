const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const carousalItems = document.querySelectorAll(".carousal-item");
const carousalContainer = document.querySelector(".carousal-container");
const carosalInnerParent = document.querySelector(".row");
const carousalNavContainer = document.querySelector(".carousal-nav");
let counter = 0;
nextBtn.addEventListener("click", () => {
  carousalScrollControl(1);
});
prevBtn.addEventListener("click", () => {
  carousalScrollControl(-1);
});

function carousalScrollControl(direction) {
  counter += direction;

  renderCarousal();
}

function updateCounter() {
  const numberOfShowingEle = Math.round(
    carousalContainer.getBoundingClientRect().width /
      carousalItems[0].getBoundingClientRect().width
  );

  if (counter > carousalItems.length - numberOfShowingEle) {
    counter = 0;
  } else if (counter < 0) {
    counter = carousalItems.length - numberOfShowingEle;
  }
  return numberOfShowingEle;
}

function renderCarousal() {
  const numberOfShowingElements = updateCounter();
  updateCarousalNavDots(numberOfShowingElements);
  let carosalItemWidth =
    counter * carousalItems[0].getBoundingClientRect().width;
  carosalInnerParent.style.transform = `translateX(-${carosalItemWidth}px)`;
}

function renderCarousalNavDots() {
  const numberOfShowingEle = updateCounter();
  const numberOfNavDots = Math.ceil(carousalItems.length / numberOfShowingEle);
  carousalNavContainer.innerHTML = "";
  for (let i = 0; i < numberOfNavDots; i++) {
    const dotEle = document.createElement("div");
    dotEle.classList.add("dot");
    dotEle.addEventListener("click", (e) => {
      counter = i * numberOfShowingEle;
      renderCarousal();
    });
    carousalNavContainer.append(dotEle);
  }
  const navsDots = document.querySelectorAll(".carousal-nav .dot");
  if (navsDots.length > 0) {
    renderCarousal();
  }
}
function updateCarousalNavDots(numberOfShowingElements) {
  const navsDotElements = document.querySelectorAll(".carousal-nav .dot");
  navsDotElements.forEach((element) => element.classList.remove("active"));
  navsDotElements[Math.round(counter / numberOfShowingElements)].classList.add(
    "active"
  );
}

renderCarousalNavDots();

window.addEventListener("resize", () => {
  renderCarousal();
  renderCarousalNavDots();
});
