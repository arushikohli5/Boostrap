$(document). ready(function(){
    $('#mycarousel').carousel({
      interval: 1200
    });
    $("#carousalButton").click(function(){
        if($('#carousalButton').children('span').hasClass('fa-pause')){
          $("#mycarousel").carousel('pause');
          $('#carousalButton').children('span').removeClass('fa-pause');
          $('#carousalButton').children('span').addClass('fa-play');
      }
      else if($('#carousalButton').children('span').hasClass('fa-play')){
          $("#mycarousel").carousel('cycle');
          $('#carousalButton').children('span').removeClass('fa-play');
          $('#carousalButton').children('span').addClass('fa-pause');
      }
  });
      $('#login').click(function(){
          $('#loginModal').modal('show');
      });
      $('#reserve').click(function(){
          $('#formModal').modal('show');
      });
  });