$(document).ready(function(){
    // селекторы

    // Базовые селекторы(#id, tagName, .class)
    // $('p.blue').css('border','solid 3px red');
    // Селекторы взаимодействия (parent , child , + , ~......)
    // $('h2 +p').class('border','solid 3px red');
    // Простые фильтры (:first, :last, even, odd...)
    // $('p:odd').css('border','solid 3px red');
    // Фильтры по содержимому (:parent, :empty ....)
    // $('.box:parent').css('border','solid 3px red');
    // Фильтры по атрибутам ([name~=value])
    // $('a[href="google.com"]').css('border','solid 3px red');
    // $('a[href^="https"]').css('border','solid 3px red');
    // $('a[href$=".ru"]').css('border','solid 3px red');
    // знак $ означает, что ссылка заканчивается имеено на этот символ
    // $('a[href*=".ru"]').css('border','solid 3px red'); - то же самое

    // СОБЫТИЯ
    // Клики мышью  (click , dblclick)

    // $('h2').click(function(){
    //     alert('Ты кликнул по заголовку');
    //     console.log('Ты кликнул по заголовку');
    // });
    //двойной клик
    // $('h2').dblclick(function(){
    //     $(this).css('color' , 'red');
    // });
    // $('h2').dblclick(function(){
    //     $(this).toggleClass('red');
    // });


    // Полеты над элементом (mouseenter, mouseleave ....)

    // $('h2').mouseenter(function(){
    //     $(this).toggleClass('red');
    // });

    // аналог ховер эффекта на скрипте
    // $('h2').mouseleave(function(){
    //     $(this).toggleClass('red');
    // });



    // Формы (focus , change ...)

    // $('input').focus(function(){
    //     console.log('hi');
    // });

    // $('input').change(function(){
    //     $('#userName').text(', ' +$(this).val());
    // });

    // Клавиатура (keypress , keydown, keyup)

    // $('input').keyup(function(){
    //     $('#userName').text(', ' +$(this).val());
    // });

});