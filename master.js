// leets toogle active class on images First :

$('.clients img').click(function(){

    $(this).addClass('active').siblings().removeClass('active');
    $('.slides .slide').eq($(this).attr('data-index')).addClass('active').siblings().removeClass('active');


})