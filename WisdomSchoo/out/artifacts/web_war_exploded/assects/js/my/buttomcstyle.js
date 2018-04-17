$(document).ready(function(){
    $("#daohang").click(function(){
        $("#daohangonetoone").slideToggle("slow");
    });
    $("#bianqian").click(function(){
        $("#slide").slideToggle("slow");
        $("#optionsDiv").css("display","none");
        $("#shaixuanright").css("display","none");
        $("#shaixuanlend").css("display","none");
        $("#gaolianglist").css("display","none");
    });

    $("#shaixuan").click(function(){
        $("#slide").css("display","none");
        $("#optionsDiv").css("display","block");
        $("#shaixuanright").css("display","block");
        $("#shaixuanlend").css("display","block");
        $("#gaolianglist").css("display","none");
    });
    $("#gaoliang").click(function(){
        $("#gaolianglist").css("display","block");
        $("#optionsDiv").css("display","none");
        $("#shaixuanright").css("display","none");
        $("#shaixuanlend").css("display","none");
        $("#slide").css("display","none");
    });
    $("#edtsd").click(function(){
        $("#jiagai").css("display","block");
        $("#edtsd").css("display","none");

    });
    $("#jiagai").click(function(){
        $("#edtsd").css("display","block");
        $("#jiagai").css("display","none");

    });

});
