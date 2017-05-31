'use strict';

// vars for functions below

let aboutTab = document.querySelector(".svg-about-tab");
let about = document.querySelector(".about");
let aboutArrow = document.querySelector(".svg-about-tab-base svg polygon:nth-of-type(2)");
let aboutArrowDesktop = document.querySelector(".svg-about-tab-base-desktop svg polygon:nth-of-type(2)");
let contactMobileArrow = document.querySelector(".contact-btn-mobile svg");
let contactMobileBtn = document.querySelector(".contact-btn-mobile");
let contactMobileDropDown = document.querySelector(".contact-wrapper");
let position = 0;

// handle about section opening on click or hover depending on mobile or desktop
function aboutTabOpen(event){
  // highlight the mouseenter target
  about.style.height = "630px";
  $(".svg-about-tab-base-desktop").offset({top:"-60;"});
  aboutArrow.classList.remove("bounce-class");
  // aboutArrow.style.transform = 'rotateX(180deg)'
  aboutArrowDesktop.classList.remove("bounce-class");
}

// handle about section closing on click or hover depending on mobile or desktop
function aboutTabClose(event){
    // highlight the mouseenter target
    about.style.height = "0px";
    $(".svg-about-tab-base-desktop").offset({top:"0;"});
    aboutArrow.classList.add("bounce-class");
    aboutArrowDesktop.classList.add("bounce-class");
}

// handle about section opening on click mobile
function contactOpen(event){
  contactMobileDropDown.style.height = "400px";
  contactMobileArrow.classList.remove("bounce-class");
}

// handle about section closing on click mobile
function contactClose(event){
  contactMobileDropDown.style.height = "0px";
  contactMobileArrow.classList.add("bounce-class");
}

const clickOrHoverAbout = () => {
  if ($(window).width <= 770){
    $(aboutTab).on('click', aboutTabOpen);
    $(aboutTab).on('click', aboutTabClose)
  } else {
    $(aboutTab).on('mouseenter', aboutTabOpen);
    $(aboutTab).on('mouseleave', aboutTabClose);
  }
}

const clickOrHoverContact = () =>{
    $(contactMobileBtn).on('click', contactOpen)
    $(contactMobileDropDown).on('click', contactClose)
}

function nextSlide(){
    position -= 184;
    let leftStyle = position;
    $('.slide-container').css('left', leftStyle + 'px');
    if(position <= -1840){
      position = 0;
    }
}

function prevSlide(){
  $('.slide-container').css("left", "+=184px");
  if($('.slide-container').css("left") >= '0px'){
    $('.slide-container').css("left", "-1840px");
  }
}

const addHandlers = () => {
  $('.slideshow-next').on('click', nextSlide);
  $('.slideshow-previous').on('click', prevSlide);
}



module.exports = {
  addHandlers,
  clickOrHoverAbout,
  clickOrHoverContact,
}
