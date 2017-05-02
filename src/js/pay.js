$(document).on('click', '.item-after', function() {
    var buttons1 = [{
        text: '配送方式',
        label: true
    }, {
        text: '快递 免邮',
        bold: true

    }, {
        text: '平邮 免邮',
        bold: true
    }, {
        text: 'EMS 免邮',

    }];
    var buttons2 = [{
        text: '关闭',
    }];
    var groups = [buttons1, buttons2];
    $.actions(groups);
});
