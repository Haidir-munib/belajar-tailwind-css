// navbar fixed

window.onscroll = function () {
     const header = document.querySelector ('header');
     const fixedNav = header.offsetTop;


     if (window.pageYOffset > fixedNav) {
          header.classList.add ('navbar-fixed');
     }
     else {
          header.classList.remove ('navbar-fixed');
     }
};

// hamburger
const hamburger = document.querySelector ('#hamburger');
  
 
hamburger.addEventListener ('click',function () {
     hamburger.classList.toggle('hamburger-active');
});

const navMenu = document.querySelector ('#nav-menu');

hamburger.addEventListener ('click',function  (){
navMenu.classList.toggle('hidden');
});