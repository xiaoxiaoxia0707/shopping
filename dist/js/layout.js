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
//工具栏的转换
$(".bar-tab a").click(function() {
	$(".bar-tab a").removeClass("active");
    $(this).addClass("active");
});
