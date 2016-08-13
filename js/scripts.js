
$(document).ready(function(){/* activate sidebar */
$('#sidebar').affix({
  offset: {
    top: 335
  }
});

/* activate scrollspy menu */
var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});
});


/* ---------------------------------------------- /*
 * Banner Rotator
/* ---------------------------------------------- */

 $(window).load(function() {
     $('#myRotator').bannerRotator({
         width:1920,
         height:375,
         cpanelPosition: 'center bottom',
         timer: 'none',
         navButtons: 'large',
         navThumbs: 'true',
         thumbnails: 'none',
         playButton: false
     });
 });


 /* ---------------------------------------------- /*
  * WOW Animation When You Scroll
 /* ---------------------------------------------- */

 wow = new WOW({
  mobile: false
 });
 wow.init();



