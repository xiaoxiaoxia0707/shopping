$("#editBtn").click(function() {
    if ($("#editBtn").text() == "编辑") {
        $("#editBtn").text("完成");
        $(".accountBtn").text("删除");
    } else {
        $("#editBtn").text("编辑");
        $(".accountBtn").text("结算");
    }
});
