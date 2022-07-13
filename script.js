var scrollPercent = 0;
var windowHeight = $(window).height();
setInterval(function() {
  windowHeight = $(window).height();
  scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - windowHeight);
  $(".main-title-text").css({
      "padding-top": windowHeight * 0.5 - scrollPercent * 6 + "px"
    });
}, 1);

// Copyright message
var currentYear = new Date().getFullYear();
$("#copyright-message").text("Copyright Sejin An " + currentYear + ".");
