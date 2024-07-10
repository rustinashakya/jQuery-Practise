// function func1(){

//     //___________ the function below change sthe width of the image
//     document.getElementById("img1").style.width="500px";
// }

// $("button").click(func1);
// function func1(){
//     $("#img1").css('width', '500px');
// }

// $("button").click(function () {
//   $("#img1").css("width", "500px");
// });




// //________________ ready event which runs only after the html is fully loaded, it's a good habot of using ready function
// $("document").ready(function () {

//   //____________ works only on double click , changes the imgae width to 500px
// //   $("button").dblclick(function () {
// //     $("#img1").css("width", "500px");
// //   });

//     $("#img1").mouseenter(function(){
//         $("#img1").css('width', '500px');
//     });

//     $("#img1").mouseleave(function(){
//         $("#img1").css('width', '250px');
//     });



  
// });








// EVENTS IS SOMETHING THAT HAPPENS, WHICH MAYBE BE MAKING SOMETHING WORK ON CLICKING A BUTTON 

//============================ in-js
//================================================================================
/*function func1(){
    document.getElementById("img1").style.width="500px";
}*/


//============================= in-jQuery
//===============================================================================
/*
$("button").click(func1);
function func1(){
    $("#img1").css('width', '500px');
}
*/

//============================= creating-anonynous-function [w/o writing function and function again and again]
//================================================================================
/*
$("button").click(function(){
    $("#img1").css('width', '500px');
});
*/

//============================= ready-function [this-ready-function-let-the-js-script-to-run-only-after-the-whole-html-document-fully-loads-.-this-is-a-good-methos-to-use-ready-function]
//================================================================================
$("document").ready(function(){

    $("button").dblclick(function(){
        $("#img1").css('width', '500px');
    });

    // on-hover-in-image-width-increases-to-500px
    /*
    $("#img1").mouseenter(function(){
        $("#img1").css('width', '500px');
    });
    */

    // on-hover-out-image-width-decreases-to-250px
    /*
    $("#img1").mouseleave(function(){
        $("#img1").css('width', '250px');
    });
    */

    // the-both-mounseenter-and-mouseleave-can-be-added-to-one-hover
    $("#img1").hover(func1, func2)
    function func1(){
        $("#img1").css('width', '500px');
    }
    function func2(){
        $("#img1").css('width', '250px');
    }

});
