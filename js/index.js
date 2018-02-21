$("#money_input").on("blur",function()
{
    $(".money").text(document.getElementById("money_input").value+"元");
});
function check()
{
    var patrn=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    var i;
    var input=document.getElementsByTagName("input");
    for(i=0;i<input.length;i++)
    {
        if(patrn.test(input[i].value))
        {
            alert("检测到非法字符！")
            return false;
        }
        if(input[i].name=="mobile")
        {
            if(input[i].value.length!=11)
            {
                alert("请输入正确位数的手机号码");
                return false;
            }
            for(var j=0;j<11;j++)
                if(input[i].value[j].charCodeAt()<48||input[i].value[j].charCodeAt()>58)
                {
                    alert("请输入正确的手机号码");
                    return false;
                }
        }
        if(input[i].name=="money")
        {
            for(var j=0;j<11;j++)
                if(input[i].value[j].charCodeAt()<48||input[i].value[j].charCodeAt()>58)
                {
                    alert("请输入正确的打赏金额");
                    return false;
                }
        }
    }
    return true;
}
