// function initHallOfFameSection(){    
    
// }


/* your functions */

function initHallOfFameSection(){    
   const hallOffames = initializeHallOfFame()
   console.log(hallOffames);
  
    render_heroData("#hall-of-fame",hallOffames)
   
    
    
}
document.addEventListener('DOMContentLoaded',()=> {
    initHallOfFameSection();
})
