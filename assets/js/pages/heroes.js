

function initHeroesSection() {
    const attributeDropdown = document.getElementById("attribute-dropdown");
    const sortDropdown = document.getElementById("sort-dropdown");
    const filterButton = document.getElementById("filter-button");
    const raceCheckboxes = document.querySelectorAll("input[name='race']");
    const alignmentGood = document.getElementById("alignment-good");
    const alignmentBad = document.getElementById("alignment-bad");
    const alignmentNeutral = document.getElementById("alignment-neutral");
    const heroFilter = document.getElementById("hero-filter");

    filterButton.addEventListener("click", function() {
        filterHeroes(attributeDropdown.value, sortDropdown.value, getSelectedCheckboxes(raceCheckboxes), alignmentGood.checked, alignmentBad.checked, alignmentNeutral.checked, heroFilter.value);
    });
}

function getSelectedCheckboxes(checkboxes) {
    const selectedCheckboxes = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedCheckboxes.push(checkbox.value);
        }
    });
    return selectedCheckboxes;
}

function filterHeroes(attribute, sort, races, alignmentGood, alignmentBad, alignmentNeutral, heroFilter) {
let filteredHeroes = heroes();

    // Filter based on attribute (if needed)
    if (attribute !== "all") {
        filteredHeroes = filteredHeroes.filter(hero => hero.attribute === attribute);
    }

    // Filter based on races
    if (races.length > 0) {
        filteredHeroes = filteredHeroes.filter(hero => races.includes(hero.race));
    }

    // Filter based on alignment
    if (alignmentGood) {
        filteredHeroes = filteredHeroes.filter(hero => hero.alignment === 'good');
    } else if (alignmentBad) {
        filteredHeroes = filteredHeroes.filter(hero => hero.alignment === 'bad');
    } else if (alignmentNeutral) {
        filteredHeroes = filteredHeroes.filter(hero => hero.alignment === 'neutral');
    }

    // Filter based on hero name filter
    if (heroFilter.trim() !== "") {
        filteredHeroes = filteredHeroes.filter(hero => hero.name.toLowerCase().includes(heroFilter.toLowerCase()));
    }

    // Sort heroes (if needed)
    if (sort === "name") {
        filteredHeroes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "power") {
        filteredHeroes.sort((a, b) => b.power - a.power);
    }

    // Output filtered heroes to console for demonstration
    console.log(filteredHeroes);
}


// Call initHeroesSection() when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    initHeroesSection();
});
