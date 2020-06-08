//Get the button
var mybutton = document.getElementById("btnTop");
var buttonCall = document.getElementById("btnCall");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
    buttonCall.style.display = "block";
  } else {
    mybutton.style.display = "none";
    buttonCall.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function(){
  $('.selectpicker').selectpicker();
});