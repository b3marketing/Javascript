// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

Dino.prototype.toFeetInches = function() {
    let feet = Math.floor(this.height / 12);
    let inches = (this.height - (feet * 12))
    this.height = [feet, inches];
}


// Create Dino Objects
const url = 'http://localhost:3000/Dinos'; // Get Dinos JSON from file.

fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        // Create and append the li's to the ul
    })
})

const dinoTest = new Dino(
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous"
);
// Create Human Object

// Use IIFE to get human data from form
const formData = (function() {
    document.querySelector('.btn').addEventListener('click', function() {
        // write what should happen when button is clicked.
    })
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