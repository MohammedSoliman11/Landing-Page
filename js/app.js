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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// set up the css of nav-bar
const nav = document.getElementById('navbar__list');
// get all sections on the page
const sections = document.querySelectorAll('section');
// the fragment of added list-item of nav-bar
const navFrag = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// scroll to specific position on screen using top and left position (x,y)
scrollToPosition = function(top, left){
    window.scrollTo({
        top:  top  + window.scrollY,
        left: left + window.scrollX,
        behavior: 'smooth'
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


for(let i = 1; i <= sections.length ; i++){
    // create new list-item and put css in it
    const newListItem = document.createElement('li');
    
    // create the anchor link and manipulate it
    const newAnchor = document.createElement('a');
    newAnchor.textContent = "Section "+i;
    newAnchor.classList.add('menu__link');

    // append the A tag into the list item of nav-bar and append it all to the navFrag
    newListItem.appendChild(newAnchor);
    navFrag.appendChild(newListItem);
}

// finally append the navFrag to the main nav-bar
nav.appendChild(navFrag);


// Add class 'active' to section when near top of viewport


// add eventlistener when any user scroll in the page it will do the specific function
document.addEventListener("scroll",function(){
    // iterate on all page sections and determine if it's on viewport or not
    for(let it = 0;it < sections.length;it++){
        // if the current section is on viewport it will add "active" class to it and remove it from all other sections
        if(sections[it].getBoundingClientRect().top >= 0 && sections[it].getBoundingClientRect().top <= 300){
            sections[it].classList.add('your-active-class');
        }else {
            sections[it].classList.remove('your-active-class');
        }
    }
});


// Scroll to anchor ID using scrollTO event

// adding event when any user click on any link on nav-bar it will take him to the specific section on the page
nav.addEventListener('click',(e) => {
    // when click happens on A
    const navElements = document.querySelectorAll("li");
    //console.log(navElements[0]);
    if(e.target.tagName === 'LI' || e.target.tagName === 'A'){
        for(const ele of navElements){
            // console.log(ele.textContent !== e.target.textContent);
            // console.log(e.target.textContent);
            if(ele.textContent === e.target.textContent){
                ele.classList.add('active_tap');
                ele.firstElementChild.setAttribute('style','color:#ffffff');
            }else{
                ele.classList.remove('active_tap');
                ele.firstElementChild.setAttribute('style','color:#000000');
            }
        }
        let arrString = e.target.textContent.split(' ');
        let index = arrString[1]-1;
        let top = sections[index].getBoundingClientRect().top,
        left = sections[index].getBoundingClientRect().left;
        // it takes the user to the specific section on the page
        scrollToPosition(top,left);
    }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


