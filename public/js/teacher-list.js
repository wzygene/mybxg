define(['jquery', 'template'], function ($, template) {
    // 调用后台接口，获取所有数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        dataType: 'json',
        success: function (data) {
            // 解析数据，渲染页面
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
            
            var e_d = $('.enable-or-disable');
            $.each(e_d,function (index,item){
                console.log(item);
                var status = item.parentNode.getAttribute('tc-status');
                // 根据讲师状态属性，渲染启用/注销
                if(status == 1){
                    item.innerHTML = '注 销';
                }else {
                    item.innerHTML = '启 用';
                }
            });
            
            // 注销和启用讲师和管理功能，因为ajax是异步的，所以，绑定事件要写在 success回调函数中
            $('.enable-or-disable').on('click',function (){
                var self = $(this);
                var parent = self.closest('td');
                var tc_id = parent.attr('tc-id');
                var tc_status = parent.attr('tc-status');
                $.ajax({
                    type: 'post',
                    url: '/api/teacher/handle',
                    data: {tc_id: tc_id,tc_status: tc_status},
                    dataType: 'json',
                    success: function (data){
                        console.log(data.result.tc_status,tc_status);
                        if(data.code == 200){
                            if(tc_status == 0){
                                self.text('注 销');
                            }else {
                                self.text('启 用');
                            }
                        }
                        parent.attr('tc-status',data.result.tc_status);
                    }
                })
            });

            // 查看讲师
        }
    })
});