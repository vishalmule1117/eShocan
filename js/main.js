$('.col-sup-mid:first-child').css("display","block");
$('.side-img-video').hover(
    function(){
        $(this).addClass('active');
        $('.Hero_media_big').hide();
        $('#div'+$(this).attr('target')).show();
    },
    function(){
        $(this).removeClass('active')
        $('#div'+$(this).attr('target')).removeClass('active');
    },  
);

$('.col-sup-mid:first-child').css("display","block");
$('.side-img').hover(
    function(){
        $(this).addClass('active');
        $('.col-sup-mid').hide();
        $('#div'+$(this).attr('target')).show();
    },
    function(){
        $(this).removeClass('active')
        $('#div'+$(this).attr('target')).removeClass('active');
    },  
);


$(document).ready(function(){
    $('.partner-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        arrows:false,
        dots:false,
        pauseOnHover:true,
        pauseOnFocus:true,
       
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 2,
                    speed: 3000,
                }
            }
        ]
    });

    $('.partners-testimonal-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 2000,
        prevArrow:"<img src='img/left-arrow.png' class='prev-arrow' />",
        nextArrow:"<img src='img/right-arrow.png' class='next-arrow'/>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });

    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".eshocan_header").addClass("darkHeader");
        } else {
            $(".eshocan_header").removeClass("darkHeader");
        }
    });


});

$( ".icon-menu" ).click(function() {
    $('nav').css("transform", "translate(0%)"); 
});

$( ".close .fa" ).click(function() {
    $('nav').css("transform", "translate(200%)"); 
});

$( ".eshocan_nav_links ul li" ).click(function(e) {
    if ($('.eshocan_nav_lvl-1').is(':visible')) {
        $(".eshocan_nav_lvl-1").slideUp(300);
        $(".plusminus").text('+');
    }
    if ($(this).find(".eshocan_nav_lvl-1").is(':visible')) {
        $(this).find(".eshocan_nav_lvl-1").slideUp(300);
        $(this).children(".plusminus").text('+');
    } else {
        $(this).find(".eshocan_nav_lvl-1").slideDown(300);
        $(this).children(".plusminus").text('-');
    }
});

