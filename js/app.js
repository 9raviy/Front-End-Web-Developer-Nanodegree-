/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
let sections = document.querySelectorAll(".landing__container");
let unorderedList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
let list = "";
let count = 1;
for (const section of sections) {
    list = list + "<li class='menu__link nav-item' id='sec" + count + "'><a href='#section" + count + "'><h5>Section" + count + "</h5></a></li>";
    count = count + 1;
};
unorderedList.innerHTML = list;




// Add class 'active' to section when near top of viewport

//Function to check if called section is within the view port
function isActiveSection(secInView) {
    let bound = secInView.getBoundingClientRect();
    return (bound.top <= 50 &&
        bound.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        bound.right <=
        (window.innerWidth || document.documentElement.clientWidth));
}

//Function to delete active class tag from all sections when called
function deactivateNavlinks(sections) {

    for (let i = 1; i <= sections.length; i++) {
        let sec = document.getElementById("section" + i);
        sec.classList.remove("your-active-class");
    }
}

//Function to check if a current section is viewport and add the active class after removing active classes from all sections
counter = 1;
for (const section of sections) {
    let secInView = document.getElementById("section" + counter);
    deactivateNavlinks(sections);
    counter = counter + 1;
    window.addEventListener("scroll", function(event) {
        if (isActiveSection(secInView)) {
            secInView.classList.add("your-active-class");
        } else {
            secInView.classList.remove("your-active-class");
        }
    });
}

// Scroll to anchor ID when the nav bar link is clicked
let anchors = document.querySelectorAll('a[href^="#"]')

for (let item of anchors) {
    item.addEventListener('click', (event) => {
        let val = item.getAttribute('href');
        let target = document.querySelector(val);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        history.pushState(null, null, val);
        event.preventDefault();
    });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 

// Scroll to section on link click