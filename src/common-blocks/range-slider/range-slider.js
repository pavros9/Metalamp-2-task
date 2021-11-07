import * as noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import "./range-slider.scss";

const slider = document.querySelector("#slider");

noUiSlider.create(slider, {
  start: [5000, 10000],
  connect: true,
  range: {
    min: 0,
    max: 15000,
  },
});

const firstNumb = document.querySelector(".first-number");
const secondNumb = document.querySelector(".second-number");

slider.noUiSlider.on("update", function (values, handle) {
  var value = values[handle];

  if (handle) {
    secondNumb.innerHTML = Math.round(value) + "₽";
  } else {
    firstNumb.innerHTML = Math.round(value);
  }
});

firstNumb.addEventListener("change", function () {
  slider.noUiSlider.set([this.value, null]);
});

secondNumb.addEventListener("change", function () {
  slider.noUiSlider.set([null, this.value]);
});
