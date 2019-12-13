$(document).ready (function (){
    $('.carousel').carousel({ 
        interval:2000
      })
      $(".navbar li a").click(function(){
        $('html , body').animate({
            scrollTop: $('#'+ $(this).data("value")).offset().top
        }, 1000);
       
    });
    })