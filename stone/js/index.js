
$(function(){
    // $(".dismiss").click(function(){
    //     $(this).hide();
    // });
    let isOpen = true;
    $("div.slide").click(function(){
        $('.slide').css('background-color', 'green').slideUp(1000).slideDown(1000);
        if(isOpen){
            $('.panel').slideUp("slow");
            isOpen = false;
        }else{
            $('.panel').slideDown("slow");
            isOpen = true;
        }
    });

    $('.text').click(function(){
        alert($('.text').text());
    })
    $('#submit').click(() => {
        $('#phone').css({"background": '#eee'});
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

