$('.col-sup-mid').hide();
$('.col-sup-mid.active').show();
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
                    slidesToShow: 1,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.partners-testimonal-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        autoplaySpeed: 2000,
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

