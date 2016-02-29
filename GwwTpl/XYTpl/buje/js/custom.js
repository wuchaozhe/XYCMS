// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        /*var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault(); */
       alert($(this.hash).offset().top);
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
        return false;
    });

    var h = $(window).height();
    $('header').css('height',h+'px');
    
    new WOW().init();

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplaySpeed:2000,
        autoplayTimeout:4000
    });

});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(window).load(function(){
    var $container = $('.portfolioContainer');
    $('.grid').isotope({
      // options
      itemSelector: '.single-portfolio',
      layoutMode: 'fitRows'
    });
    $('.portfolio-item a').click(function(){
        $('.portfolio-item .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
