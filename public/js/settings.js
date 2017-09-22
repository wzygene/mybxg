define(['jquery','template'],function ($,template){
    //  调用接口获取所有的个人信息
    $.ajax({
        type: 'get',
        url: '/api/teacher/profile',
        dateType: 'json',
        success: function (data){
            console.log(data);
            // 解析数据，渲页面
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
        }
    })
})