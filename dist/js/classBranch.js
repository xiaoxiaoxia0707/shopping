 /*分类页面的菜单栏*/
$("#menu-list-group li").click(function(){
    $("#menu-list-group li").removeClass("active");
     $(this).addClass("active");
    
})
$(".bar-tab a").click(function() {
	$(".bar-tab a").removeClass("active");
    $(this).addClass("active");
});