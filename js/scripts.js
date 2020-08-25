
// LESSONS CODE

// Begin by hiding the long paragraphs
  $(document).ready(function(){
    $(".curiositydef").hide();
    $(".diligencedef").hide();
    $(".flexibilitydef").hide();

//Show the paragraphs when th icons are clicked
    $("#curiosity").click(function(){
      $(".curiositydef").show();
      $("#curiosity").hide();
    });
    $("#diligence").click(function(){
      $(".diligencedef").show();
      $("#diligence").hide();
    });
    $("#flexibility").click(function(){
      $(".flexibilitydef").show();
      $("#flexibility").hide();
    });

//Minimize the paragraphs when a person 
// clicks on the minimize button

    $(".curminimize").click(function(){
      $(".curiositydef").hide();
      $("#curiosity").show();
    });
    $(".dilminimize").click(function(){
      $(".diligencedef").hide();
      $("#diligence").show();
    });
    $(".flexminimize").click(function(){
      $(".flexibilitydef").hide();
      $("#flexibility").show();
    });

// CAROUSEL CODE
// Automatic Carousel

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

  });