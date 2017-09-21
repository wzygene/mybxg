define(['jquery'],function ($){
    return {
        query_param: function (){
            var location_search = location.search.substr(1);
            // console.log(location_search);
            var value = null;
            if(location_search){
                var keyInfo = location_search.split('&');
                $.each(keyInfo,function (index,item){
                    var kv = item.split('=');
                    if(kv[0] == 'tc_id'){
                        value = kv[1];
                        return false;   // 终止each循环
                    }
            
                });
            }
            return value;
        }
    }
});