
$(function(){
    var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 996) {
    $(".menu-links").slideUp();
}
    $("#menu").click(function(){
        $(".menu-links").slideToggle();
        
        
    })

})
