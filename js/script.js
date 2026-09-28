const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        mainNav.classList.toggle("open");
    });
}


const filterButtons = document.querySelectorAll(".filter-button");
const eventCards = document.querySelectorAll(".event-card");
const noEventsMessage = document.getElementById("no-events");


function filterEvents(category) {
    let cardsShown = 0;

    eventCards.forEach(function (card) {
        if (category === "all" || card.dataset.category === category) {
            card.classList.remove("hidden");
            cardsShown = cardsShown + 1;
        } else {
            card.classList.add("hidden");
        }
    });

  
    if (cardsShown === 0) {
        noEventsMessage.classList.remove("hidden");
    } else {
        noEventsMessage.classList.add("hidden");
    }
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
       
        filterButtons.forEach(function (categoryButton) {
            categoryButton.classList.remove("active");
        });

       
        button.classList.add("active");

        filterEvents(button.dataset.filter);
    });
});


const contactForm = document.getElementById("contact-form");

function showError(fieldId, message) {
    document.getElementById(fieldId + "-error").textContent = message;
}

if (contactForm) {
    contactForm.addEventListener("submit", function (submitEvent) {
      
        submitEvent.preventDefault();

      
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("form-message");

        
        let formIsValid = true;

      
        showError("name", "");
        showError("email", "");
        showError("subject", "");
        showError("message", "");

        if (name === "") {
            showError("name", "Please enter your full name.");
            formIsValid = false;
        }

        
        if (email === "" || !email.includes("@") || !email.includes(".")) {
            showError("email", "Please enter a valid email address.");
            formIsValid = false;
        }

        if (subject === "") {
            showError("subject", "Please enter a subject.");
            formIsValid = false;
        }

        if (message === "") {
            showError("message", "Please enter your message.");
            formIsValid = false;
        }

        if (formIsValid) {
            formMessage.textContent = "Thank you, " + name + ". Your message has been received.";
            formMessage.classList.remove("hidden");
            contactForm.reset();
        } else {
            formMessage.classList.add("hidden");
        }
    });
}
