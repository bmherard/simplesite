var backToTop = document.getElementById("backToTop");

// when user scrolls down 450px from top of page, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

// when user clicks on the button, scroll to top of pages
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}