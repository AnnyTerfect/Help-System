$.post("listAll.php","",function(response)
{
    var mission=response.split("###"),i;
    var label=['姓名','手机号','地址','任务类型','特别备注','限制性别','预约时间','过期时间','打赏金额'];
    for(i=0;i<mission.length-1;i++)
    {
        $("#cont").append("<div class='row-cont'id='row_cont"+i+"'>");
        var item=mission[i].split(",,,,,");
        for(var j=0;j<item.length-1;j++)
            $("#row_cont"+i).append("<div class='row'>"+"<div class='row-item'>"+label[j]+"</div>"+"<div class='row-show'>"+item[j]+"</div>"+"</div>");
    }

});
