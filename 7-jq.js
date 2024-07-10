
$("document").ready(function(){
    // $("#btn1").click(function(){
    //     // -1-------- to add anything sort of stuff in the division 1 after 
    //     $(".div1").append("<p>The is appended paragraph 2</p>")
    // })

    $("#btn1").click(function(){
        // -2-------- to add anything sort of image in the division 1 after
        $(".div1").append('<img src="j.png" alt="j" id="img" width="70px">')
    })

    $("#btn2").click(function(){
        // -3-------- to add anything sort of image in the division 1 before
        $(".div1").prepend('<img src="j.png" alt="j" id="img" width="70px">')
    })

    $("#btn3").click(function(){
        // 4 --> this before method display the certain text/ image added before the div1
        $(".div1").before("This is before paragraph")
    })

    $("#btn4").click(function(){
        // 5 --> this before method display the certain text/ image added after the div1
        $(".div1").after("This is after paragraph")
    })

    $("#btn5").click(function(){
        // 6 --> removes the whole box and div 
        $(".div1").remove()
    })

    $("#btn6").click(function(){
        // 7 --> makes the div box completely empty 
        $(".div1").empty()
    })

})