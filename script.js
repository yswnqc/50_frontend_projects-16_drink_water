const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector(".liters");
const percentage = document.querySelector(".percentage");
const remained = document.querySelector(".remained");

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".full").length;
  const totalCups = smallCups.length;

  if (fullCups == totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
  }
  percentage.style.height = `${(fullCups / totalCups) * 100}%`;
  percentage.innerText =
    fullCups == 0 ? "" : `${(fullCups / totalCups) * 100}%`;
  liters.innerText = `${(2000 - 250 * fullCups) / 1000}L`;
};

const highlightCups = (index) => {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
};

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highlightCups(index);
  });
});
