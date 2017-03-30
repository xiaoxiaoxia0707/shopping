/*商城首页*/
//轮播图
$(".swiper-container").swiper({
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: false
});
//新闻与热点的转换
$(".buttons-tab a").click(function() {
	$(".buttons-tab a").removeClass("active");
    $(this).addClass("active");
});
//工具栏首页、捐款、拼图和个人中心的转换
$(".bar-tab a").click(function() {
	$(".bar-tab a").removeClass("active");
    $(this).addClass("active");
});
/*分类页面的菜单栏*/
$("#menu-list-group li").click(function(){
    $("#menu-list-group li").removeClass("active");
     $(this).addClass("active");
    
})
/* 地区选择页面 */
$("#area-list-block li .item-title").click(function() {
    $("#location-city").html($(this).html());
})
