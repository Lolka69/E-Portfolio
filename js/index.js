function phoneMenu() {
    // Grab the mobile_links div with query selector
    var menuLinks = document.querySelector(".mobile_links");
    //Debug ouput to make sure the correct element is grabbed
    console.log(menuLinks)

    //Checks if mobile links are displayed or not, if displayed, change to none
    if (menuLinks.style.display === 'block') {
        menuLinks.style.display = 'none';
        console.log("pressed?")
    } else {
        // If the mobile links are not display, change to displayed
        console.log("pressing?")
        menuLinks.style.display = 'block'
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 