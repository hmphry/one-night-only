// Conformed Heights — change .conform to your element
var conformedBoxes = $(‘.conform’);

conformedBoxes.each(function(){
    // Gets height of element

    var height = parseFloat($(this).height()),
    // Get top and bottom margins
    marginBot = parseFloat($(this).children(‘.box’).css(“margin-bottom”)),
    marginTop = parseFloat($(this).children(‘.box’).css(“margin-top”)),
    paddingBot = parseFloat($(this).children(‘.box’).css(“padding-bottom”)),
    paddingTop = parseFloat($(this).children(‘.box’).css(“padding-top”)),
    // subtract margins from height
    height = height-((marginTop + marginBot)+(paddingTop + paddingBot));
    
    // Apply height to children
    $(this).children(‘.box’).css(“height”, height);
});
