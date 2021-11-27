import "./input.scss";

import Inputmask from "inputmask";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

document.addEventListener("DOMContentLoaded", () =>
  Inputmask({
    // oncomplete: function () {
    //   alert("inputmask complete");
    // },
    inputFormat: "dd.mm.yyyy",
    placeholder: "_",
  }).mask(document.querySelectorAll("input"))
);

const ratings = document.querySelectorAll(".rating");

if (ratings.length > 0) {
  initRatings();
}

// Основная функция
function initRatings() {
  let ratingActive, ratingValue;

  // "Бегаем" по всем рейтингам на странице
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }
  // Инициализируем конкретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains("rating_set")) {
      setRating(rating);
    }
  }

  // Инициализация переменных

  function initRatingVars(rating) {
    ratingActive = rating.querySelector(".rating__active");
    ratingValue = 4;
  }

  // Изменяем ширину активных звезд

  function setRatingActiveWidth(index = ratingValue) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // Возможность указывать оценку

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll(".rating__item");

    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];

      ratingItem.addEventListener("mouseenter", function (e) {
        // Обновление переменных
        initRatingVars(rating);

        // Обновление активных звезд
        setRatingActiveWidth(ratingItem.value);
      });

      ratingItem.addEventListener("mouseleave", function (e) {
        // Обновление активных звезд
        setRatingActiveWidth();
      });

      // Для touchscreen
      ratingItem.addEventListener("click", function (e) {
        initRatingVars(rating);
      });
    }
  }

  // DatePicker
  let button = {
    content: "Применить",
    className: "custom-button-classname",
    onClick: (dp) => {
      // let date = new Date("2021-07-26");
      // dp.selectDate(date);
      // dp.setViewDate(date);
    },
  };

  const inputsDatePicker = document.querySelectorAll(".input_withDatepicker");

  inputsDatePicker.forEach((input) => {
    new AirDatepicker(input, {
      selectedDates: [new Date()],
      navTitles: {
        days: "<strong>MMMM yyyy</strong>",
      },
      buttons: ["clear", button],
    });
  });

  // -/DatePicker
}
