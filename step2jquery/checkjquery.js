$(document).ready(function(){
    var checkboxs = $(".checkbox > span");
    //  console.log(checkboxs);
    //复选
    checkboxs.each(function(){
        $(this).click(function(){
            if($(this).attr("clicked") === '1'){
                $(this).css("border","1px solid blue");
                $(this).attr("clicked",'0');
            } else {
                $(this).css("border","1px solid red");
                $(this).attr("clicked",'1');
            }
        });
    });
    //单选
    var radios = $(".radio > span");
    radios.each(function(){
        $(this).click(function(){
            radios.each(function(){
                $(this).css("border","1px solid blue");
            });
            $(this).css("border","1px solid red");
        });
    });
    //全选
    var checkall = $(".checkall");
    // console.log(checkall);
    checkall.click(function(){
        // alert("asd");
        if($(this).attr("clicked") === '1'){
            checkboxs.each(function(){
                $(this).attr("clicked",'1');
                $(this).trigger("click");
            });
            $(this).attr("clicked",'0');

        } else {
            checkboxs.each(function(){
                $(this).attr("clicked",'0');
                $(this).trigger("click");
            });
            $(this).attr("clicked",'1');
        }
    });
});
