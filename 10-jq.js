
$("document").ready(function(){
    $("#tool").tooltip({
        track: true, 
        content: "This is the place for name",
        show: {
            effect: "pulsate", 
            duration: 2000
        }, 
        hide: {
            effect: "explode", 
            duration: 2000
        }
    });
})