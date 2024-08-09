
/* your functions */



function setArenaVillains() {
    const battleCards = heroes();
    const villains = battleCards.slice(0, 5)
    villains.forEach(villain => {
        villain.cost = calculateCost(villain);
        villain.priority = calculatePriority(villain);
    });

    villains.sort((a, b) => {
        if (b.priority !== a.priority) {
            return b.priority - a.priority;
        }
        return b.cost - a.cost;
    });
    render_heroData('#villains', villains);
    
    return villains;
}



function getDraftedHeroesStats() {
    // Get DOM elements
    const progressBar = document.getElementById('progress-bar');
    const costProgress = document.getElementById('cost-progress');
    const priorityProgress = document.getElementById('priority-progress');

    const costProgressCount = document.getElementById('cost-progress-count');
    const priorityProgressCount = document.getElementById('priority-progress-count');
    const selectedCardsCount = document.getElementById('total-amount');



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

    // Check constraints
    if (numSelectedCards > maxAmount || totalCostValue > maxCost || totalPriorityValue > maxPriority) {
        alert(`You can choose only ${maxAmount} cards, and the total cost must not exceed ${maxCost} and total priority must not exceed ${maxPriority}.`);
        return; 
    }


    // Update progress bars and count elements only if constraints are not exceeded
    progressBar.style.width = (numSelectedCards / maxAmount * 100) + '%';
    costProgress.style.width = (totalCostValue / maxCost * 100) + '%';
    priorityProgress.style.width = (totalPriorityValue / maxPriority * 100) + '%';

    // Update progress count elements
    costProgressCount.innerText = `${totalCostValue}/${maxCost}`;
    priorityProgressCount.innerText = `${totalPriorityValue}/${maxPriority}`;
    selectedCardsCount.innerText = `${numSelectedCards}/${maxAmount}`;
}



document.addEventListener('DOMContentLoaded',()=> {
setArenaVillains();
getDraftedHeroesStats() 
})