let menu = document.getElementById("icon_1");
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    // menu.style.backgroundColor.var(...green);
    navbar.classList.toggle('active');
    
}
// let section = document.querySelectorAll("section");
// let navlinks =  document.querySelectorAll("full_navbar .navbar a");


window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    // section.forEach(sec=>{

    //   let top =window.scrollY;
    //   let hight =sec.offsetHeight;
    //   let offset =sec.offsetTop - 150;
    //   let id =sec.getAttribute('id');

    //   if(top=> offset && top < offset + hight )
    //   navlinks.forEach(links=>{
    //     links.classList.remove("active_5");
       
    //     document.querySelector(".full_navbar .navbar a[href*="+id+"]").classList.add("active_5");
    //   });

    // });

}




const li =document.querySelectorAll(".active_5") ;
const sec =document.querySelectorAll("section") ;


function activemenu(){
  let len=sec.length
  while(--len&& window.scrollY +100< sec[len].offsetTop ){}
  li.forEach(ltx => ltx.classList.remove("active_5"));
  li[len].classList.add("active_5");
}
activemenu();
window.addEventListener("scroll",activemenu);

document.querySelector('#icon_2').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active1');

}
document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active1');

}






var swiper = new Swiper(".home_slider", {
  spaceBetween: 30,
  cssMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// vSBll;bllllllllflllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
var swiper = new Swiper(".review_slider", {
  cssMode: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // loop:true,
  breakpoints:{
    0:{
      slidesPerView: 1,

    },
    680:{
      slidesPerView: 2,

    },
    786:{
      slidesPerView: 2,

    },
    1024:{
      slidesPerView: 3,

    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});