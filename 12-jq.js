
$("document").ready(function(){
    $("#btn1").click(function(){
        $("#dialogue").dialog("open");
    })

    $("#dialogue").dialog({
        title: "Title using property", 
        draggable: false, 
        resizable: false, 
        closeOnEscape: false, 
        modal: true, 
        autoOpen: false
    })
})