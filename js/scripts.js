var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
$('.year-copy').text(anoAtual);

// =========== EFEITO DO SCROLL ===========
$(document).scroll(function(){
    topOfPage = $(document).scrollTop();
    if (topOfPage > 0) {
        $('.main-menu').addClass('stick');
    } else {
        $('.main-menu').removeClass('stick');
    }
});

// =========== SCROLL DO MENU ===========
$('.main-menu li a').click(function(e){
    e.preventDefault();
    anchor = $(this).attr('href');
    target = $(anchor).offset().top - 60;
    // animando
    $('html,body').animate({
        scrollTop: target
    }, 500);
});

// =========== ABRIR/FECHAR MENU MOBILE ===========
$('.hamburguer').click(function(){
    $('.main-menu').slideToggle(300);
});


// =========== CAIXA DOS BANCOS - MOBILE ===========
$('.wrap-btns button').click(function(){
    id = $(this).data('bank');
    $('.list-banks li').hide(0);
    $('.list-banks li.' + id).show(0);
});