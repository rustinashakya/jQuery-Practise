
$(document).ready(function(){
    $(".box").draggable({
        // axis: "x",                  //draggable only in the x-axis
        cursor: "grabbing", 
        opacity: 0.5, 
        // containment: "parent",  //using containment limit the dragging area of the particular element 
        //grid: [300, 300]           //limiting the dragging area to 300,300
        snap: true, 
        snapTolerance: 100         //if the distance between the boxes are 100 or less then 100, then the boxes will stick together
    })
})