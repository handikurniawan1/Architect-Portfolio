var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


// animasi
// About
const aboutSection = document.querySelector('#about');


function fadeInAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutSection.classList.add('fade-in');
    
            observer.unobserve(entry.target);
        }
    });
}

const options = {
    threshold: 0.5, 
    once: true 
};

const observer = new IntersectionObserver(fadeInAnimation, options);

observer.observe(aboutSection);

// portfolio
const portfolioSection = document.querySelector('#portfolio');

function fadeInPortfolio(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            portfolioSection.classList.add('fade-in');
    
            observer.unobserve(entry.target);
        }
    });
}

const optionsPortfolio = {
    threshold: 0.5, 
    once: true
};

const observerPortfolio = new IntersectionObserver(fadeInPortfolio, optionsPortfolio);

observerPortfolio.observe(portfolioSection);


//services
const servicesSection = document.querySelector('#services');

function fadeInServices(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            servicesSection.classList.add('fade-in');
    
            observer.unobserve(entry.target);
        }
    });
}

const optionsServices = {
    threshold: 0.5, 
    once: true 
};

const observerServices = new IntersectionObserver(fadeInServices, optionsServices);

observerServices.observe(servicesSection);
