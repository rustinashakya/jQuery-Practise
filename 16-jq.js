
$(document).ready(function(){
    //this will help to sort the list of elements 
    $(".sort").sortable({
        opacity: 0.5, 
        cursor: "grabbing", 
        containment: "parent", 
        delay: 300, 
        distance: 50
    })
})