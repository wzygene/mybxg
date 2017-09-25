define(['jquery','template','util'],function ($,template,util){
    // 设置导航栏按钮
    util.setMenu('/course/add');

    // 获取课程id
    var csId = util.query_param('cs_id');

    // 获取所有的可是列表
    $.ajax({
        type: 'get',
        url: '/api/course/lesson',
        data: {cs_id: csId},
        dataType: 'json',
        success: function (data){
            console.log(data);
            // 解析数据 渲染页面
            var html = template('lessonTpl',data.result);
            $('#lessonInfo').html(html);
        }
    })
})