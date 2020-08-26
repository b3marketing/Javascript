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
    dinoArr.push(dino["Dinos"][i]);
};


// Create Human Object
function Human(name, feet, inches, weight, diet) { // Create Human Constructor Function
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
};

// Use IIFE to get human data from form

const getFormData = (function() {
    const selectors = { // Create object of selectors to make them easier to update later
        name: '#name',
        feet: '#feet',
        inches: '#inches',
        weight: '#weight',
        diet: '#diet'
    }
    return { // return an object with methods that access form data
        getinput: function() { // getinput method returns a new Human object called person

            let name = document.querySelector(selectors.name).value; // Instantiate closure'd variables
            let feet = document.querySelector(selectors.feet).value;
            let inches = document.querySelector(selectors.inches).value;
            let weight = document.querySelector(selectors.weight).value;
            let diet = document.querySelector(selectors.diet).value;

            return person = new Human(name, feet, inches, weight, diet);
        }
    }
})();


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array


// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic

const createObjects = function() { // function run on click events
    getFormData.getinput(); // Runs method inside of IIFE to get form data.
    console.log(person);
}

document.querySelector('#btn').addEventListener('click', createObjects); // Add event listener to the Compare Me button that runs Create Objects on Click events