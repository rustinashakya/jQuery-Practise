
$(document).ready(function(){
    $("#img1").resizable({
        //animate: true, 
        //containment: "parent", 
        maxHeight: 400, 
        maxWidth: 400, 
        minWidth: 150, 
        //ghost: true,        //semi-transparent image
        aspectRatio: 16/16      //helps to resize in this ratio of width and height
    })
})