$(function(){
    $('.menu').mouseover(function(){
        $(this).parent().addClass('on');
        $(this).next().slideDown()
    });
    $('.gnb-item').mouseleave(function(){
        $(this).removeClass('on');
        $(this).find('ul').slideUp()
    });
    
});