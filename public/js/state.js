define(['jquery'],function ($){
    $(document).ajaxStart(function (){
        // 显示遮罩层
        $('.overlay').show();
    });
    $(document).ajaxStop(function (){
        // 隐藏遮罩层
        setTimeout(function() {
            console.log(333, 444);
            $('.overlay').hide();
        }, 500);
    });
})