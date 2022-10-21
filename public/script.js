const optionBtns = [...document.querySelectorAll(".rating-option-btn")];
const clientRate = document.querySelector(".client-rate");
const ratingTxt = document.querySelector(".ratingTxt");
const submitBtn = document.querySelector(".submit-btn");

let optionNumber = 0;

function getOptionNumber(x) {
  optionNumber = Number(x.at(-1)) - 1;
  let optionBtn = optionBtns[optionNumber];
  optionBtns.forEach((clientOption) => {
    if (clientOption === optionBtn) {
      clientOption.style.color = "#fdfdff";
      clientOption.style.backgroundColor = "#fc7613";
      clientOption.style.outline = "none";
      ratingTxt.value = String(optionNumber + 1);
      submitBtn.disabled = false;
    } else {
      clientOption.style.color = "#9097a1";
      clientOption.style.backgroundColor = "#24303c";
      clientOption.style.outline = "none";
    }
  });
}
