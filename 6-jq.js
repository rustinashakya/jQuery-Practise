
//----- 1 ---------------------------------- DOM- Document-Object-Model 
$("document").ready(function(){

    // $(".div1").click(function(){
    //     //----- 2 -------------------------- the method gives the whole thing present in a particular tag
    //     var x = $(".p1").html();
    //     $("#span1").text(x) //----- 3 ---------- the whole html code will be displayed in this particular span tag
    // })
    

    // $(".div1").click(function(){
    //     //------ 4 ----------------------------- this shows alert of the html code present in a particular tag
    //     alert($(".p1").html());
    // })

    // $(".p1").click(function(){
    //     // --- 5 ----------------------------------gets the value of the attribute i.e. class here
    //     alert($(".p1").attr("class"))
    // })

    // $("#btn1").click(function(){
    //     $(".p1").attr("id", "idchange")
    // })

    // $(".p1").click(function(){
    //     alert($(".p1").attr("id"))
    // })

    // COLOR CODE DISPLAY ON ALERT 
    $("#btn1").click(function(){
        $(".div1").css("background-color", "green")
    })

    $(".div1").click(function(){
        alert($(".div1").css("background-color"));
    })



});