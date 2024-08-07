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

// Function to initialize the draft section
function initDraftSection() {
    const draftHeroes = document.querySelectorAll('.draft-card');

    draftHeroes.forEach(hero => {
        hero.addEventListener('click', () => {
            toggleDraftedHero(hero);
        });
    });
}

// Function to toggle the drafted status of a hero
function toggleDraftedHero(hero) {
    hero.classList.toggle('selected');

}


function addDraftedHeroToTeam($article, id) {

    const draftHero = document.querySelector(`#hero-${id}`);

    // Clone the drafted hero node and add to the battle section
    const clonedHero = draftHero.cloneNode(true);
    clonedHero.classList.remove('draft-card'); // Remove draft-specific styling
    clonedHero.classList.add('heroes'); // Add battle-specific styling
    $article.appendChild(clonedHero);

    // Remove the drafted hero from the draft section
    draftHero.parentNode.removeChild(draftHero);
}

// Function to remove a drafted hero from the battle section and possibly add back to draft section
function removeDraftedHeroFromTeam($article, id) {
    const battleHero = document.querySelector(`#hero-${id}`);
    const draftSection = document.querySelector('.draft-section');

    // Clone the battle hero node and add back to the draft section
    const clonedHero = battleHero.cloneNode(true);
    clonedHero.classList.remove('battle-card'); // Remove battle-specific styling
    clonedHero.classList.add('draft-card'); // Add draft-specific styling
    draftSection.appendChild(clonedHero);

    // Remove the battle hero from the battle section
    battleHero.parentNode.removeChild(battleHero);
}
function startDraft(e) {
    // Placeholder for starting the draft process
}

// Event listener for when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDraftSection();
});
