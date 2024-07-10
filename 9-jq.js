
$("document").ready(function(){

    // 1 --> datepicker method to select a date
   $("#date").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true, 
        showButtonPanel: true, 
        changeMonth: true, 
        changeYear: true, 
        minDate: new Date(2016,0,1), 
        maxDate: new Date(2026,0,1), 
        numberOfMonths: 2
   }); 
})