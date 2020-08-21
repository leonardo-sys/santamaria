// scroll elementos menu
var acercaDe = $('#About').offset().top,
Trabajos = $('#Work').offset().top,
Contacto = $('#Contact').offset().top;

    $('#btnAD').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        }, 500);
    });
    $('#btnT').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Trabajos + 100
        }, 500);
    });
    $('#btnC').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Contacto
        }, 500);
    });

