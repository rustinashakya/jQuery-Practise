
$("document").ready(function(){

    // 1 --> accordion used for a dropdown kinds :)))
    //section within the heading
    $("#div1").accordion({
        collapsible: true,
        icons: {header: "ui-icon-caret-1-s", activeHeader: "ui-icon-caret-1-n"}, 
        animate: 500,
        event: "mouseover"
    });

    $("#div2").accordion({
        collapsible: true,
        icons: {header: "ui-icon-caret-1-s", activeHeader: "ui-icon-caret-1-n"}, 
        animate: 500,
        event: "mouseover"
    });

    $("#div3").accordion({
        collapsible: true,
        icons: {header: "ui-icon-caret-1-s", activeHeader: "ui-icon-caret-1-n"}, 
        animate: 500,
        event: "mouseover"
    });

    $("#div4").accordion({
        collapsible: true,
        icons: {header: "ui-icon-caret-1-s", activeHeader: "ui-icon-caret-1-n"}, 
        animate: 500,
        event: "mouseover"
    });

})