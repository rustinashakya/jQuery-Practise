
function func1()
{
    //__________ for jQuery
    //$("element-name").action

    //__________ alternative-for-javaScript
    //document.getElementByTagName(element-name)

    //__________ onclick the bg-color of div changes to orange
    // $("div").css('background-color', 'orange');

    //__________ onclick the font-style changes to italic for id (p1), id must be unique, only the first one of html  with particular id shows changes
    // $("#p1").css('font-style', 'italic');

    //__________ onclick the font-style of following class changes to italic, no matter how many classes the changes do take place
    // $(".para").css('font-style', 'italic');

    //__________ two or moe elements of same as well as different classes and ids can also be used
    // $("#div1, #div2").css('background-color', 'green');
    // $("#div1, li").css('background-color', 'pink');

    //__________ to fade the first parapraph outside the div, this can be done only for the first 
    // $("p:second").fadeToggle();

    //__________ to fade the paragraphs within div
    // $("div > p").fadeToggle();

    //__________ to fade even and odd items from list 
    // $("li:odd").fadeToggle();
    // $("li:even ").fadeToggle();

}