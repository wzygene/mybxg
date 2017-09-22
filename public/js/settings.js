define(['jquery','template','uploadify','region'],function ($,template){
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
                    var obj = JSON.parse('b');
                    console.log(obj);
                    $('.preview img').attr('src',obj.result.path);
                }
            });
            // 处理省市区三级联动
            console.log($('#pcd'));
            $('#pcd').region({
                url : '/public/assets/jquery-region/region.json'
            });
        }
    })
})
