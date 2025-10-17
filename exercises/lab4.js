// declaring an array with name myCommutes
let myCommutes = ["UCSC Loop shuttle",
    "Caltrain + Highway 17 Express",
    "E-bike",
    "Boosted longboard",
    "Motorcycle",
    "Walking under the redwoods",
    "Lyft ride"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Motorcycle",
    engineCC: 675,
    avgMinutesDoorToDoor: 10,
    hasABS: true,
    gearChecklist: ["full-face helmet",
        "armored jacket",
        "gloves",
        "rain pants",
        "U-lock"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[4] + ", " + myCommutes[6] + ". </p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", engineCC - " + myFavouriteCommute.engineCC + ", must bring gears: " + myFavouriteCommute.gearChecklist[0] + " and " + myFavouriteCommute.gearChecklist[2] + ". </p>";

$("#output").html(megaSentence);