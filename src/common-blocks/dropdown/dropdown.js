import "./dropdown.scss";
window.onload = function () {
  window.addEventListener("click", function (event) {
    let target = event.target;
    if (target.matches(".dropdown__title") || target.matches(".dropdown__main")) {
      target.closest(".dropdown").classList.toggle("show");
    }
  });
};
