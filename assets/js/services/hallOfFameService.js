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

        // Sort heroes by win count in descending order
        topHeroes.sort((a, b) => b.winCount - a.winCount);

        // Slice the top 10 heroes (or adjust the number as needed)
        const topHeroesToDisplay = topHeroes.slice(0, getConfigHallOfFame());

        // Render the data
        render_heroData("#hall-of-fame", topHeroesToDisplay, 'hall-of-fame-ele');
        
        // Update win counts in the rendered elements
        document.querySelectorAll('.hall-of-fame-ele').forEach(element => {
            const heroName = element.querySelector('.hero-name').innerText;
            const hero = topHeroesToDisplay.find(h => h.name === heroName);
            if (hero) {
                const rank = element.querySelector('.win-count');
                rank.innerText = hero.winCount;
            }
        });

        return topHeroesToDisplay;
    }
    return [];
}

// Initialize hall of fame when the script runs
document.addEventListener('DOMContentLoaded', () => {
    initializeHallOfFame();
});
