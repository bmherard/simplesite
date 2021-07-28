var mybutton = document.getElementById("myBtn");

// when user scrolls down 300px from top of page, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// when user clicks on the button, scroll to top of pages
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}