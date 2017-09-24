define(['jquery','template','util','datepicker','language','validate','form'],function ($,template,util){
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
                submitForm('/api/teacher/update');
            }
        });
    }
    else {
        // 添加操作
        var html = template('formTpl');
        $('#edit_add').html(html);
        submitForm('/api/teacher/add');
        
    }

    // 基于表单验证插件和表单提交插件进行表单提交
    function submitForm(url){
        $('#formBtn').validate({
            sendForm: false,
            valid: function (){
                // 提交表单
                $(this).ajaxSubmit({
                    type: 'post',
                    url: url,
                    dataType: 'json',
                    success: function (data){
                        if (data.code == 200) {
                            location.href = '/teacher/list';
                        }
                    }
                })
            },
            description: {
                tcName: {
                    required: '用户名不能为空',
                },
                tcPass: {
                    required: '密码不能为空',
                    pattern: '必须是6位数字',
                },
                tcJoinDate: {
                    required: '日期不能为空'
                }
            }
        });
    }
});
