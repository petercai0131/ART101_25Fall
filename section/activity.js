let score = 0;

$("#count").click(function(){
    score += 1;
})

function checkMood(score){
    if(score > 7){
        return "ex1";
    } else if (score > 4){
        return "ex2";
    } else {
        return "ex3";
    }
}

$("#showMood").click(function(){
    if (checkMood(score) == "ex1"){
        $("body").css("background-color","red");
    } else if(checkMood(score) == "ex2"){
        $("body").css("background-color","blue");
    } else {
        $("body").css("background-color","green");
    }
})

$("#reset").click(function(){
    score = 0;
    $("body").css("background-color","white");
})