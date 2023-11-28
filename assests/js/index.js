document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        var currentNav = document.getElementsByClassName('activeted');
        if (currentNav.length > 0) {
          currentNav[0].classList.remove('activeted');
        }
        this.classList.add('activeted');
      });
    }
  });

  
  //...... BTN is Closed
 let closeBtn = document.getElementById("btnClose");
 closeBtn.style.display = "none";
 let menuOpen = false;
function closeMenuBtn() {
 let menuBtn = document.getElementById("btnMenu");

  if (menuOpen) {
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    menuOpen = false;
  } else {
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    menuOpen = true;
  }
}
//..........................Open Search Box Menu
let MenuSearch =false;
function SearchBox(){
  let searchBox = document.getElementById("btnSearch");
  let overlaySearch = document.getElementById("overlaySearch");
  if (MenuSearch){
  overlaySearch.style.height='100%';
  MenuSearch=false;
}else{
  overlaySearch.style.height='0%';
  MenuSearch=true;
}
}
var animationElement = document.getElementById('animationElement');
var angle=0;
function rotate() {
  angle+=Math.random()*(2-0.5)+0.5; 
  var radianAngle = (angle * Math.PI) / 180;
  var cosAngle = Math.cos(radianAngle);
  var sinAngle = Math.sin(radianAngle);

  var matrix = [
    cosAngle, sinAngle, -sinAngle, cosAngle, 539.3695678710938, 537.2374267578125
  ];

  animationElement.setAttribute('transform', 'matrix(' + matrix.join(',') + ')');

  if (angle <= 360) {
    // ادامه حرکت تا زمانی که زاویه ۳۶۰ نباشد
    requestAnimationFrame(rotate);
  } else {
    // تأخیر ۱۰ ثانیه
    setTimeout(function() {
      angle=0// تنظیم زاویه به مقدار اولیه
      rotate(); // شروع مجدد حرکت
    },2000);
  }
}
rotate();