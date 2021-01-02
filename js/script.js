const projects = [
  {
    id: "search-for-countries",
    name: "Search for countries",
    challenge: "To integrate with the REST Countries API to pull country data and display it like in the designs.",
    technology: ["HTML", "CSS", "plain JavaScript"],
    usability: [
      "See all countries from the API on the homepage",
      "Search for a country using an input field",
      "Filter countries by region",
      "Click on a country to see more detailed information on a separate page",
      "Toggle the color scheme between light and dark mode"
    ],
    link: "https://github.com/marinazzz/search-for-countries"
  },
  {
    id: "cooking-calculator",
    name: "Cooking Calculator",
    challenge: "To create web app written in vanilla JavaScript and display it like in the designs.",
    technology: ["HTML", "CSS", "plain JavaScript"],
    usability: [
      "Fill out the information using input fields",
      "Add more ingredients fields when clicking on the add button",
      "Submit form and get calculated recipe",
      "Receive an error message when the form is submitted if the input field is empty",
      "Click on print button to print out calculated recipe"
    ],
    link: "https://github.com/marinazzz/cooking-calculator"
  },
  {
    id: "url-shortener",
    name: "Shortly URL Shortener",
    challenge: "To integrate with the shrtcode API to create shortened URLs and display them like in the designs.",
    technology: ["Bootstrap", "SASS", "jQuery"],
    usability: [
      "View the optimal layout for the site depending on their device's screen size",
      "Shorten any valid URL",
      "See a list of their shortened links",
      "Copy the shortened link to their clipboard in a single click",
      "Receive an error message when the form is submitted if the input field is empty"
    ],
    link: "https://github.com/marinazzz/url-shortening-app"
  },
  {
    id: "easybank",
    name: "Easybank Landing Page",
    challenge: "To build out landing page and get it looking as close to the design as possible",
    technology: ["HTML", "SASS", "plain JavaScript"],
    usability: [
      "View the optimal layout for the site depending on their device's screen size",
      "See hover states for all interactive elements on the page"
    ],
    "link": "https://github.com/marinazzz/bank-landing-page"
  },
  {
    id: "garden-site",
    name: "Multi-page Web Template",
    challenge: "To build out multi-page website and get it looking as close to the design as possible",
    technology: ["HTML", "CSS", "plain JavaScript"],
    usability: [
      "View the optimal layout for the site depending on their device's screen size",
      "See hover states for all interactive elements on the page",
      "See all testimonials in a horizontal slider",
      "Receive an error message when the contact form is submitted"
    ],
    link: "https://github.com/marinazzz/garden-design-website"
  },
  {
    id: 'restaurant',
    name: "Restaurant Landing Page",
    challenge: "To build out landing page by adding custom styled Bootstrap",
    technology: ["Bootstrap", "SASS", "jQuery"],
    usability: [
      "View the optimal layout for the site depending on their device's screen size",
      "See hover states for all interactive elements on the page"
    ],
    link: "https://github.com/marinazzz/restaurant-website"
  }
];


const navBtn = document.querySelector('.nav__button');
const navList = document.querySelector('.nav__list-wrapp');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', function (e) {
  e.preventDefault;

  toggleClasslist(this, 'nav__button--open');
  checkClassActive(navList, 'nav__list-wrapp--open');

  setTimeout(() => {
    checkClassActive(overlay, 'overlay--active');
  }, 300);

})

let toggler = false;
function toggleClasslist(e, name) {
  if (!toggler) {
    e.classList.add(name);
    toggler = true;
  }
  else {
    e.classList.remove(name);
    toggler = false;
  }
}

function checkClassActive(e, name) {
  if (!toggler) {
    e.classList.remove(name);
  }
  else {
    e.classList.add(name);
  }
}

//removes active classes on menu list click
const menuListArr = [...document.querySelectorAll('.nav__menu-item')];

menuListArr.forEach(e => e.addEventListener('click', function () {
  if (toggler) {
    toggleClasslist(navBtn, 'nav__button--open');
    checkClassActive(overlay, 'overlay--active');
    checkClassActive(navList, 'nav__list-wrapp--open');
  }
}))


const darkModeToggler = document.querySelector('.nav__items-toggler')
const darkModeBtn = document.querySelector('.nav__items-btn')

darkModeToggler.addEventListener('click', () => {

  darkModeBtn.classList.toggle('clicked');
  darkModeToggler.classList.toggle('dark');
  document.body.classList.toggle('dark-mode');
})

const infoBtns = [...document.querySelectorAll('.info-btn')];
infoBtns.forEach(element => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    const projectId = element.parentNode.parentNode.getAttribute('data-project-id');
    const projectData = projects.find(project => project.id === projectId);
    modalModule.show(projectData);
  });
});
