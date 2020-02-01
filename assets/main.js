$(document).ready(() => {
  initPage();

  $(window).scroll(() => {
    setHeaderTop();
    parrallaxCard();
  });

  $("#intro .card .profilepicture").click(() => {
    bigPicture();
  });

  $("#theme-switch").change(e => {
    switchTheme(e);
  });
});

const setHeaderTop = () => {
  let header = $("#home header");
  let headerHeight = header.height() + 6;
  let introHeight = $("#intro").height();
  let scrollTop = $(window).scrollTop();
  let headerTop = scrollTop - (introHeight - headerHeight);

  if (
    scrollTop >= introHeight - headerHeight * 2 &&
    scrollTop <= introHeight - headerHeight
  ) {
    header.addClass("show scrolling").css({ top: headerTop });
  } else if (scrollTop >= introHeight - headerHeight * 2) {
    header
      .addClass("show")
      .removeClass("scrolling")
      .css({ top: "" });
    closePicture();
  } else {
    header.removeClass("show scrolling").css({ top: "" });
  }
};

const parrallaxCard = () => {
  let introCard = $("#home #intro .card");
  let scrollTop = $(window).scrollTop();

  introCard.css("transform", `translateY(${scrollTop * 0.3}px)`);
};

const setCuryear = () => {
  let curyear = $("footer .curyear");
  let curdate = new Date().getFullYear();

  curyear.text(curdate);
};

const bigPicture = () => {
  $("#intro .card").toggleClass("bigpicture");
};

const closePicture = () => {
  $("#intro .card").removeClass("bigpicture");
};

const detectTheme = () => {
  let theme = "light"; //default to light

  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      theme = "dark";
    }
  } else if (!window.matchMedia) {
    theme = "light";
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }

  $("html").attr("data-theme", theme);

  if (theme == "dark") {
    toggleSwitch.prop("checked", true);
  }
};

const switchTheme = e => {
  $("html").addClass("transition");

  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    $("html").attr("data-theme", "dark");
    toggleSwitch.prop("checked", true);
  } else {
    localStorage.setItem("theme", "light");
    $("html").attr("data-theme", "light");
    toggleSwitch.prop("checked", false);
  }

  setTimeout(() => {
    $("html").removeClass("transition");
  }, 750);
};

const toggleSwitch = $("#checkbox_theme");

const initPage = () => {
  feather.replace();
  detectTheme();
  setHeaderTop();
  parrallaxCard();
  setCuryear();
};
