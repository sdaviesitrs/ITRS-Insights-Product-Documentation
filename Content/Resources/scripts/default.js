$(window).load(function(){
    $('#back-to-top').click(function(){
        $('body,html').stop().animate({scrollTop:0},'500','swing');
    })
});
