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
let sec_Nav=document.querySelectorAll("section");
let nav_Tag=document.getElementById("navbar__list");
let sec_Nav_Len=sec_Nav.length;
let sec_Nav_Pos=[];
let previous_Pos=0;
let current_Pos=0;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Scroll to anchor ID using scrollTO event
function sec_scroll(sectionID){
    window.scrollTo(0,sectionID);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sec_Nav.forEach((element,index)=>{
    let Off_Sec=element.offsetTop+50;
    let list=document.createElement("li");
    let sec=element.getAttribute("data-nav");
    list.setAttribute("class","menu__link"+index);
    list.innerHTML=`<a onclick="sec_scroll(${Off_Sec})">${sec}</a>`;
    nav_Tag.appendChild(list);
});


// Add class 'active' to section when near top of viewport


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


document.addEventListener("scroll",()=>{
    sec_Nav_Pos=[];
    current_Pos=this.scrollY;
    sec_Nav.forEach((element)=>sec_Nav_Pos.push(element.getBoundingClientRect().top+150));
    let Index_add=sec_Nav_Pos.findIndex((element)=>element>0);
	for (let i = 0; i < sec_Nav_Len; i++) {
		if (Index_add === i) {
			document.querySelector(".menu__link" + Index_add).classList.add("active");
			document.querySelector(`#section${Index_add + 1}`).classList.add("your-active-class");
		} else {
			document.querySelector(".menu__link" + i).classList.remove("active");
			document.querySelector(`#section${i + 1}`).removeAttribute("class");
		}
	}
});