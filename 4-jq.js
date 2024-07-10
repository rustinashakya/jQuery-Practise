
$("document").ready(function(){

    //=============================== this-will-hide-the-image
    //================================================================================
    $("#btn1").click(function(){
        $("#img1").hide(100);      //====================================== time here
    });

    //=============================== this-will-show-the-image
    //================================================================================
    $("#btn2").click(function(){
        $("#img1").show();
    });

    //=============================== this-will-toggle-i.e.-both-show-and-hide-the-image
    //================================================================================
    $("#btn3").click(function(){
        $("#img1").toggle();
    });

    //=============================== fade-in-button
    //==================================================================================
    $("#btn4").click(function(){
        $("#img1").fadeIn(1000);
    });

    //=============================== fade-out-button
    //==================================================================================
    $("#btn5").click(function(){
        $("#img1").fadeOut(1000);
    });

    //=============================== fade-toggle-button (in-and-out)
    //==================================================================================
    $("#btn6").click(function(){
        $("#img1").fadeToggle(1000);
    });

    //=============================== slide-up-button (slides-the-image-up)
    //==================================================================================
    $("#btn7").click(function(){
        $("#img1").slideUp(5000);
    });

    //=============================== slide-down-button (slides-the-image-down)
    //==================================================================================
    $("#btn8").click(function(){
        $("#img1").slideDown();
    });

    //=============================== slide-toggle-button (slides-the-image-up-and-down)
    //==================================================================================
    $("#btn9").click(function(){
        $("#img1").slideToggle();
    });

    //=============================== stop-button (stops-the-effect-in-between-when-clicked-while-the-effect-is-taking-place)
    //==============================================================================
    $("#btn10").click(function(){
        $("#img1").stop();
    }); 

    //=============================== for-animate-button===========================================================
    //===========================================================================================================
    $("#btn").click(function(){
        $("#img2").animate({
            left:'150px',
            opacity: '1',
            height:'400px',
            width:'400px'
        }, 'fast')    //================= time-here      //=============================== for-now-only-these-two-parameters
    });

    //=============================== for-animate-back-button (resize-back-to-previous)===========================================================
    //===========================================================================================================
    $("#btnBack").click(function(){
        $("#img2").animate({
            left:'10px',
            opacity: '0.4',
            height:'250px',
            width:'250px'
        }, 'fast')    //================= time-here      //=============================== for-now-only-these-two-parameters
    });

});