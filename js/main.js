$("#NB")
  .delay(2000)
  .queue(function () {
    $(this).addClass("fixed-top");
  });

$("#title-animation").delay(2500).fadeIn(800);
$("#sub-title-animation").delay(3500).fadeIn(800);

$(".main-title").on("inview", function (event, isInView) {
  if (isInView) {
    if (isInView) {
      $(this).css('opacity','1');
    }
  }
});
$(".octitle").on("inview", function (event, isInView) {
  if (isInView) {
    if (isInView) {
      $(this).css('opacity','1');
    }
  }
});
$(".img-fluid").on("inview", function (event, isInView) {
  if (isInView) {
    if (isInView) {
      $(this).addClass('inview');
    }
  }
});
