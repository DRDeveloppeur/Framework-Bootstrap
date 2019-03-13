$(document).ready(function() {
  $(".dropdown-item").hide(true);
  function drop(){
    $("#drp").click(function(){
      $(".dropdown-item").css("display", "block");
      $("#drp").click(function(){
        $(".dropdown-item").css("display", "none");
        drop();
      })
      $(window).click(function(event) {
        if(!$(event.target).closest('.dropdown').length) {
          $(".dropdown-item").css("display", "none");
          drop();
        }
      });
    })
  };
  drop();

  function dropm(){
    $(".navbar-toggler").click(function(){
      $(".navbar-content").css("display", "block");
      $(".navbar-toggler").click(function(){
        $(".navbar-content").css("display", "none");
        dropm();
      })
    })
  };
  dropm();

  var string;
  $.fn.modal = function(string)
  {
    if (string == "hide") {
      $("#myModal").hide(500);
      $('#fade').css("display", "none");
    }
    if (string == "show") {
      $('body').append('<div id="fade"></div>');
	    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
      $("#myModal").show(500);
    }
  }

  $(".myModal").click(function(){
    $("#myModal").modal("show");
  })

  $(".popin-dismiss").click(function(){
    $("#myModal").modal("hide");
  })


  $(document).keydown(function(e){
    if (e.keyCode == 27) {
      $("#myModal").modal("hide");
    }
  })

  $(window).click(function(event) {
    if(!$(event.target).closest('.myModal').length) {
      if(!$(event.target).closest('#myModal').length) {
        $("#myModal").modal("hide");
      }
    }
  });

  $(".tab-list li").click(function(){
    $(".tab-list li").removeClass("active");
    $(this).addClass("active");
    $(document).ready(function() {
      $(".tab-pane").removeClass("active");
      $("div:target").addClass("active");
    });
  })

  $(".tooltip").mouseover(function(){
    if ($(this).attr("title")=="") return false;

    $("body").append('<span class="infobulle"></span>');
    var bulle = $(".infobulle:last");
    bulle.append($(this).attr("title"));
    $(this).attr("title","");
    if ($(this).attr("data-placement")=="top") {
      var posTop = $(this).offset().top-$(this).height()*2;
      var posLeft = $(this).offset().left-50;
    }
    if ($(this).attr("data-placement")=="bottom") {
      var posTop = $(this).offset().top+$(this).height();
      var posLeft = $(this).offset().left;
    }
    if ($(this).attr("data-placement")=="left") {
      var posTop = $(this).offset().top-15;
      var posLeft = $(this).offset().left-100;
    }
    if ($(this).attr("data-placement")=="right") {
      var posTop = $(this).offset().top-15;
      var posLeft = $(this).offset().left+130;
    }
    if ($(this).attr("data-placement")=="" || !$(this).attr("data-placement")) {
      var posTop = $(this).offset().top-$(this).height()/5;
      var posLeft = $(this).offset().left+$(this).offset().left*2;
    }
    bulle.css({
      left:posLeft,
      top:posTop-10,
      opacity:0
    })
    bulle.animate({
      top:posTop,
      opacity:0.99
    })
  })
  $(".tooltip").mouseout(function(){
    var bulle = $(".infobulle:last");
    $(this).attr("title", bulle.text());
    bulle.animate({
      top:bulle.offset().top+10,
      opacity:0
    },500,"linear",function(){
      bulle.remove();
    })
  })


});
