// let _hallOfFame = [];

// function addToHallOfFame(hero) {
        
// }


// function addNewHeroToHallOfFame(hero){

// }

// function getHeroesFromHallOfFame(){
    
// }

// function getHallOfFame(){
//     return _hallOfFame;
// }


// /* your functions */

// Initialize _hallOfFame from localStorage on page load
// Define functions that use render_heroData
// Hall of Fame Management
// Hall of Fame Management
// Hall of Fame Management
let _hallOfFame = [];

// Initialize _hallOfFame from localStorage on page load

// Helper function to lookup a hero by name
function lookupHero(name, heroes) {
    const foundHero = heroes.find(hero => hero.name === name);
    console.log(`Looking up hero ${name}:`, foundHero);
    return foundHero;
}


function initializeHallOfFame() {
    const savedHallOfFame = localStorage.getItem('winners');
    let topHeroes = [];

    if (savedHallOfFame) {
        _hallOfFame = JSON.parse(savedHallOfFame);
        console.log('winners', _hallOfFame);

        // Assuming heroes() returns a list of all possible heroes
        _hallOfFame.forEach(element => {
            const hero = lookupHero(element.name, heroes());
            if (hero) {
                topHeroes.push(hero);
            }
        });

        console.log(topHeroes);
        return topHeroes;
    }
}

// Initialize _hallOfFame when the script runs
document.addEventListener('DOMContentLoaded', () => {
    initializeHallOfFame();
});

