// function initDraftSection() {

// }


// function draftHero(e) {
    
// }

// function toggleDraftedHero($target){
    
// }

// function addDraftedHeroToTeam($article, id) {
    
// }

// function removeDraftedHeroFromTeam($article, id) {
    
// }

// function startDraft(e) {
    
// }


/* your funtions */

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
    
    updateHeroCounts(); // Update counts initially

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
            });
        });
        
        console.log(draftHeroes);  
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

// Function to add a drafted hero to the team
function addDraftedHeroToTeam($article, id) {
    const draftHero = document.querySelector(`#hero-${id}`);
    const clonedHero = draftHero.cloneNode(true);
    clonedHero.classList.remove('draft-card');
    clonedHero.classList.add('heroes');
    $article.appendChild(clonedHero);
    draftHero.parentNode.removeChild(draftHero);
}

// Function to remove a drafted hero from the team and possibly add back to draft section
function removeDraftedHeroFromTeam($article, id) {
    const battleHero = document.querySelector(`#hero-${id}`);
    const draftSection = document.querySelector('.draft-section');
    const clonedHero = battleHero.cloneNode(true);
    clonedHero.classList.remove('battle-card');
    clonedHero.classList.add('draft-card');
    draftSection.appendChild(clonedHero);
    battleHero.parentNode.removeChild(battleHero);
}

// Placeholder for starting the draft process
function startDraft(e) {}

// Event listener for when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDraftSection();
});

