define(['jquery','template','ckeditor','datepicker','language','uploadify','region',
'validate','form'],function ($,template,CKEDITOR){
    //  调用接口获取所有的个人信息
    $.ajax({
        type: 'get',
        url: '/api/teacher/profile',
        dateType: 'json',
        success: function (data){
            // 解析数据，渲页面
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            // 处理头像上传
            $('#upfile').uploadify ({
                swf : '/public/assets/jquery-uploadify/uploadify.swf',
                uploader : '/api/uploader/avatar',
                fileObjName : 'tc_avatar',
                width : 120,
                height : 120,
                buttonText : '',
                onUploadSuccess : function(a,b){
                    var obj = JSON.parse(b);
                    $('.preview img').attr('src',obj.result.path);
                }
            });
            // 处理省市区三级联动
            $('#pcd').region({
                url : '/public/assets/jquery-region/region.json'
            });
            // 处理富文本
            CKEDITOR.replace('editor',{
                toolbarGroups: [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'links', groups: [ 'links' ] },
                    { name: 'insert', groups: [ 'insert' ] },
                    { name: 'forms', groups: [ 'forms' ] }
                ]
            });
            // 处理表单提交
            $('#settingsForm').validate({
                sendForm: false,
                valid: function (){
                    var hometown = '';
                    var p = $('#p').find('option:selected').text();
                    var c = $('#c').find('option:selected').text();
                    var d = $('#d').find('option:selected').text();
                    var hometown = p+'|'+c+'|'+d;

                    // 更新富文本
                    for (var instance in CKEDITOR.instances) {
                        CKEDITOR.instances[instance].updateElement();
                    }
                    $(this).ajaxSubmit({
                        type: 'post',
                        url: '/api/teacher/modify',
                        data: {tc_hometown: hometown},
                        dataType: 'json',
                        success: function (data){
                            if(data.code == 200){
                                // 刷新当前页面
                                location.reload();
                            }
                        }
                    })
                }
            })

        }
    })
});
