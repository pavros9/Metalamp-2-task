import "./input.scss";

import Inputmask from "inputmask";

document.addEventListener("DOMContentLoaded", () =>
  Inputmask({
    oncomplete: function () {
      alert("inputmask complete");
    },
    inputFormat: "dd.mm.yyyy",
    placeholder: "_",
  }).mask(document.querySelectorAll("input"))
);
