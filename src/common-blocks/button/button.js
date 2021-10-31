import "./button.scss";

window.addEventListener("click", function (event) {
  let target = event.target;

  if (target.matches(".button__like")) {
    target.classList.toggle("button__like_active");
    if (target.matches(".button__like_active")) {
      let oldValue = target.innerHTML;
      target.innerHTML = Number(oldValue) + 1;
    } else {
      let oldValue = target.innerHTML;
      target.innerHTML = Number(oldValue) - 1;
    }
  }
});
