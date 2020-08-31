// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
};

Dino.prototype.toFeetInches = function() { // Created but not used...
    let feet = Math.floor(this.height / 12);
    let inches = (this.height - (feet * 12))
    this.height = [feet, inches];
};



// Create Dino Objects

let dino = { // Couldn't figure out how to get data from a promise. It's taught later in the course so I went this route
    "Dinos": [{
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
};

let dinoArr = [];

for (let i = 0; i < dino["Dinos"].length; i++) {
    var currentDino = dino["Dinos"][i]
        //Create a new dino from the Dino Constructor
    var myDino = new Dino(currentDino.species, currentDino.weight, parseInt(currentDino.height), currentDino.diet, currentDino.where, currentDino.when, currentDino.fact);
    dinoArr.push(myDino); //Push the dino into the dinoArray
};



// Create Human Object
const human = {};

function toInches(obj) { // takes feet and inches from an object and creates a new property on the object called height
    let calcInches = (this.feet * 12) + this.inches;
    this.height = calcInches;
}
const boundToInches = toInches.bind(human); // Use Bind to set this value to human


// Use IIFE to get human data from form
// Could build form Check Method to make sure height & inches are greater than or equal 0

const getFormData = (function() { // IIFE runs immediately and returns a method that closes over Selectors. 
    const selectors = { // Create object of selectors to make them easier to update later
        name: '#name',
        feet: '#feet',
        inches: '#inches',
        weight: '#weight',
        diet: '#diet'

    }
    return { // return an object with methods that access form data
        getinput: function() { // getinput method assigns form values to human object properties
            human.name = document.querySelector(selectors.name).value;
            human.feet = parseInt(document.querySelector(selectors.feet).value);
            human.inches = parseInt(document.querySelector(selectors.inches).value);
            human.weight = document.querySelector(selectors.weight).value;
            human.diet = document.querySelector(selectors.diet).value;
        }
    }
})();


let facts = ["compareheight", "compareweight", "comparediet"]; // Create a facts array and add string values to be used later

for (let i = 0; i < dinoArr.length; i++) { // Add all the dino facts to the facts array
    facts.push(dinoArr[i].fact);
}


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 

function compareHeight(humanHeight, dinoArr) { // BONUS METHOD - check human height against all dinosaurs and show which dinosaurs user is taller than
    let smallerThanHuman = [];
    for (let i = 0; i < dinoArr.length; i++) {
        // if current dino is smaller than human, add to smallerThanHuman
        if (dinoArr[i].height < humanHeight) {
            smallerThanHuman.push(dinoArr[i]);
        }
    }
    human.smallDino = smallerThanHuman;
}


function compareDinoHeight(currentDino) { // compares the height of the dino passed into it with the value of the human height and returns true or false
    if (currentDino > human.height) {
        return false;
    }
    return true;
}


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

function compareDinoWeight(currentDino) { // compares the weight of the dino passed in with the human weight and returns true or false
    if (currentDino > human.weight) {
        return false;
    }
    return true;
}


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

function compareDinoDiet(currentDino) { // compares the diet of the dino passed in with the human weight and returns true or false
    if (currentDino == human.diet) {
        return true;
    }
    return false;
}



// Build Dino Tiles
function buildDinoTiles() {
    var cardArr = [];
    for (let i = 0; i < dinoArr.length; i++) { // Iterate over the dinoArr and add each card to an array called cardArr
        var currentDino = dinoArr[i]; // Get the current dino
        var title = currentDino.species; // Set variables to be used in cards equal to currentDino properties
        var img = "images/" + currentDino.species.toLowerCase() + ".png"; // look up PNG using the species name
        var fact = facts[Math.floor(Math.random() * facts.length)]; // grab a random item from facts array. 
        // Compare the chosen fact with three different strings. Each string corresponds with an if statement which runs a specific function. Depending on the compareResult value, set the fact content.
        if (fact == "compareheight") {
            let compareResult = compareDinoHeight(currentDino.height);
            if (compareResult == true) {
                fact = "You are taller than " + currentDino.species;
            };
            if (compareResult == false) {
                fact = "You are smaller than " + currentDino.species;
            };
        };

        if (fact == "compareweight") {
            let compareResult = compareDinoWeight(currentDino.weight);
            if (compareResult == true) {
                fact = "You are fatter than " + currentDino.species;
            };
            if (compareResult == false) {
                fact = "You are skinner than " + currentDino.species;
            };
        };

        if (fact == "comparediet") {
            let compareResult = compareDinoDiet(currentDino.diet);
            if (compareResult == true) {
                fact = "You have the same diet as the " + currentDino.species;
            };
            if (compareResult == false) {
                fact = "You have a different diet than the " + currentDino.species + ". They are a" + currentDino.diet + ".";
            };
        };


        var card = '<div class="grid-item"> <h3>' + title + '</h3> <img src="' + img + '"></img> <p>Fact: ' + fact + '<br></p> </div>'; // Build the card
        cardArr.push(card);
    }
    return cardArr;
}

function buildHumanTile() { // Creates a tile from the human object
    var img = "images/human.png";
    var title = human.name;
    var feet = human.feet;
    var inches = human.inches;
    var weight = human.weight;
    var diet = human.diet;

    let smallDinoNames = [] // Find which dinos are shorter than the human height and write them to an array.
    for (var i = 0; i < human.smallDino.length; i++) {
        currentDinoName = human.smallDino[i].species;
        smallDinoNames.push(currentDinoName);
    };
    smallDinoNames = smallDinoNames.join(', ');
    var humanCard = '<div class="grid-item"> <h3>' + title + '</h3> <img src="' + img + '"></img> <p>Feet: ' + feet + '<br><span>You are taller than: ' + smallDinoNames + '</span></p></div>';
    return humanCard;
}
// Look up the modern way to add html with InnerHTML as Variables


// Add tiles to DOM
function addTilesToDOM(cardArr, humanTileResult) { // Takes the array cardArr and appends each card to the inner html of the grid
    document.getElementById("grid").innerHTML = ''; // Set inner html of .grid to empty string in case we add a reset function
    // insert human object into 5th position
    cardArr.splice(4, 0, humanTileResult);
    for (let i = 0; i < cardArr.length; i++) {
        currentCard = cardArr[i];
        document.getElementById("grid").innerHTML += currentCard;
    }
}


// Remove form from screen
function hideForm() {
    var formElement = document.getElementById('dino-compare');
    formElement.classList.add('hidden');
}


// On button click, prepare and display infographic
const doEverything = function() { // function run on click event
    hideForm();
    getFormData.getinput(); // Runs method inside of IIFE to get form data and returns human object.
    boundToInches(); // Adds height as inches to human object
    compareHeight(human.height, dinoArr);
    var cardArrResult = buildDinoTiles(); // Array containing dino tiles
    var humanTileResult = buildHumanTile(); // takes form data and builds human tile
    addTilesToDOM(cardArrResult, humanTileResult);
}

document.querySelector('#btn').addEventListener('click', doEverything); // Add event listener to the Compare Me button that runs Create Objects on Click events