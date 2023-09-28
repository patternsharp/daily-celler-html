$(document).ready(function () {
  $("#about").on("click", function () {
    $(".home").css("display", "");
    $(".services").css("display", "none");
    $(".about-us").css("display", "none");
    $('#about').css("font-weight", 600);
    $('#service').css("font-weight", 'normal');
    $('#contact').css("font-weight", 'normal');
  });
  $("#service").on("click", function () {
    $(".services").css("display", "flex");
    $(".home").css("display", "none");
    $(".about-us").css("display", "none");
    $('#service').css("font-weight", 600);
    $('#about').css("font-weight", 'normal');
    $('#contact').css("font-weight", 'normal');
  });
  $("#contact").on("click", function () {
    $(".about-us").css("display", "flex");
    $(".services").css("display", "none");
    $(".home").css("display", "none");
    $('#contact').css("font-weight", 600);
    $('#service').css("font-weight", 'normal');
    $('#about').css("font-weight", 'normal');
  });
});
