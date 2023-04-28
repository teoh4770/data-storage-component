const buttons = document.querySelectorAll(".container__btn");

// gelatin effect on the button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("gelatine");

    setTimeout(() => {
      button.classList.remove("gelatine");
    }, 500);
  });
});
