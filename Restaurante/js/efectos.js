$(document).ready(function() {
    
    // efecto menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //efecto header
    if( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    };

// scroll elementos menu
var acercaDe = $('#AD').offset().top,
menu = $('#platillos').offset().top,
galeria = $('#G').offset().top,
ubicacion = $('#U').offset().top;

    $('#btnAD').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 100
        }, 500);
    });
    $('#btnM').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });
    $('#btnG').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });
    $('#btnU').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });
});