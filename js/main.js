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
        body: "Solar energy is a clean, renewable power source that harnesses sunlight to generate electricity. Our cutting-edge solar panels provide an efficient and sustainable solution for reducing carbon footprint and lowering energy costs.",
        url: "./img/img-1.jpg",
        alt: "Solar Panels Installation"
    },
    wind: {
        title: "Wind Energy Solutions",
        body: "Wind turbines convert the kinetic energy of wind into electrical power. Our wind energy systems are designed to maximize efficiency and provide a reliable, eco-friendly alternative to traditional power generation methods.",
        url: "./img/img-2.jpg",
        alt: "Wind Turbines Landscape"
    },
    efficiency: {
        title: "Energy Efficiency Strategies",
        body: "Improve your energy consumption with our comprehensive efficiency solutions. We offer smart technologies and strategies to reduce waste, lower costs, and create more sustainable living and working environments.",
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
            <h2 class="site-heading space-bottom-1-2">${database[key].title}</h2>
            <p class="site-description">${database[key].body}</p>
            <div class="space-top-2">
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
