const carouselItems = document.querySelectorAll(".carousel-item");
const carouselTabs = document.querySelectorAll(".carousel-tab");
let activeIndex = 0;

function setActive(index) {
  carouselItems[activeIndex].classList.remove("active");
  carouselItems[index].classList.add("active");
  carouselTabs[activeIndex].classList.remove("active");
  carouselTabs[index].classList.add("active");
  activeIndex = index;
}

carouselTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    setActive(index);
  });
});

setInterval(() => {
  let nextIndex = (activeIndex + 1) % carouselItems.length;
  setActive(nextIndex);
}, 6000);
