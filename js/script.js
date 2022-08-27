const $ = document;
let calcScrollValue = () => {
  let scrollProgress = $.querySelector(".progress");
  let pos = $.documentElement.scrollTop;
  let calcHeight =
    $.documentElement.scrollHeight -
    $.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    $.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#654efe ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;