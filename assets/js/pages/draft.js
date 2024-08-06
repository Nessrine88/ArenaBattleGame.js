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
  
}

function removeDraftedHeroFromTeam($article, id) {
    // Placeholder for removing a drafted hero from a team
}

function startDraft(e) {
    // Placeholder for starting the draft process
}

// Event listener for when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDraftSection();
});
