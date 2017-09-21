define(['jquery','template','util'],function ($,template,util){
    // 获取 url 中的参数
    var tcId = util.query_param();
    if(tcId){
        // 编辑操作
        $.ajax({
            type: 'get',
            url: '/api/teacher/edit',
            data: {tc_id: tcId},
            dataType: 'json',
            success: function (data){
                var html = template('formTpl',data.result);
                $('#edit_add').html(html);
            }
        });
    }
    else {
        // 添加操作
        var html = template('formTpl');
        $('#edit_add').html(html);
    }
});