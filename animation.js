$(document).ready(function(){
    // Базовая анимация
    // $('.box:first').hide(5000);
    // $('.box:first').delay(1000).hide(1000);
    // $('.box:first').delay(1000).hide(1000).delay(1000).show(1000);
    // $('.box:first').delay('slow').hide('fast').delay(1000).show(1000);
    // $('.box:first').animate({'width' : '100px'} , 1000);
    // $('.box:first').slideUp(1000).slideDown(1000);

    // Взаимодействие с атрибутами
    //    console.log($('img').attr('src'));

    // $('img').click(function(){
    //     $(this).fadeOut(500, function(){
    //         $(this).attr('src','img/2.jpeg').fadeIn(500);
    //     });
    // });

    // $('p.lead').attr('data-target' , 'test');

    // Взаимодействие с классами

    // $('p.lead').addClass('red');
    // $('.lead').click(function(){
    //     $('p.lead').addClass('red');
    // });

    // $('.lead').click(function(){
    //     $(this).removeClass('lead');
    // });


    // $('.lead').click(function(){
    //     $(this).toggleClass('red');
    // });
    // $('.lead').click(function(){
    //     $(this).toggleClass('lead red');
    // });


    // Клонирование, добавление, перемещение элементов

    $('.lead').click(function(){
        // $(this).text('Свой собственный текст');
        // $(this).html('Свой собственный <em>текст</em>');
        // $(this).append('Дополнительный текст');
        // $(this).prepend('Дополнительный текст в начале');
        // $(this).after('<p>Новый текст</p>');
        // $(this).wrap('<div class="container"></div>');
        // $(this).unwrap();
        // $(this).empty();
        // $(this).remove();
        // $(this).append('<br/>' +$(this).text());
    });

});