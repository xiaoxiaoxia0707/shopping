/*拼团首页面*/
//开团与拼团切换
$(".buttons-tab a").click(function() {
    $(".buttons-tab a").removeClass("active");
    $(this).addClass("active");
})
