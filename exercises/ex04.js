// add a button titled click me
let count = 0;
// when it is clicked
$("#needy-button").click(function(){
    // show how many times
    // add one to the total number
    count = count + 1;
    // show the total number
    $("#needy-button").html("You clicked me " + count +" times!");
});
// a top limit