import "./button.scss";

// const
window.addEventListener("click", function (event) {
  let target = event.target;

  if (target.matches(".button_with-like")) {
    target.classList.toggle("button_with-like_active");
    let buttonText = target.querySelector(".button__text");
    let oldValue = buttonText.innerHTML;
    if (target.matches(".button_with-like_active")) {
      buttonText.innerHTML = Number(oldValue) + 1;
    } else {
      buttonText.innerHTML = Number(oldValue) - 1;
    }
  }
  if (target.parentNode.matches(".button_with-like")) {
    target.parentNode.classList.toggle("button_with-like_active");

    let buttonText = target.parentNode.querySelector(".button__text");
    let oldValue = buttonText.innerHTML;

    if (target.parentNode.matches(".button_with-like_active")) {
      buttonText.innerHTML = Number(oldValue) + 1;
    } else {
      buttonText.innerHTML = Number(oldValue) - 1;
    }
  }
});

// надо потом пофиксить
