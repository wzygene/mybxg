define(['jquery','template','util','ckeditor','validate','form'],function ($,template,util,CKEDITOR){
    // 设置导航菜单选中
    util.setMenu('/course/add');

    // 获取课程id
    var csId = util.query_param('cs_id');
    // 获取标志位
    var flag = util.query_param('flag');
    // 根据课程id 查询详细信息
    $.ajax({
        type: 'get',
        url: '/api/course/basic',
        data: {cs_id: csId},
        success: function (data){
            // 根据标志位选择是‘添加’还是‘编辑’
            if(flag){
                data.result.operator = '编辑课程';
            }else {
                data.result.operator = '添加课程';
            }
            // 解析数据  渲染页面
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html);
            // 渲染二级目录
            $('#category').change(function (){
                var pid = $(this).val();
                $.ajax({
                    type: 'get',
                    url: '/api/category/child',
                    dataType: 'json',
                    data: {cg_id: pid},
                    success: function (data){
                        var tpl = '<option value="">请选择二级分类...</option>'
                        +'{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>'
                        +'{{/each}}';
                        var html = template.render(tpl,{list:data.result});
                        $('#secondType').html(html);
                    }
                })
            })
            // 处理富文本
            CKEDITOR.replace('description',{
                toolbarGroups: [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'links', groups: [ 'links' ] },
                    { name: 'insert', groups: [ 'insert' ] },
                    { name: 'forms', groups: [ 'forms' ] }
                ]
            });
            // 处理表单提交
            $('#basicForm').validate({
                sendForm: false,
                valid: function (){
                    $(this).ajaxSubmit({
                        type: 'post',
                        url: '/api/course/update/basic',
                        dateType: 'json',
                        data: {cs_id: csId},
                        success: function (data){
                            location.href = '/course/picture?cs_id='+data.result.cs_id;
                        }
                    });
                }
            });
        }
    })
})