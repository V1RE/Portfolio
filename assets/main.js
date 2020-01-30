$(document).ready(() => {
  initPage();

  $(window).scroll(() => {
    setHeaderTop();
    parrallaxCard();
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
  } else {
    header.removeClass("show scrolling").css({ top: "" });
  }
};

const parrallaxCard = () => {
  let introCard = $("#home #intro .card");
  let scrollTop = $(window).scrollTop();

  introCard.css("transform", `translateY(${scrollTop * 0.3}px)`);
};

const initPage = () => {
  setHeaderTop();
  parrallaxCard();
};
