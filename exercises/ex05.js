var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function () {

    function makeImage() {
        if (colors[colorCount] == "Orchid") {
            $("body").append("<img width=50 src='images/Futura_Jump-Off_Print_8-11-1064x1080.jpg'>");
        }
    }


    if (count < 5) { mood = "gresh and happy"; }
    else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
    else { mood = "so tired"; }
    $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + mood);
    $("body").css("background-color", colors[colorCount]);

    makeImage();

    count = count + 1;
    colorCount = colorCount + 1;
    if (colorCount == 4) { colorCount = 0; }
});