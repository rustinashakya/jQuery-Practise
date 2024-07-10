
// var language = 

$("document").ready(function(){
    $("#input").autocomplete({
        //choose within array 
        //two curly braces: one for source and one for customization
        source: ["HTML", "CSS", "JS", "jQuery", "PHP", "Java", "Python", "C", "C++", "C#", "Perl", "Ruby", "Scala", "COBOL", "Basic", "Fortran", "Lisp", "TypeScript"]
    },{
        //after how much time the autocomplete suggestion is to be shown 
        delay: 500, 
        //minLength that after how many words the suggestion is shown 
        minLength: 1, 
        //the first one is shown focused in default blue colour
        autoFocus: true
    })
});