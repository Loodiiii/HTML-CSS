$(document).ready(function() {

      // BUTTON HOVER JQUERY
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

    $('.container').hide(0).fadeIn(1000);
    $('.ikonica-top').hide(0).slideDown(1000);
    $('.left-1-h1').hide(0).slideDown(1000);
    $('.right-1-h1').hide(0).slideDown(1000);
    $('.right-1-p').hide(0).slideDown(1000);
    $(".slidedown").hide().slideDown(1000);
    $(".slidedown2").hide().slideDown(2000);
    $(".fadeIn").hide().fadeIn(1000);
    $(".fadeIn-slike").hide().fadeIn(1800);

  //configuration
  var width = $('#slider').width();
  var animationSpeed = 1000;
  var pause = 3000;

  var currentSlide = 2;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;

  function startSlider(){
  interval = setInterval(function() {
      $slideContainer.animate({'margin-left' : '-=' +width}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide == $slides.length) {
            currentSlide = 2;
            $slideContainer.css('margin-left', -width);
          }
        });
    }, pause);
  }

  function pauseSlider(){
    clearInterval(interval);
  }
  startSlider();


  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);


    $('.arrow-r').click( function() {
      $slideContainer.animate({'margin-left' : '-=' + width}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide == 8) {
            currentSlide = 2;
            $slideContainer.css('margin-left', -width);
          }
        });
        pauseSlider();
    });

    $('.arrow-l').click( function() {
      $slideContainer.animate({'margin-left' : '+=' + width}, animationSpeed, function() {
        currentSlide--;
        if (currentSlide == 1) {
            currentSlide = 7;
            $slideContainer.css('margin-left', '-=' + width*6);
          }
        });
        pauseSlider();
      });

    });
