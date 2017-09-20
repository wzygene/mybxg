define(['jquery', 'template'], function ($, template) {
    // 调用后台接口，获取所有数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            // 解析数据，渲染页面
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
        }
    })
});