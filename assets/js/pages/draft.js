let superHeroes = [];

function initDraftSection() {
    // Fetch the list of heroes
    let draftHeroesCard = heroes();

    // Update good and bad heroes count
    function updateHeroCounts() {
        const goodHeroes = document.getElementById('good-count');
        goodHeroes.innerText = `(${getGoodHeroes(draftHeroesCard).length})`;

        const badHeroes = document.getElementById('bad-count');
        badHeroes.innerText = `(${getBadHeroes(draftHeroesCard).length})`;
    }
    
    updateHeroCounts();

    // Get alignment radio buttons
    const goodHeroesRadio = document.getElementById('alignment-good-battle');
    const badHeroesRadio = document.getElementById('alignment-bad-battle');

    // Handle radio change to update hero list based on alignment
    function handleRadioChange() {
        let draftHeroes;

        if (goodHeroesRadio.checked) {
            draftHeroes = getGoodHeroes(draftHeroesCard);
        } else if (badHeroesRadio.checked) {
            draftHeroes = getBadHeroes(draftHeroesCard);
        }

        // Render the hero list
        render_heroData('.draft-heroes-list', draftHeroes);

        // Re-query the DOM for newly rendered hero elements
        const heroElements = document.querySelectorAll('.draft-heroes-list .draft-card');

        // Attach click event listeners to newly rendered hero elements
        heroElements.forEach(hero => {
            hero.addEventListener('click', () => {
                toggleDraftedHero(hero);
                updateSelectedHeroes(hero);
            });
        });
    }

    goodHeroesRadio.addEventListener('change', handleRadioChange);
    badHeroesRadio.addEventListener('change', handleRadioChange);

    // Initial setup
    handleRadioChange();
}

// Function to toggle the drafted status of a hero
function toggleDraftedHero(hero) {
    hero.classList.toggle('selected');
}

// Function to update the superHeroes array and reflect changes in the DOM
function updateSelectedHeroes(hero) {
    if (hero.classList.contains('selected')) {
        if (!superHeroes.includes(hero)) {
            superHeroes.push(hero);
            hero.classList.add('battle-card');
        }
    } else {
        superHeroes = superHeroes.filter(selectedHero => selectedHero !== hero);
        hero.classList.remove('battle-card');
    }
    selection();

gatherSuperHeroesToBattle()
getDraftedHeroesStats();
}

// Function to update the selection display
function selection() {
    const heroesDiv = document.getElementById('heroes');
    heroesDiv.innerHTML = '';

    superHeroes.forEach(hero => {
        const clone = hero.cloneNode(true);
        clone.classList.remove('selected');
        heroesDiv.appendChild(clone);
    });
}

// Event listener for when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDraftSection();
});
