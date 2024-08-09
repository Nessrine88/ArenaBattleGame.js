/*

function initHeroesSection() {}

function filterHeroes(e) {}
*/

document.addEventListener('DOMContentLoaded', () => {
  let heroesToFilter = heroes();

  function initHeroesSection() {
    const input = document.getElementById('input');
    const filterButton = document.getElementById('filter-button');
    const raceDropdown = document.getElementById("race-dropdown");
    const attributeDropdown = document.getElementById("attribute-dropdown");
    const sortDropdown = document.getElementById("sort-dropdown");
    const alignmentGood = document.getElementById("alignment-good");
    const alignmentBad = document.getElementById("alignment-bad");
    const alignmentNeutral = document.getElementById("alignment-neutral");
    return { input, filterButton, raceDropdown, attributeDropdown, sortDropdown, alignmentGood, alignmentBad, alignmentNeutral };
  }

  function getAttributeValue(hero, attributePath) {
    const keys = attributePath.split(".");
    let value = hero;
    for (let key of keys) {
      value = value[key];
      if (value === undefined) break;
    }
    return value;
  }

  function filterHeroes(e) {
    e.preventDefault();

    const { input, raceDropdown, attributeDropdown, sortDropdown, alignmentGood, alignmentBad, alignmentNeutral } = initHeroesSection();
    const filter = input.value.trim().toUpperCase();
    const attribute = attributeDropdown.value;
    const selectedRace = raceDropdown.value;
    const sortOrder = sortDropdown.value;
    const selectedAlignments = [];


    // Collect selected alignments
    if (alignmentGood.checked) selectedAlignments.push("good");
    if (alignmentBad.checked) selectedAlignments.push("bad");
    if (alignmentNeutral.checked) selectedAlignments.push("neutral");

    // Filter heroes based on the input
    let filteredHeroes = heroesToFilter.filter(hero =>
      hero.name.toUpperCase().includes(filter)
    );
    
    // Filter heroes by Race 
    if (selectedRace && selectedRace !== "All") {
      filteredHeroes = filteredHeroes.filter(
        (hero) => hero.appearance.race === selectedRace
      );
    }
  
    // Further filter by alignment if any alignment is selected
    if (selectedAlignments.length > 0) {
      filteredHeroes = filteredHeroes.filter(hero =>
        selectedAlignments.includes(hero.biography.alignment)
      );
    }

    // Sort filtered heroes by the selected attribute
    const sortedHeroes = filteredHeroes.slice().sort((a, b) => {
      const valueA = getAttributeValue(a, attribute);
      const valueB = getAttributeValue(b, attribute);

      if (attribute === 'cost') {
        return sortOrder === "asc" ? calculateCost(a) - calculateCost(b) : calculateCost(b) - calculateCost(a);
      }
      if (attribute === 'priority') {
        return sortOrder === "asc" ? calculatePriority(a) - calculatePriority(b) : calculatePriority(b) - calculatePriority(a);
      }

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }
    });

    // Render the sorted heroes
    render_heroData('#heroes-list', sortedHeroes, 'selected');
  }

  const { filterButton } = initHeroesSection();
  filterButton.addEventListener('click', filterHeroes);

  // Initial render
  render_heroData('#heroes-list', heroesToFilter);
});
