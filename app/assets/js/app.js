$(document).ready(function() {
    $("#set").delay(1500).fadeIn(800);
    $("#set").delay(1500).fadeIn(800);
    $(".category").delay(900).fadeOut(800);
    $("#project_title").delay(500).fadeIn(800);

});


$(function() {                      
  $(".show").click(function() {  
    $(".about").toggleClass("active");  
    $(".nav-primary").toggleClass("active");    
  });
});

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
});



