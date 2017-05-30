'use strict';
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const clickhandlers = require('./clickhandlers')
import ScrollReveal from 'scrollreveal';

$(() => {
  setAPIOrigin(location, config)

  // scroll reveal
  window.sr = ScrollReveal({
    origin: 'left',
    distance: '40px',

  });
  sr.reveal('.service-container',
            {duration: 800},
            100);
  sr.reveal('.sr');
  sr.reveal('.what-we-buy .container');

  // add clickhandlers for mobile what we buy
  clickhandlers.addHandlers();

  let aboutArrow = document.querySelector(".svg-about-tab-base svg polygon:nth-of-type(2)");
  let aboutArrowDesktop = document.querySelector(".svg-about-tab-base-desktop svg polygon:nth-of-type(2)");
  let contactMobileArrow = document.querySelector(".contact-btn-mobile svg");
  let contactMobileBtn = document.querySelector(".contact-btn-mobile");
  let contactMobileDropDown = document.querySelector(".contact-wrapper");


  aboutArrow.classList.add("bounce-class");
  aboutArrowDesktop.classList.add("bounce-class");
  contactMobileArrow.classList.add("bounce-class");
  // aboutArrowDesktop.style.top = "0px";
  $(".svg-about-tab-base-desktop").offset({top:"0;"});

// add hover effect to about section
  let aboutTab = document.querySelector(".svg-about-tab");
  let about = document.querySelector(".about");


  // this handler will be executed only once when the cursor moves over the unordered list
  aboutTab.addEventListener("mouseenter", function( event )   {
    // highlight the mouseenter target
    about.style.height = "630px";
    // aboutArrowDesktop.style.top = "-60px";
    $(".svg-about-tab-base-desktop").offset({top:"-60;"});
    aboutArrow.classList.remove("bounce-class");
    aboutArrowDesktop.classList.remove("bounce-class");
  });

  aboutTab.addEventListener("mouseout", function( event )   {
    // highlight the mouseenter target
    about.style.height = "0px";
    // aboutArrowDesktop.style.top = "0px";
    $(".svg-about-tab-base-desktop").offset({top:"0;"});
    aboutArrow.classList.add("bounce-class");
    aboutArrowDesktop.classList.add("bounce-class");
  });


// MOBILE CONTACT ARROW ANIMATION
  contactMobileBtn.addEventListener("mouseenter", function( event )   {
    // highlight the mouseenter target
    contactMobileDropDown.style.height = "400px";
    contactMobileArrow.classList.remove("bounce-class");
  });

  contactMobileBtn.addEventListener("mouseout", function( event )   {
    // highlight the mouseout target
    contactMobileDropDown.style.height = "0px";
    contactMobileArrow.classList.add("bounce-class");
  });

})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
