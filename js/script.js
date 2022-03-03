$( document ).ready(function() {
    $('.info__slider').slick({
        Infinity: true,
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000
    });
    
    const menu = $('.menu');
        $('.menu').on('click', function(){
        menu.toggleClass('menu__hm-active')
    });
    
    
    var $page = $('html, body');
        $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 200);
        return false;
    });
});