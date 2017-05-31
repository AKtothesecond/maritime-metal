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

  // add clickhandlers/hover functions
  clickhandlers.addHandlers();
  clickhandlers.clickOrHoverAbout();
  clickhandlers.clickOrHoverContact();

  let aboutArrow = document.querySelector(".svg-about-tab-base svg polygon:nth-of-type(2)");
  let aboutArrowDesktop = document.querySelector(".svg-about-tab-base-desktop svg polygon:nth-of-type(2)");
  let contactMobileArrow = document.querySelector(".contact-btn-mobile svg");


  // ARROW ANIMATION
  aboutArrow.classList.add("bounce-class");
  aboutArrowDesktop.classList.add("bounce-class");
  contactMobileArrow.classList.add("bounce-class");
  $(".svg-about-tab-base-desktop").offset({top:"0;"});
})
