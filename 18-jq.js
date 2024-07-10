
$(document).ready(function(){
    $("#dialog").dialog({
        draggable: true, 
        resizable: true, 
        closeOnEscape: true, 
        modal: false, 
        autoOpen: true
    })

    $("#date").datepicker({
        showOtherMonths: true, 
        changeMonth: true, 
        changeYear: true
    })
})