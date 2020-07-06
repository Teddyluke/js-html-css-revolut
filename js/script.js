$(document).ready(function () {
  // effetti mouse in & out
  $(".top-header a").mouseenter(function () {
    $(this).css("color","black");
  });
  $(".top-header a").mouseout(function () {
    $(this).css("color","grey");
  });
  $(".nav-menu a").mouseenter(function () {
    $(this).css("color","black");
  });
  $(".nav-menu a").mouseout(function () {
    $(this).css("color","grey");
  });
  $(".download-app-btn").mouseenter(function () {
    $(this).fadeTo( "slow", 0.7, function () {
    });
  });
  $(".download-app-btn").mouseout(function () {
    $(this).fadeTo( "slow", 1, function () {
    });
  });

 // regole per dropdown menu
  $(".nav-menu li").mouseenter(function () {
    $(this).children(".dropdown").addClass("show").removeClass("hidden");
  });

  $(".nav-menu li").mouseleave(function () {
    $(this).children(".dropdown").addClass("hidden").removeClass("show");
  });

});
