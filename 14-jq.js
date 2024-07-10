
$("document").ready(function(){

    $("#dialogue").dialog({
        draggable:true, 
        resizable: true, 
        closeOnEscape: true, 
        modal: false, 
        autoOpen: true, 
        height: 300, 
        width: 500
    })

    // Here the draggable property of dialugt is initially true, which is made false on click to set button
    $("#btn1").click(function(){
        // alert("Get is working")
        // the getter method is used to get the value of any particular property
        var draggable = $("#dialogue").dialog("option", "draggable")
        alert(draggable)
    })

    $("#btn2").click(function(){
        // alert("Set is working")
        // the setter method is used to change that particular value
        $("#dialogue").dialog("option", "draggable", false)
        alert("draggable changes false to true")
    })

    $("#btn3").click(function(){
        var height  = $("#dialogue").dialog("option", "height")
        var width  = $("#dialogue").dialog("option", "width")
        alert(height)
        alert(width)
    })

    $("#btn4").click(function(){
        $("#dialogue").dialog("option", "height", 500)
        $("#dialogue").dialog("option", "width", 500)
        alert("NEW HEIGHT AND WIDTH")
    })


})