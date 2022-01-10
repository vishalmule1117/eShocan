
$('.col-sup-mid').hide();
$('.col-sup-mid.automotive').show();
$('.side-img').hover(function(){
    $('.col-sup-mid').hide();
    $('#div'+$(this).attr('target')).show();
});


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
    });
});
