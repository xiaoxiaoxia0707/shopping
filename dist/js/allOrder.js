/*所有订单页面*/
//全部、代付款、已完成与其他切换
$(".buttons-tab a").click(function() {
    $(".buttons-tab a").removeClass("active");
    $(this).addClass("active");
})
