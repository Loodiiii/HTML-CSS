$(document).ready(function() {

        //  ANIMACIJE ON LOAD
        $(".btn-back").hide().slideDown(1000);
        $(".btn-back").on("mouseover", function() {
          $(".btn-back").css({
            opacity: ".75",
            transition: "1s",
            fontStyle: "bold"
          });
        });
        $(".btn-back").on("mouseleave", function() {
          $(".btn-back").css({
            opacity: "1",
            transition: ".5s",
            fontStyle: "normal"
          });
        });
        $(".left-1-h1").hide().fadeIn(1000);
        $(".right-1-h1").hide().fadeIn(1000);
        $(".right-1-p").hide().fadeIn(1000);
        $('h3').hide().slideDown(1000);
        $(".star-first").hide().fadeIn(1000);
        $(".star-second").hide().fadeIn(1800);
        $(".slidedown").hide().slideDown(1000);
        $(".fadeIn").hide().fadeIn(1000);


/*
function buttonTransition() {
  $(this).css({
    padding: '15px 50px',
    transition: '1s'
  })
}

function buttonTransitionOff() {
  $(this).css({
    padding: '10px 40px',
    transition: '.56s'
  })
}
        $(".btn-back").on('mouseover', buttonTransition).on('mouseleave', buttonTransitionOff);
});
*/
});
