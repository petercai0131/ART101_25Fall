// add a button titled click me
let count = 0;
let colors = ["Orchid","Coral","HotPink","Plum"];
// when it is clicked
$("#needy-button").click(function(){
    // show how many times
    // add one to the total number
    // show the total number
    $("#needy-button").html("Clicks: " + count +" Color: " + colors[count]);
    $("body").css({
        "background-color": colors[count],
    });
    count = count + 1;
    // if (count > 3){
    //     count = 0;
    // };
});
// a top limit