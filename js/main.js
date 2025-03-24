// Content Manipulation
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);

let buttons = document.querySelectorAll('.energy-button');

let database = {
    solar: {
        title: "Affordable Solar Panels",
        body: "Solar energy is a renewable power source that harnesses sunlight to generate electricity.",
        url: "./img/img-1.jpg",
        alt: "Solar Panels Installation"
    },
    wind: {
        title: "Wind Energy Solutions",
        body: "Wind turbines convert the kinetic energy of wind into electrical power.",
        url: "./img/img-2.jpg",
        alt: "Wind Turbines Landscape"
    },
    efficiency: {
        title: "Energy Efficiency Strategies",
        body: "Improve your energy consumption with some comprehensive efficiency solutions.",
        url: "./img/img-3.jpg",
        alt: "Energy Efficiency Concept"
    }
};

let content = document.querySelector('.energy-content');

function handleSelection(event) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')) {
            buttons[i].removeAttribute('id');
        }
    }

    let current = event.currentTarget;
    current.setAttribute('id', 'active-button');

    let key = current.dataset.id;

    content.innerHTML = `
        <div class="energy-image">
            <img class="image-responsive" src="${database[key].url}" alt="${database[key].alt}">
        </div>
        <div class="energy-text">
            <h2 class="site-heading">${database[key].title}</h2>
            <p class="site-description">${database[key].body}</p>
            <div class="space-top-1">
                <a href="#" class="site-button">Read More</a>
            </div>
        </div>
    `;
}

for (let btn of buttons) {
    btn.addEventListener('click', handleSelection);
}

// Mobile Menu
const body = document.querySelector('body');

function responsiveMenuOn() {
    body.classList.add('responsive-menu-active');
}

function responsiveMenuOff() {
    body.classList.remove('responsive-menu-active');
}
