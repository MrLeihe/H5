
$(function(){
    // $(".dismiss").click(function(){
    //     $(this).hide();
    // });
    $("div.dismiss").click(function(){
        $(this).text("傻子正树");
    });

    $("div.dismiss").mouseenter(function(){
        alert('傻子正树');
    })

    let arr = ['请选择主类别', '1', '2'];
    $.each(arr, function(index, value){
        $("#select").append("<option>" + value + "</option>")
    });
    
});

function selectChange(value){
    console.log(value);
}





//TODO hahah

