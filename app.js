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

Dino.prototype.toFeetInches = function() {
    let feet = Math.floor(this.height / 12);
    let inches = (this.height - (feet * 12))
    this.height = [feet, inches];
};



// Create Dino Objects

let dino = {
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
    //Push the dino into the dinoArray
    dinoArr.push(myDino);
};

// Store all dino facts in an array 


// Create Human Object
const human = {};

// takes feet and inches from an object and creates a new property call inches
function toInches(obj) {
    let calcInches = (this.feet * 12) + this.inches;
    this.height = calcInches;
}
const boundToInches = toInches.bind(human);


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
        getinput: function() { // getinput method returns a new Human object called person

            human.name = document.querySelector(selectors.name).value; // Instantiate closed over variables
            human.feet = parseInt(document.querySelector(selectors.feet).value);
            human.inches = parseInt(document.querySelector(selectors.inches).value);
            human.weight = document.querySelector(selectors.weight).value;
            human.diet = document.querySelector(selectors.diet).value;
        }
    }
})();


let facts = ["compareheight", "compareweight", "comparediet"];

for (let i = 0; i < dinoArr.length; i++) {
    facts.push(dinoArr[i].fact);
}
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 

// check human height against all dinosaurs show which dinosaurs you are taller than
function compareHeight(humanHeight, dinoArr) {
    let smallerThanHuman = [];
    for (let i = 0; i < dinoArr.length; i++) {
        // if current dino is smaller than human, add to smallerThanHuman
        if (dinoArr[i].height < humanHeight) {
            smallerThanHuman.push(dinoArr[i]);
        }
    }
    human.smallDino = smallerThanHuman;
}


function compareDinoHeight(currentDino) {
    if (currentDino > human.height) {
        return false;
    }
    return true;
}




// Result string "you are taller/shorter than this dinosaur"

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

function compareDinoWeight(currentDino) {
    if (currentDino > human.weight) {
        return false;
    }
    return true;
}




// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

function compareDinoDiet(currentDino) {
    if (currentDino == human.diet) {
        return true;
    }
    return false;
}





// Facts should be an array of Dino Facts & result of the three methods above. 



// Build Dino Tiles
function buildDinoTiles() { // Use dinoArr to build an array of cards called 
    var cardArr = [];
    for (let i = 0; i < dinoArr.length; i++) { //iterate over the dinoArr and add each card to an array called cardArr
        var currentDino = dinoArr[i];
        var title = currentDino.species;
        var img = "images/" + currentDino.species.toLowerCase() + ".png"; // look up PNG using the species name
        // then grab random fact to insert into dino tile. 
        // if the fact chosen is the compareDinoHeight 
        var fact = facts[Math.floor(Math.random() * facts.length)]; // grab random item from facts array. 
        //Check the random fact
        //If the random fact contains the species of the currentDino (stegosaurus)
        //Then check the height
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


        var card = '<div class="grid-item"> <h3>' + title + '</h3> <img src="' + img + '"></img> <p>Fact: ' + fact + '<br></p> </div>';
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
    let smallDinoNames = []
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
    document.getElementById("grid").innerHTML = ''; // Set inner html of .grid to empty string
    // insert human object into 5th position using arr.splice(index, 0, item);
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
const doEverything = function() { // function run on click events
    hideForm();
    getFormData.getinput(); // Runs method inside of IIFE to get form data and returns human object.
    boundToInches(); // Adds height as inches to human object
    compareHeight(human.height, dinoArr);
    var cardArrResult = buildDinoTiles(); // Array containing dino tiles
    var humanTileResult = buildHumanTile(); // takes form data and builds human tile
    addTilesToDOM(cardArrResult, humanTileResult);
}

document.querySelector('#btn').addEventListener('click', doEverything); // Add event listener to the Compare Me button that runs Create Objects on Click events