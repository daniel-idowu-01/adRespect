
const search_icon = document.querySelector('.search-icon');
const search_input = document.querySelector('.search-input');
const search_input_menu = document.querySelector('.search-input-menu');
const sideBar = document.querySelector('.sidebar');
const btn = document.querySelector('.btn');
const blur_image = document.querySelectorAll('.blur-image');
const more_portfolio = document.querySelector('.more_portfolio');
var currentImage = 2;
let search_menu = false;

// function to display and hide the search bar
const openSearch = () => {
    if(search_menu === false) {
        search_input.style.display = 'grid';
        search_input.setAttribute('open', '');
        search_menu = true;
    } else {
        search_input.style.display = 'none';
        search_menu = false;
        
    }  
}

// function to open search input in mobile
const openMenuSearch = () => {
    if(search_menu === false) {
        search_input_menu.style.display = 'grid';
        search_input_menu.setAttribute('open', '');
        search_menu = true;
    } else {
        search_input_menu.style.display = 'none';
        search_menu = false;       
    }  
}

// function to  show the side bar
const openSideBar = () => {
    sideBar.style.display = 'block';
    sideBar.setAttribute('open', '');
}

// function to hide the side bar
const closeSideBar = () => {
    sideBar.style.display = 'none';
    sideBar.setAttribute('closed', '');

    sideBar.addEventListener('animation', () => {
        sideBar.removeAttribute('closing');
        sideBar.close();
    }, {once: true});
}


// function when show more button is clicked on the portfolio section
btn.addEventListener('click', () => {
    more_portfolio.style.display = 'grid';
    btn.style.display = 'none';

    for(let i = 0; i < 6; i++) {
        if(blur_image[i]) {
            blur_image[i].style.opacity = '1';
        }
    }
})



// Get a reference to the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top of the document when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
  /* document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera */
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



