
$(document).ready(function(){
  $(".say").click(function(){
    $(".hello").fadeIn();
  });

  $(".sayed").click(function(){
    $(".hello").fadeOut();
  });


  $("#nav-icon2").click(function(){
    $(this).toggleClass('open');
  });  

  $("#nav-icon2").click(function(){
    $(".menu-bar").toggleClass('full-height');
    if ($(".menu-bar").hasClass("full-height")) {
      $(".social").css("display","block");
      $(".navbar").css("display","block");
    }else{
      $(".social").css("display","none");
      $(".navbar").css("display","none");
    }
  });


  window.location.href.substr(0, window.location.href.indexOf('#'))
  // Add smooth scrolling to all links
  // $("a").on('click', function(event) {

  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();

  //     // Store hash
  //     var hash = this.hash;

  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 400, function(){

  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });  
});

$('.service-carousel').owlCarousel({
  loop:true,
  margin:5,
  nav:false,
  navText : ["<i class='fas fa-arrow-right'></i>","<i class='fas fa-arrow-left'></i>"],
  dots:true,
  items:1,
  rtl: true
})


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



