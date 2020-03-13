import "./import/modules";
(function() {
  // Elements UI
  const header = document.querySelector(".header");
  const inputName = document.querySelector(".input-name");
  const inputTel = document.querySelector(".input-tel");
  const inputCommit = document.querySelector(".input-commit");
  const labelName = document.querySelector(".label-name");
  const labelTel = document.querySelector(".label-tel");
  const labelCommit = document.querySelector(".label-commit");
  // Events
  header.addEventListener("mousemove", parallax);
  inputName.addEventListener("click", onInputNameClick);
  inputTel.addEventListener("click", onInputTelClick);
  inputCommit.addEventListener("click", onInputCommitClick);

  // Parallax header
  function parallax(event) {
    const parallaxSelector = document.querySelector(
      ".header__parallax-background"
    );
    parallaxSelector.style.transform =
      "translate(" +
      event.clientX / 20 +
      "px" +
      "," +
      event.clientY / 20 +
      "px" +
      ")";
  }
  // Form contact label animation
  function onInputNameClick() {
    labelName.classList.add("lable-top");
  }
  function onInputTelClick() {
    labelTel.classList.add("lable-top");
  }
  function onInputCommitClick() {
    labelCommit.classList.add("lable-top");
  }
})();
