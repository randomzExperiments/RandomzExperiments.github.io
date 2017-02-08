$(".button").click(function(e) {
    $(".article").fadeIn(300).load($(e).parents(".thumb").data("source")); //tuki je ta del za klicanje
    $(".toolbar").stop().animate({"backgroundColor":"#656760","color":"#fafafc"}, 1000);               
});

$(".button-close").click(function() {
    $(".toolbar").stop().animate({"backgroundColor":"#fafafc","color":"#656760"}, 1300);
    $(".article").fadeOut(400).html("");              
});