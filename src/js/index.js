//分类页面的菜单栏
$(".list-group ul li ").click(function() {
    $(".list-group ul li ").css({ "background-color": "", "border-left": "" });
    $(this).css({ "background-color": " #f6f6f5", "border-left": "0.2rem solid #e01a57" });
});
