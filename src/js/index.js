import "./import/modules";
import "./import/slick.min.js";
import $ from "jquery";
(function() {
  // Elements UI
  const header = document.querySelector(".header");
  const inputName = document.querySelector(".input-name");
  const inputTel = document.querySelector(".input-tel");
  const inputCommit = document.querySelector(".input-commit");
  const labelName = document.querySelector(".label-name");
  const labelTel = document.querySelector(".label-tel");
  const labelCommit = document.querySelector(".label-commit");
  const headerBtnMenu = document.querySelector(".header__btn-menu");
  const headerMenuNavigation = document.querySelector(".header__navigation");
  // Events
  header.addEventListener("mousemove", parallax);
  inputName.addEventListener("click", onInputNameClick);
  inputTel.addEventListener("click", onInputTelClick);
  inputCommit.addEventListener("click", onInputCommitClick);
  headerBtnMenu.addEventListener("click", onHeaderBtnMenuClick);

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
    labelName.classList.add("label-top");
  }
  function onInputTelClick() {
    labelTel.classList.add("label-top");
  }
  function onInputCommitClick() {
    labelCommit.classList.add("label-top");
  }

  //Burger menu
  function onHeaderBtnMenuClick() {
    headerBtnMenu.classList.toggle("burger");
    headerMenuNavigation.classList.toggle("menu_open_state");
  }
})();

$(".reviews__slider").slick({
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  slidesToShow: 1,
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  infinite: false
});
$("#video__play").click(function() {
  var dataYoutube = $(this)
    .parents(".js-video")
    .attr("data-youtube");
  $(this)
    .parents(".js-video")
    .html(
      '<iframe src="https://www.youtube.com/embed/' +
        dataYoutube +
        '?autoplay=1" frameborder="0" allowfullscreen></iframe>'
    );
});
