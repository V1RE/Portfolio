$(document).ready(() => {
  initPage();

  $(window).scroll(() => {
    parrallaxCard();
  });

  $("#intro .card .profilepicture").click(() => {
    bigPicture();
  });

  $("#theme-switch").change(e => {
    switchTheme(e);
  });
});

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
  let theme = "light";

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
  parrallaxCard();
  setCuryear();
};
