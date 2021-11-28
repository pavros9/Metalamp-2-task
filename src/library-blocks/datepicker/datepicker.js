import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

let button = {
  content: "Применить",
  className: "custom-button-classname",
  onClick: (dp) => {
    // let date = new Date("2021-07-26");
    // dp.selectDate(date);
    // dp.setViewDate(date);
  },
};

const inputsMainWithDate = document.querySelectorAll(".input__main_withDatepicker");
const inputsWithDate = document.querySelectorAll(".input_withDatepicker");
const arrayInputsMainWithdate = Array.prototype.slice.call(inputsMainWithDate);
const arrayInputsWithdate = Array.prototype.slice.call(inputsWithDate);
const inputs = arrayInputsMainWithdate.concat(arrayInputsWithdate);

inputs.forEach((input) => {
  new AirDatepicker(input, {
    selectedDates: ["19.08.2019"],
    navTitles: {
      days: "<strong>MMMM yyyy</strong>",
    },
    range: true,
    buttons: ["clear", button],
  });
});
