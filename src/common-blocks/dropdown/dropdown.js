import "./dropdown.scss";
document.addEventListener("DOMContentLoaded", () =>
  window.addEventListener("click", function (event) {
    let target = event.target;
    console.log(target);
    if (target.matches(".dropdown__main")) {
      target.closest(".dropdown_").classList.toggle("show");
    }
  })
);
