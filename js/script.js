document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

$(document).ready(function () {
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
    duration: 200,
  });
  window.setInterval(function () {
    $(".carousel").carousel("next");
  }, 3000);
});

(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "active",
      img: ".timeline-img",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 200 && pos >= min - $(this).height()) {
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline").timeline();

$(".location").hover(showLocationCard);
function showLocationCard() {
  $(".city").toggleClass("hidden");
}

$(".location").click(showLocationCard);
function showLocationCard() {
  $(".city").toggleClass("hidden");
}

$(".city").on("mouseleave", function () {
  $(".city").toggleClass("hidden");
});
