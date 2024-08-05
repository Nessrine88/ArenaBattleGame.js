function initNavigation() {

}

function navigate(e) {
   
}

function activateSection(selector) {
    
}


/* your functions */

// Initialize navigation setup
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', navigate);
    });
}

// Handle navigation logic
function navigate(e) {
    const pageId = e.target.dataset.pageId;
    activateSection(pageId);
}

// Show the page with the specified pageId and hide others
function activateSection(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    } else {
        console.error(`Page with id '${pageId}' not found.`);
    }
}

document.addEventListener('DOMContentLoaded', initNavigation);
