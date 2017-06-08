'use strict';

// vars for functions below

let aboutTab = document.querySelector(".svg-about-tab");
let aboutTabBase = document.querySelector(".svg-about-tab-base");
let aboutTabBaseDesktop = document.querySelector(".svg-about-tab-base-desktop");
let about = document.querySelector(".about");
let aboutArrow = document.querySelector(".svg-about-tab-base svg polygon:nth-of-type(2)");
let aboutArrowDesktop = document.querySelector(".svg-about-tab-base-desktop svg polygon:nth-of-type(2)");
let contactMobileArrow = document.querySelector(".contact-btn-mobile svg");
let contactMobileBtn = document.querySelector(".contact-btn-mobile");
let contactMobileDropDown = document.querySelector(".contact-wrapper");
let position = 0;

// const displayOne = () => {
//   $('.svg-about-tab-base').css('top', '10px');
//   $('.about').css('height', '630px');
// }

// handle about section opening on click or hover depending on mobile or desktop
function aboutTabOpen(event){
  // highlight the mouseenter target
  about.style.height = "630px";
  aboutArrow.classList.remove("bounce-class");
  aboutArrowDesktop.classList.remove("bounce-class");

  if($(window).width() >= 450 && $(window).width() <= 1100 ){
    $(aboutTabBase).css("top", "-105px")
  } else if($(window).width() <= 450){
    $(aboutTabBase).css("top", "-80px")
  } else {
    $(aboutTabBaseDesktop).css("top", "-75px")
    $(aboutTabBaseDesktop).css("top", "-75px")
  }
}

// handle about section closing on click or hover depending on mobile or desktop
function aboutTabClose(event){
    // highlight the mouseenter target
    about.style.height = "0px";
    aboutArrow.classList.add("bounce-class");
    aboutArrowDesktop.classList.add("bounce-class");
    if($(window).width() >= 450 && $(window).width() <= 1100 ){
      $(aboutTabBase).css("top", "-75px")
    } else if($(window).width() <= 450){
      $(aboutTabBase).css("top", "-10px")
    } else {
      $(aboutTabBaseDesktop).css("top", "5px")
    }
}

const clickOrHoverAbout = () => {
  if ($(window).width() <= 1100){
    $(aboutTab).on('click', aboutTabOpen);
    $(about).on('click', aboutTabClose);
  } else {
    console.log('hello');
    $(aboutTab).on('mouseenter', aboutTabOpen);
    $(aboutTab).on('mouseleave', aboutTabClose);
  }
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

// add click events for contact section on mobile
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

const safariCheck = () => {
    let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    if (isSafari){
      $('.navigation-button').hide();
      $('.container').hide();
      $('.what-we-buy-mobile').show();
      $(aboutTabBaseDesktop).css('position', 'absolute');
      $('.slide-container').css('width', '2035px');
      // $('.what-we-buy-mobile').css('width', '1814px');
    }
}



module.exports = {
  addHandlers,
  clickOrHoverAbout,
  clickOrHoverContact,
  safariCheck,
}
