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

// Helper function to lookup a hero by name
// Helper function to lookup a hero by name
function lookupHero(name, heroes) {
    const foundHero = heroes.find(hero => hero.name === name);
    console.log(`Looking up hero ${name}:`, foundHero);
    return foundHero;
}

function countHeroWins(heroArray) {
    return heroArray.reduce((acc, hero) => {
        const name = hero.name;
        acc[name] = (acc[name] || 0) + 1;
        return acc;
    }, {});
}

function initializeHallOfFame() {
    const savedHallOfFame = localStorage.getItem('winners');
    let topHeroes = [];

    if (savedHallOfFame) {
        const _hallOfFame = JSON.parse(savedHallOfFame);
        const heroCounts = countHeroWins(_hallOfFame);
        
        console.log(heroCounts);

        const allHeroes = heroes(); // Retrieve the list of all heroes
        for (const name in heroCounts) {
            const hero = lookupHero(name, allHeroes);
            if (hero) {
                topHeroes.push({...hero, winCount: heroCounts[name]});
            }
        }

        // Render the data
        render_heroData("#hall-of-fame", topHeroes, 'hall-of-fame-ele');
        
        // Update win counts in the rendered elements
        document.querySelectorAll('.hall-of-fame-ele').forEach(element => {
            const heroName = element.querySelector('.hero-name').innerText;
            const hero = topHeroes.find(h => h.name === heroName);
            if (hero) {
                const rank = element.querySelector('.win-count');
                rank.innerText = hero.winCount;
            }
        });

        return topHeroes;
    }
    return [];
}

// Initialize hall of fame when the script runs
document.addEventListener('DOMContentLoaded', () => {
    initializeHallOfFame();
});
