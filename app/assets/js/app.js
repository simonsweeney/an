$(document).ready(function() {
    $("#set").delay(1500).fadeIn(800);
    $(".category").delay(900).fadeOut(800);
    $(".name").delay(1300).fadeOut(800);
    $(".nameBG").delay(1000).fadeOut(800);
    $(".index").delay(1500).fadeIn(800);
    $(".indexFeedOne").delay(1500).fadeIn(800);
    $(".indexFeedTwo").delay(1700).fadeIn(800);
    $(".indexFeedThree").delay(1900).fadeIn(800);
    $(".indexFeedFour").delay(1900).fadeIn(800);
    $("#project_title").delay(500).fadeIn(800);

    $(".aboutHide").fadeIn(200);

});


// LazyLoad
$(function() {
  $("img.lazy").lazyload({
     effect : "fadeIn",
    failure_limit : 20
  });     
});


// Parallax
$.stellar({
  horizontalScrolling: false,
  verticalOffset: 0,
  responsive: false
});


// About Menu
$(function() {                      
  $(".show").click(function() {  
    $(".about").toggleClass("active");  
    $(".nav-primary").toggleClass("active");    
  });
});


// panelSnap
jQuery(function($) {
    $("body").panelSnap({
    	keyboardNavigation: {
        enabled: true,
        nextPanelKey: 40,
        previousPanelKey: 38,
        wrapAround: false
    	}
    });
});


// hoverTitle
$(function() {                      
  $("#setItem1").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle1").toggleClass("hover"); 
  });
  $("#setItem2").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle2").toggleClass("hover"); 
  });
  $("#setItem3").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle3").toggleClass("hover"); 
  });
    $("#setItem4").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle4").toggleClass("hover"); 
  });
  $("#setItem5").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle5").toggleClass("hover"); 
  });
  $("#setItem6").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle6").toggleClass("hover"); 
  });
    $("#setItem7").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle7").toggleClass("hover"); 
  });
  $("#setItem8").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle8").toggleClass("hover"); 
  });
  $("#setItem9").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle9").toggleClass("hover"); 
  });
    $("#setItem10").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle10").toggleClass("hover"); 
  });
  $("#setItem11").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle11").toggleClass("hover"); 
  });
  $("#setItem12").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle12").toggleClass("hover"); 
  });
    $("#setItem13").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle13").toggleClass("hover"); 
  });
      $("#setItem14").hover(function() {  
    $(this).toggleClass("hover");
    $("#setTitle14").toggleClass("hover"); 
  });
});


