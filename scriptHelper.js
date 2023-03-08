// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `

}

function validateInput(testInput) {
       if (testInput === "" || testInput === 0) {
        return `Empty.`
       } else if (isNaN(testInput)) {
        return `Not a number.`
       } else if (Number) {
        return `Is a number.`
      }
   }







function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //DOM element list
        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let launchStatus = document.getElementById('launchStatus');
        let cargoStatus = document.getElementById('cargoStatus');
    //fields cant be left empty: use *alerts* to validate this
        if (validateInput(pilot) === "" || validateInput(copilot) === "" ||
        validateInput(fuelLevel) === "" || validateInput(cargoLevel) === "") {
            alert(`All fields required.`);
        }
    //copilot and pilot have to be strings, fuel and cargo levels have to be numbers{
        else if (validateInput(fuelLevel) === NaN || validateInput(cargoLevel) === NaN) {
                alert(`Make sure to enter valid information for each field!`)
            } else if (validateInput(pilot) === Number || validateInput(copilot) === Number){
                alert(`Make sure to enter valid information for each field!`)
            } else {
            //update pilot/copilot status to include names
                pilotStatus.innerHTML = `Pilot ${pilot} is ready.`;
                copilotStatus.innerHTML = `Co-pilot ${copilot} is ready.`;
                list.style.visibility = 'hidden';
            }
        //update faulty items: change color (red=not ready, green=ready) based on fuel/cargo levels
        if(Number(fuelLevel) < 10000){
        fuelStatus.innerHTML = `Not enough fuel for journey.`;
        launchStatus.innerHTML = `Shuttle not ready for launch.`;
        launchStatus.style.color = `red`;
        list.style.visibility = 'visible';
         } else if (Number(cargoLevel) > 10000){
            cargoStatus.innerHTML = `Cargo too heavy for takeoff.`;
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            launchStatus.style.color = `red`;
            list.style.visibility = 'visible';
            } else if (Number(cargoLevel) < 10000 && Number(fuelLevel > 10000)){
                cargoStatus.innerHTML = `Cargo light enough for takeoff.`;
                fuelStatus.innerHTML = `Enough fuel for journey.`;
                launchStatus.innerHTML = `Shuttle is ready for launch.`;
                launchStatus.style.color = `green`;
                list.style.visibilty = 'visible';
   }
}
    

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
