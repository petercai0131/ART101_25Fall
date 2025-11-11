function askNumber() {
    $("body").css("background-image", "");
    $("h1").css("color","black");
    $("#output").css("color","black");
    let userNumber = prompt("Guess the bird?");
    

    if (userNumber == "Red") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Red.webp'>");
    }
    else if (userNumber == "Blue") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Blue.webp'>");
    }
    else if (userNumber == "Bomb") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Bomb.webp'>");
    }
    else if (userNumber == "Bubbles") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Bubbles.webp'>");
    }
    else if (userNumber == "Ice") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Ice.webp'>");
    }
    else if (userNumber == "Matilda") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Matilda.webp'>");
    }
    else if (userNumber == "Stella") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Stella.webp'>");
    }
    else if (userNumber == "Terence") {
        $("#output").html("You got it!");
       $("#output").append("<img width=200 src='images/Terence.webp'>");
    }
    else {
        $("#output").html("Lil Loser!!!!");
        $("body").css("background-image", "url('images/Pig.webp')");
        $("#output").css("color","white");
        $("#output").css("font-size","50px");
        $("h1").css("color","white");
    }

}

$("#good-button").click(function () {
    askNumber();
});