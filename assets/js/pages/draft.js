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
                if (hero.classList.contains('selected')) {
                    if (!superHeroes.includes(hero)) {
                        superHeroes.push(hero);
                        hero.classList.add('battle-card');
                        // Append to heroes div if not already there
                        selection();
                    }
                } else {
                    // Remove from superHeroes array if deselected
                    superHeroes = superHeroes.filter(selectedHero => selectedHero !== hero);
                    hero.classList.remove('battle-card');
                    // Update selection display
                    selection();
                }
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

function selection() {
    const heroesDiv = document.getElementById('heroes');
    // Clear previously appended heroes
    heroesDiv.innerHTML = '';
    superHeroes.forEach(hero => {
        if (!heroesDiv.contains(hero)) {
            heroesDiv.appendChild(hero.cloneNode(true));
        }
    });
}

// Placeholder for starting the draft process
function startDraft(e) {}

// Event listener for when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDraftSection();
});
