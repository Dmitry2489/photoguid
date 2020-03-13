import "./import/modules";
(function() {
  // Elements UI
  const header = document.querySelector(".header");
  // Events
  header.addEventListener("mousemove", parallax);

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
})();
