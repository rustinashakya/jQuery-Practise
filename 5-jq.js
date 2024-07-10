
// Animate-effect-usually-rake-three-different-parameters
// 1-for-the-CSS-properties
// 2-the-other-for-the-time-stamp
// 3-and-the-last-one-for-the-call-back-function

$("document").ready(function(){

    $("#btn").click(function(){
        $("#img").animate({
            left: '150px',
            opacity: '1', 
            height: '400px', 
            width: '400px'
        }, 5000, function(){
            alert("Animated")
        })
        $("#img").animate({
            left: '10px', 
            opacity: '0.4', 
            height: '250px', 
            width: '250px'
        }, 5000)
    });
    // 4-j-Query-performs-the-code-line-by-line-but-when-it-comes-to-effects-it-performs-the-later-tasks-if-the-current-one-is-taking-time
    // 5-therefore-to-overcome-this-we-can-use-callback-function-to-work-properly
    
    $("#btn2").click(function(){
        $("#img").slideUp(2000, function(){
            $("#img").slideDown(2000);
        })
    })

    $("#btn3").click(function(){
        $("#img").slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000)
    })
});


//$("imge").animate({}, 2000, function(){})











































