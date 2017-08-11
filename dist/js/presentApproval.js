//选择银行卡类型一个
$('.check-list').on('change', 'input[type=radio]', function () {
    var check_list = $('.check-list').find('input[type=radio]:checked');
    if (check_list.length > 1) {
        $(this).prop('checked', false);
    }
})

//选择银行类型字段
$('.check-list li').click(function () {
   var check_text = $('.check-list').find('input[type=radio]:checked+label');
   areaText = '';
    areaText= $(check_text).text();
    $('.type-text').text(areaText);
    $.router.back();
});