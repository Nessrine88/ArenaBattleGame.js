
/* your functions */



function setArenaVillains() {
    const heroesArray = heroes();
    const battleCards = getRandomHeroes(heroesArray);
    const villains = battleCards.slice(0, 5);
    render_heroData('#villains', villains);
}
function getDraftedHeroesStats() {
    // Get DOM elements
    const progressBar = document.getElementById('progress-bar');
    const costProgress = document.getElementById('cost-progress');
    const priorityProgress = document.getElementById('priority-progress');

    const costProgressCount = document.getElementById('cost-progress-count');
    const priorityProgressCount = document.getElementById('priority-progress-count');
    const selectedCardsCount = document.getElementById('total-amount');

    console.log(superHeroes);

    let totalCostValue = 0;
    let totalPriorityValue = 0;

    // Calculate total cost and priority from the selected heroes
    superHeroes.forEach(hero => {
        const costElement = hero.querySelector('.hero-cost');
        const priorityElement = hero.querySelector('.priority');

        if (costElement) {
            totalCostValue += parseFloat(costElement.innerText) || 0;
        }
        if (priorityElement) {
            totalPriorityValue += parseFloat(priorityElement.innerText) || 0;
        }
    });

    // Compute progress percentages
    const numSelectedCards = superHeroes.length;
    const maxAmount = getConfigAmount();
    const maxCost = getConfigTotalCost();
    const maxPriority = getConfigTotalPriority();

    progressBar.style.width = (numSelectedCards / maxAmount * 100) + '%';
    costProgress.style.width = (totalCostValue / maxCost * 100) + '%';
    priorityProgress.style.width = (totalPriorityValue / maxPriority * 100) + '%';

    // Update progress count elements
    costProgressCount.innerText = `${totalCostValue}/${maxCost}`;
    priorityProgressCount.innerText = `${totalPriorityValue}/${maxPriority}`;
    selectedCardsCount.innerText = `${numSelectedCards}/${maxAmount}`;

    // Check constraints and show alert if necessary
    if (numSelectedCards > maxAmount || totalCostValue > maxCost || totalPriorityValue > maxPriority) {
        alert(`You can choose only ${maxAmount} cards, and the total cost must not exceed ${maxCost} and total priority must not exceed ${maxPriority}.`);
    }
}


document.addEventListener('DOMContentLoaded',()=> {
setArenaVillains();
getDraftedHeroesStats() 
})