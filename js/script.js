
// NavBar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-menu").style.top = "0";
  } else {
    document.getElementById("main-menu").style.top = "-450px";
  }
  prevScrollpos = currentScrollPos;
}

// Footer Timer
var countDownDate = new Date("Feb 21, 2023 08:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
if(days < 10){
  days = "0" + days;
}
if(hours < 10){
  hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10){
    seconds = "0" + seconds;
}

  document.getElementById("d").innerHTML = days;
  document.getElementById("dd").innerHTML = "D";
  document.getElementById("h").innerHTML = hours;
  document.getElementById("hh").innerHTML = "H";
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("mm").innerHTML = "M";
  document.getElementById("s").innerHTML = seconds;
  document.getElementById("ss").innerHTML = "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("d").innerHTML = "";
    document.getElementById("dd").innerHTML = "Happening";
    document.getElementById("h").innerHTML = "";
    document.getElementById("hh").innerHTML = "";
    document.getElementById("m").innerHTML = "NOW"
    document.getElementById("mm").innerHTML = "";
    document.getElementById("s").innerHTML = ""
    document.getElementById("ss").innerHTML = "!";
  }
}, 1000);

// Fade Pictures
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
