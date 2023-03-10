// Write your JavaScript code here!

// const { formSubmission } = 
// require("./scriptHelper");

window.addEventListener("load", function() {
    console.log(`Loaded!`);
    const form = document.querySelector("form");
    form.addEventListener("submit", function event(){
        event.preventDefault();
        //DOM elements list
        let pilotInput = document.getElementById.querySelector("input[name=pilotName]");
        let copilotInput = document.getElementById.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.getElementById.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = document.getElementById.querySelector("name=[cargoLevel]");
        
        
        pilot = pilotInput.value;
        copilot = copilotInput.value;
        fuelLevel = fuelLevelInput.value;
        cargoLevel = cargoLevelInput.value;

        let list = [];
        //  document.getElementById('faultyItems');

//formSubmission updates and validates list
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
// error here? 

    })
   
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            let planet = pickPlanet(listedPlanets);
            let name = planet.name;
            let diameter = planet.diameter;
            let star = planet.star;
            let distance = planet.distance;
            let moons = planet.moons;
            let imageUrl = planet.image;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
   
});