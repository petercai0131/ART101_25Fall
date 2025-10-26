// add a button titled click me
let count = 0;
let colors = ['#fcf0f1',"#facfd2","#ffabaf","#ff8085","#f86368","#e65054"];
// when it is clicked
$("#needy-button").click(function(){
    // show how many times
    // add one to the total number
    // show the total number
    let reminder = count % colors.length;

    $("#needy-button").html("Clicks: " + (count+1) +" Color: " + colors[count]);
    $("body").css({
        "background-color": colors[reminder],
    });
    count = count + 1;

    if ( count == 6 ) {count=0;}
    // if (count > 3){
    //     count = 0;
    // };
});
// a top limit